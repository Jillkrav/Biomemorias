// Haversine formula to calculate distance between two points in km
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
};

const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
};

// Group markers into clusters based on maxDistance
export const findClusters = (markers, maxDistance) => {
    const clusters = [];
    const visited = new Set();

    markers.forEach((marker) => {
        if (visited.has(marker.id)) return;

        const cluster = [marker];
        visited.add(marker.id);
        const queue = [marker];

        while (queue.length > 0) {
            const current = queue.shift();

            markers.forEach((other) => {
                if (!visited.has(other.id)) {
                    const dist = calculateDistance(
                        current.latitude,
                        current.longitude,
                        other.latitude,
                        other.longitude
                    );

                    if (dist <= maxDistance) {
                        visited.add(other.id);
                        cluster.push(other);
                        queue.push(other);
                    }
                }
            });
        }

        if (cluster.length >= 3) {
            clusters.push(cluster);
        }
    });

    return clusters;
};

// Calculate Convex Hull using Monotone Chain algorithm
export const getConvexHull = (points) => {
    if (points.length < 3) return points;

    const sorted = points.slice().sort((a, b) => {
        return a.latitude === b.latitude
            ? a.longitude - b.longitude
            : a.latitude - b.latitude;
    });

    const crossProduct = (o, a, b) => {
        return (
            (a.longitude - o.longitude) * (b.latitude - o.latitude) -
            (a.latitude - o.latitude) * (b.longitude - o.longitude)
        );
    };

    const lower = [];
    for (let i = 0; i < sorted.length; i++) {
        while (
            lower.length >= 2 &&
            crossProduct(
                lower[lower.length - 2],
                lower[lower.length - 1],
                sorted[i]
            ) <= 0
        ) {
            lower.pop();
        }
        lower.push(sorted[i]);
    }

    const upper = [];
    for (let i = sorted.length - 1; i >= 0; i--) {
        while (
            upper.length >= 2 &&
            crossProduct(
                upper[upper.length - 2],
                upper[upper.length - 1],
                sorted[i]
            ) <= 0
        ) {
            upper.pop();
        }
        upper.push(sorted[i]);
    }

    upper.pop();
    lower.pop();
    return lower.concat(upper);
};
