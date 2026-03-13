import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, Globe2, ChevronDown, Facebook, Instagram, Mail, Eye, Type } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    // Helper to determine if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-[#e5ce8c] text-[#0b6d6d] uppercase text-sm md:text-sm font-bold tracking-wide md:tracking-wide">
            {/* Top Bar with Logo and Menu */}
            <div className="w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">

                    {/* Logo Area (Left) */}
                    <Link to="/" className="flex items-center px-4 h-14 md:h-16 bg-transparent flex-shrink-0 overflow-hidden md:self-start">
                        <img 
                            src="https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/logotipo nuestra quinta costa.png" 
                            alt="Nuestra Quinta Costa" 
                            className="h-9 md:h-11 w-auto object-contain"
                        />
                    </Link>

                    {/* Navigation Items */}
                    <div className="flex-1 flex flex-wrap md:flex-nowrap items-start content-start justify-center md:justify-start bg-[#e5ce8c] px-1 md:self-start min-w-0">
                        <Link
                            to="/"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                SOBRE QUINTA COSTA
                            </span>
                        </Link>
                        <Link
                            to="/about"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/about') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/about') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                COLABORAN
                            </span>
                        </Link>
                        <Link
                            to="/juguemos"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/juguemos') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/juguemos') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                JUGUEMOS
                            </span>
                        </Link>
                        <Link
                            to="/mapa2"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/mapa2') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/mapa2') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                ESPACIOS BIOCULTURALES
                            </span>
                        </Link>
                        <Link to="#" className="h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 hover:border-b-8 hover:border-[#2A9D8F]">
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg text-[#0b6d6d] leading-tight tracking-wide whitespace-nowrap`}
                            >
                                DESCARGA QUINTA COSTA
                            </span>
                        </Link>
                        <Link 
                            to="/problematicas"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/problematicas') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/problematicas') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                PROBLEMÁTICAS
                            </span>
                        </Link>
                        <Link 
                            to="/mibarrio"
                            className={`h-14 md:h-16 flex items-center px-2 md:px-3 transition-colors flex-shrink-0 ${isActive('/mibarrio') ? 'bg-[#009b9f]' : ''} hover:border-b-8 hover:border-[#2A9D8F]`}
                        >
                            <span
                                style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}
                                className={`text-lg md:text-base lg:text-lg ${isActive('/mibarrio') ? 'text-white' : 'text-[#0b6d6d]'} leading-tight tracking-wide whitespace-nowrap`}
                            >
                                MI BARRIO
                            </span>
                        </Link>
                    </div>

                    {/* Right Side Icons & Lang */}
                    <div className="flex items-center space-x-1 px-3 py-2 bg-[#e5ce8c] md:self-start">
                        <div className="relative group cursor-pointer mr-2">
                            <div className="bg-[#009b9f] text-white px-2 py-1 flex items-center gap-1 text-[10px] rounded">
                                ESPAÑOL <ChevronDown size={14} color="#e5ce8c" />
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="bg-[#F4E9DC] rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Facebook size={14} className="text-[#e5ce8c]" /></div>
                            <div className="bg-[#F4E9DC] rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Instagram size={14} className="text-[#e5ce8c]" /></div>
                            <div className="bg-[#F4E9DC] rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Mail size={14} className="text-[#e5ce8c]" /></div>
                            <div className="bg-[#F4E9DC] rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Type size={14} className="text-[#e5ce8c]" /></div>
                            <div className="bg-[#F4E9DC] rounded-full p-1 cursor-pointer hover:scale-110 transition-transform"><Eye size={14} className="text-[#e5ce8c]" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accent Line */}
        </nav>
    );
};

export default Navbar;
