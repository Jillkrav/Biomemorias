import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, Globe2, ChevronDown, Facebook, Instagram, Mail, Eye, Type } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    // Helper to determine if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-[#e8dcb9] text-slate-800 uppercase text-xs md:text-sm font-bold tracking-tight">
            {/* Top Bar with Logo and Menu */}
            <div className="w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Logo Area (Left) */}
                    <Link to="/" className="flex items-center px-4 py-2 bg-gradient-to-b from-white to-[#f0f0f0] h-12 md:h-14">
                        <div className="flex flex-col leading-none">
                            <span className="text-[#dba653] font-serif italic text-lg transform -rotate-2">Nuestra</span>
                            <span className="text-[#008f91] text-lg font-black uppercase -mt-1">Quinta</span>
                            <span className="text-[#dba653] text-lg font-black uppercase -mt-1 ml-4">Costa</span>
                        </div>
                    </Link>

                    {/* Navigation Items */}
                    <div className="flex-1 flex flex-wrap items-center justify-center md:justify-start bg-[#e8dcb9] px-2">
                        <Link
                            to="/"
                            className={`px-3 py-4 hover:text-[#008f91] transition-colors ${isActive('/') ? 'text-[#008f91] border-b-4 border-[#008f91]' : 'text-slate-600'}`}
                        >
                            Sobre Quinta Costa
                        </Link>
                        <Link
                            to="/about"
                            className={`px-3 py-4 hover:text-[#008f91] transition-colors ${isActive('/about') ? 'text-[#008f91] border-b-4 border-[#008f91]' : 'text-slate-600'}`}
                        >
                            Colaboran
                        </Link>
                        <Link to="#" className="px-3 py-4 text-slate-600 hover:text-[#008f91] transition-colors">
                            Juguemos
                        </Link>
                        <Link
                            to="/map"
                            className={`px-3 py-4 hover:text-[#008f91] transition-colors ${isActive('/map') ? 'text-[#008f91] border-b-4 border-[#008f91]' : 'text-slate-600'}`}
                        >
                            Espacios Bioculturales
                        </Link>
                        <Link to="#" className="px-3 py-4 bg-[#009b9f] text-white hover:bg-[#008387] transition-colors">
                            Descarga Quinta Costa
                        </Link>
                        <Link to="#" className="px-3 py-4 text-slate-600 hover:text-[#008f91] transition-colors">
                            Problemáticas
                        </Link>
                        <Link to="#" className="px-3 py-4 text-slate-600 hover:text-[#008f91] transition-colors">
                            Mi Barrio
                        </Link>
                    </div>

                    {/* Right Side Icons & Lang */}
                    <div className="flex items-center space-x-2 px-4 py-2 bg-[#e8dcb9]">
                        <div className="relative group cursor-pointer mr-2">
                            <div className="bg-[#009b9f] text-white px-3 py-1 flex items-center gap-1 text-xs">
                                ESPAÑOL <ChevronDown size={14} />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#e5ce8c]">
                            <div className="bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Facebook size={18} fill="#e5ce8c" className="text-white" /></div>
                            <div className="bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Instagram size={18} className="text-[#e5ce8c]" /></div>
                            <div className="bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Mail size={18} className="text-[#e5ce8c]" /></div>
                            <div className="bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Type size={18} className="text-[#e5ce8c]" /></div>
                            <div className="bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Eye size={18} className="text-[#e5ce8c]" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accent Line */}
            <div className="h-1 w-full bg-[#009b9f]"></div>
        </nav>
    );
};

export default Navbar;
