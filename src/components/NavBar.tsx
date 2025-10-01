'use client';

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const navigation = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Coding Profiles", href: "#codingprofiles" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Tech Stack", href: "#techstack" },
    { id: 5, name: "Contact", href: "#contact" },
]

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky inset-x-0 top-0 z-50 p-4">
            <nav className="flex items-center justify-between bg-black/80 backdrop-blur-md border border-zinc-800/50 rounded-2xl max-w-6xl mx-auto px-6 py-4 shadow-2xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <Image
                                src="/img/profile-left.png"
                                alt="Souradeep profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="hidden lg:block text-white font-semibold text-xl">Souradeep</span>
                </Link>

                {/* Desktop Navigation - Horizontal */}
                <div className="hidden md:flex items-center gap-2">
                    {navigation.map((item) => (
                        <Link 
                            key={item.id}
                            href={item.href} 
                            className="text-zinc-300 hover:text-white hover:bg-cyan-500/20 rounded-lg px-4 py-2 transition-all duration-200 font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <div 
                        className="btn btn-ghost btn-circle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <ul className="absolute top-full right-0 mt-2 z-[1] p-4 shadow-2xl bg-black/95 backdrop-blur-md border border-zinc-800 rounded-2xl w-64">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <Link 
                                        href={item.href} 
                                        className="block text-zinc-300 hover:text-white hover:bg-cyan-500/20 rounded-lg p-3 transition-all duration-200 w-full text-left"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export { NavBar }
