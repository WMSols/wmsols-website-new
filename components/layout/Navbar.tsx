"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData } from "@/data/navigation";

export interface NavItem {
  item: string;
  href: string;
  children?: NavItem[];
}

// --- LOGO (Optimized to use Next Link) ---
const Logo: React.FC<{ isLightMode?: boolean }> = ({ isLightMode }) => (
  <Link href="/" className="flex items-center gap-2 z-50">
    <div
      className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-lg"
      style={{ background: 'linear-gradient(to top, #2868A3 0%, #3DA8FF 56%, #1C1344 150%)' }}
    >
      W
    </div>
    <span className="text-xl font-bold tracking-wide text-[#3DA8FF]">
      WM<span className={isLightMode ? 'text-gray-700' : 'text-white'}>Sols</span>
    </span>
  </Link>
);

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const currentPath = pathname || '';

  // Unified State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Desktop hover state
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // Desktop mega-menu state
  const [expandedItems, setExpandedItems] = useState<string[]>([]); // Mobile accordion state

  // Determine theme based on route
  const isLightMode =
    (currentPath.startsWith('/careers/') && currentPath.length > '/careers/'.length) ||
    (currentPath.startsWith('/blogs-newsroom/') && currentPath.length > '/blogs-newsroom/'.length);

  // 1. Optimized Scroll Listener (Passive flag tells browser this won't block scrolling)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handlers
  const handleDesktopMouseEnter = useCallback((navItem: NavItem) => {
    setHoveredItem(navItem.item);
    if (navItem.children?.length) {
      setActiveCategory(navItem.children[0].item);
    }
  }, []);

  const toggleMobileExpand = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    // 2. Unified Header Element (Cuts DOM depth in half)
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-999 transition-all duration-300 ${
        isScrolled || isOpen
          ? isLightMode
            ? 'bg-white border-b border-gray-200'
            : 'bg-[#070714] border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        
        {/* Render Logo Once */}
        <Logo isLightMode={isLightMode && !isOpen} />

        {/* ========================================= */}
        {/* DESKTOP NAVIGATION (Hidden on Mobile)     */}
        {/* ========================================= */}
        <nav className="hidden lg:flex items-center text-base space-x-8 h-full">
          {navigationData.map((navItem) => {
            const isActive = currentPath === navItem.href || currentPath.startsWith(navItem.href + '/');
            const hasChildren = navItem.children && navItem.children.length > 0;
            const isHovered = hoveredItem === navItem.item;

            return (
              <div
                key={navItem.item}
                className="h-full flex items-center"
                onMouseEnter={() => handleDesktopMouseEnter(navItem)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* 3. Replaced <a> with Next.js <Link> for SPA routing */}
                <Link
                  href={navItem.href}
                  className={`flex items-center text-sm font-normal transition-colors ${
                    isActive
                      ? 'text-blue-500'
                      : isLightMode
                        ? 'text-black hover:text-blue-500'
                        : 'text-gray-300 hover:text-blue-500'
                  }`}
                >
                  {navItem.item}
                  {hasChildren && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>

                {/* Desktop Mega Menu Dropdown */}
                {hasChildren && (
                  <div className={`absolute top-full left-0 w-full bg-white text-gray-900 shadow-2xl border-t-4 border-[#3b82f6] transition-all duration-300 ease-out transform ${
                    isHovered ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'
                  }`}>
                    <div className="max-w-7xl mx-auto flex w-full min-h-75">
                      <div className="w-1/4 p-8 bg-gray-50 border-r border-gray-200">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Explore</span>
                        <h1 className="text-3xl font-sans font-bold text-black">{navItem.item}</h1>
                      </div>
                      <div className="w-1/3 p-6 border-r border-gray-200">
                        <ul className="space-y-4">
                          {navItem.children?.map((child) => (
                            <li key={child.item}>
                              <Link
                                href={child.href}
                                className={`flex items-center cursor-pointer gap-3 text-sm w-full text-left transition-colors ${
                                  activeCategory === child.item ? 'text-[#3b82f6]' : 'text-gray-700 hover:text-[#3b82f6]'
                                }`}
                                onMouseEnter={() => setActiveCategory(child.item)}
                                onClick={() => setHoveredItem(null)} // Close menu on click
                              >
                                <span className="text-gray-400">•</span>
                                {child.item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-5/12 p-6 bg-white">
                        <ul className="space-y-4">
                          {navItem.children?.find(c => c.item === activeCategory)?.children?.map((grandchild) => (
                            <li key={grandchild.item}>
                              <Link
                                href={grandchild.href}
                                className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3b82f6] transition-colors"
                                onClick={() => setHoveredItem(null)}
                              >
                                <span className="text-gray-300">-</span>
                                {grandchild.item}
                              </Link>
                            </li>
                          )) || (
                            <li className="text-sm text-gray-500 italic">Select an option to view details.</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden lg:block px-6 py-2.5 text-sm font-normal rounded-sm transition-colors ${
            isLightMode
              ? 'text-black border border-black hover:bg-black/5'
              : 'text-white border border-gray-500 hover:bg-white/10'
          }`}
        >
          Get Started
        </Link>

        {/* ========================================= */}
        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        {/* ========================================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 z-50 focus:outline-none transition-colors ${
            isLightMode && !isOpen ? 'text-black' : 'text-white'
          }`}
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ========================================= */}
      {/* MOBILE MENU OVERLAY (Hidden on Desktop)   */}
      {/* ========================================= */}
      <div 
        id="mobile-menu" 
        className={`lg:hidden fixed inset-0 top-24 bg-[#070714] -z-10 transition-transform duration-300 ease-in-out px-4 pb-8 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-2 mt-4">
          {navigationData.map((navItem) => {
            const isActive = currentPath === navItem.href;
            const hasChildren = navItem.children && navItem.children.length > 0;
            const isExpanded = expandedItems.includes(navItem.item);

            return (
              <div key={navItem.item} className="border-b border-gray-800 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={navItem.href}
                    onClick={() => setIsOpen(false)} // Close menu on navigation
                    className={`text-lg font-normal py-3 ${isActive ? 'text-[#3b82f6]' : 'text-white'}`}
                  >
                    {navItem.item}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={(e) => toggleMobileExpand(navItem.item, e)}
                      className="p-3 text-gray-400"
                      aria-label={isExpanded ? `Collapse ${navItem.item} submenu` : `Expand ${navItem.item} submenu`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="pl-4 pb-3 space-y-4">
                    {navItem.children?.map(child => (
                      <div key={child.item}>
                        <Link href={child.href} onClick={() => setIsOpen(false)} className="text-md font-normal text-gray-300 block mb-2">
                          {child.item}
                        </Link>
                        {child.children && (
                          <div className="pl-4 space-y-2 border-l border-gray-700">
                            {child.children.map(grandchild => (
                              <Link
                                key={grandchild.item}
                                href={grandchild.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-normal text-gray-500 hover:text-white"
                              >
                                {grandchild.item}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-8">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 text-center text-sm font-normal text-white bg-[#2563eb] rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};