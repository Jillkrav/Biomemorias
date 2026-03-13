import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const GITHUB_REPO = 'Jillkrav/Biomemorias';
const GITHUB_BRANCH = 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const TREE_CACHE_TTL_MS = 5 * 60 * 1000;
let treeCache = { ts: 0, data: null };

function buildJsDelivrUrl(repoPath) {
  // repoPath is a path within the repo, e.g. "src/assets/Cerros/.../file.jpg"
  const encoded = String(repoPath)
    .split('/')
    .map((p) => encodeURIComponent(p))
    .join('/');
  return `https://cdn.jsdelivr.net/gh/${GITHUB_REPO}@${GITHUB_BRANCH}/${encoded}`;
}

function buildGitHubRawUrl(repoPath) {
  const [owner, repo] = String(GITHUB_REPO).split('/');
  const encoded = String(repoPath)
    .split('/')
    .map((p) => encodeURIComponent(p))
    .join('/');
  return `https://raw.githubusercontent.com/${owner}/${repo}/${GITHUB_BRANCH}/${encoded}`;
}

async function fetchGitHubTreeRecursive() {
  const now = Date.now();
  if (treeCache.data && now - treeCache.ts < TREE_CACHE_TTL_MS) {
    return treeCache.data;
  }

  // Fetch full repo tree once; this is much cheaper than walking /contents recursively.
  const url = `https://api.github.com/repos/${GITHUB_REPO}/git/trees/${encodeURIComponent(GITHUB_BRANCH)}?recursive=1`;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'BioMemorias-App'
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      if (response.status === 403) {
        const remaining = response.headers.get('x-ratelimit-remaining');
        const reset = response.headers.get('x-ratelimit-reset');
        console.warn('GitHub API rate limit exceeded (trees).');
        return {
          error: 'Rate limit exceeded',
          status: 403,
          fallback: false,
          rate_limit: {
            remaining: remaining != null ? Number(remaining) : null,
            reset_unix: reset != null ? Number(reset) : null
          },
          hint: 'Para escaneo recursivo automático necesitas configurar GITHUB_TOKEN en el backend (.env).'
        };
      }
      const errorText = await response.text();
      console.error(`GitHub tree API error (${response.status}):`, errorText);
      return { error: `GitHub API error: ${response.status}`, status: response.status };
    }

    const payload = await response.json();
    if (!payload || !Array.isArray(payload.tree)) {
      treeCache = { ts: now, data: [] };
      return [];
    }

    treeCache = { ts: now, data: payload.tree };
    return payload.tree;
  } catch (error) {
    console.error('Error fetching GitHub tree:', error);
    return { error: error.message, status: 500 };
  }
}

async function fetchGitHubDirectory(path, recursive = false) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}`;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'BioMemorias-App'
  };
  
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      if (response.status === 403) {
        console.warn('GitHub API rate limit exceeded.');
        return { error: 'Rate limit exceeded', status: 403, fallback: true };
      }
      const errorText = await response.text();
      console.error(`GitHub API error (${response.status}):`, errorText);
      return { error: `GitHub API error: ${response.status}`, status: response.status };
    }
    
    const data = await response.json();
    if (!Array.isArray(data)) return [];

    let files = [];
    for (const item of data) {
      if (item.type === 'dir') {
        if (recursive) {
          const subFiles = await fetchGitHubDirectory(item.path, true);
          if (subFiles && subFiles.error) return subFiles;
          if (subFiles && Array.isArray(subFiles)) {
            files = [...files, ...subFiles];
          }
        } else {
          // Si no es recursivo, solo guardamos la referencia a la carpeta
          files.push({
            path: item.path,
            name: item.name,
            type: 'dir'
          });
        }
      } else {
        files.push({
          path: item.path,
          name: item.name,
          type: 'file',
          download_url: item.download_url
        });
      }
    }
    return files;
  } catch (error) {
    console.error(`Error fetching directory ${path}:`, error);
    return { error: error.message, status: 500 };
  }
}

router.get('/files', async (req, res) => {
  try {
    const { path: filePath, recursive } = req.query;
    if (!filePath) {
      return res.status(400).json({ error: 'Path is required' });
    }

    const isRecursive = recursive === 'true';

    // If recursive listing is requested, use tree API (single request + cache)
    // to avoid hitting GitHub /contents rate limits.
    if (isRecursive) {
      const tree = await fetchGitHubTreeRecursive();
      if (tree && tree.error) {
        return res.status(tree.status || 500).json(tree);
      }

      const prefix = String(filePath).replace(/\\/g, '/').replace(/^\//, '').replace(/\/$/, '');
      const prefixWithSlash = `${prefix}/`;

      const out = (Array.isArray(tree) ? tree : [])
        .filter((item) => item && item.type === 'blob' && typeof item.path === 'string')
        .filter((item) => item.path === prefix || item.path.startsWith(prefixWithSlash))
        .map((item) => {
          const name = item.path.split('/').pop();
          return {
            path: item.path,
            name,
            type: 'file',
            download_url: buildGitHubRawUrl(item.path),
            cdn_url: buildJsDelivrUrl(item.path)
          };
        });

      return res.json(out);
    }

    const files = await fetchGitHubDirectory(filePath, false);
    if (files && files.error) {
      return res.status(files.status || 500).json(files);
    }
    res.json(files || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
