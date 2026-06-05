"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigationData } from "@/data/navigation"
import { usePathname } from 'next/navigation';

// --- TYPES ---
export interface NavItem {
  item: string;
  href: string;
  children?: NavItem[];
}

// --- SHARED COMPONENTS ---
const Logo: React.FC<{ isLightMode?: boolean }> = ({ isLightMode }) => (
  <a href="/" className="flex items-center gap-2 z-50">
    <div 
      className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-lg"
      style={{
        background: 'linear-gradient(to top, #2868A3 0%, #3DA8FF 56%, #1C1344 150%)'
      }}
    >
      W
    </div>
    <span className={`text-xl font-bold tracking-wide  text-[#3DA8FF]`}>
      WM<span className={isLightMode ? 'text-gray-600' : 'text-gray-300'}>Sols</span>
    </span>
  </a>
);

// --- DESKTOP NAVBAR ---
const DesktopNavbar: React.FC<{ currentPath: string; isLightMode: boolean }> = ({ currentPath, isLightMode }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // When a new main nav item is hovered, reset the active category to its first child
  const handleMouseEnter = (navItem: NavItem) => {
    setHoveredItem(navItem.item);
    if (navItem.children && navItem.children.length > 0) {
      setActiveCategory(navItem.children[0].item);
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-between w-full h-full">
      <Logo isLightMode={isLightMode} />

      {/* Main Nav Links */}
      <nav className="flex items-center text-base space-x-8 h-full">
        {navigationData.map((navItem) => {
          const isActive = currentPath === navItem.href || currentPath.startsWith(navItem.href + '/');
          const hasChildren = navItem.children && navItem.children.length > 0;
          const isHovered = hoveredItem === navItem.item;

          return (
            <div 
              key={navItem.item}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(navItem)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a 
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
              </a>

              {/* Mega Menu Dropdown */}
              {hasChildren && (
                <div 
                  className={`absolute top-full left-0 w-full bg-white text-gray-900 shadow-2xl border-t-4 border-[#3b82f6] 
                    transition-all duration-300 ease-out transform
                    ${isHovered 
                      ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
                      : 'opacity-0 -translate-y-4 pointer-events-none invisible'
                    }`}
                >
                  <div className="max-w-7xl mx-auto flex w-full min-h-75">
                    
                    {/* Column 1: Title */}
                    <div className="w-1/4 p-8 bg-gray-50 border-r border-gray-200">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Explore</span>
                      <h3 className="text-3xl font-bold text-black">{navItem.item}</h3>
                    </div>

                    {/* Column 2: Level 1 Children (Categories) */}
                    <div className="w-1/3 p-6 border-r border-gray-200">
                      <ul className="space-y-4">
                        {navItem.children?.map((child) => (
                          <li key={child.item}>
                            <a
                              href={child.href} 
                              className={`flex items-center cursor-pointer gap-3 text-sm w-full text-left transition-colors ${
                                activeCategory === child.item ? 'text-[#3b82f6]' : 'text-gray-700 hover:text-[#3b82f6]'
                              }`}
                              onMouseEnter={() => setActiveCategory(child.item)}
                            >
                              <span className="text-gray-400">•</span>
                              {child.item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Level 2 Children (Grandchildren / Sub-services) */}
                    <div className="w-5/12 p-6 bg-white">
                      <ul className="space-y-4">
                        {navItem.children?.find(c => c.item === activeCategory)?.children?.map((grandchild) => (
                          <li key={grandchild.item}>
                            <a 
                              href={grandchild.href} 
                              className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3b82f6] transition-colors"
                            >
                               <span className="text-gray-300">-</span>
                               {grandchild.item}
                            </a>
                          </li>
                        )) || (
                          <li className="text-sm text-gray-500 italic">
                            Select an option to view details.
                          </li>
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

      {/* CTA Button */}
      <a 
        href="/contact" 
        className={`px-6 py-2.5 text-sm font-normal rounded-sm transition-colors ${
          isLightMode 
            ? 'text-black border border-black hover:bg-black/5' 
            : 'text-white border border-gray-500 hover:bg-white/10'
        }`}
      >
        Get Started
      </a>
    </div>
  );
};


// --- MOBILE NAVBAR ---
const MobileNavbar: React.FC<{ currentPath: string; isLightMode: boolean }> = ({ currentPath, isLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleExpand = (item: string, e: React.MouseEvent) => {
    e.preventDefault(); 
    setExpandedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="flex lg:hidden items-center justify-between w-full h-full">
      <Logo isLightMode={isLightMode && !isOpen} />
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isLightMode && !isOpen ? 'text-black' : 'text-white'} p-2 z-50 focus:outline-none transition-colors`}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay (Kept dark for consistency) */}
      <div 
        className={`fixed inset-0 bg-[#070714] z-40 transition-transform duration-300 ease-in-out px-4 pt-24 pb-8 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {navigationData.map((navItem) => {
            const isActive = currentPath === navItem.href;
            const hasChildren = navItem.children && navItem.children.length > 0;
            const isExpanded = expandedItems.includes(navItem.item);

            return (
              <div key={navItem.item} className="border-b border-gray-800 pb-2">
                <div className="flex items-center justify-between">
                  <a 
                    href={navItem.href}
                    className={`text-lg font-normal py-3 ${isActive ? 'text-[#3b82f6]' : 'text-white'}`}
                  >
                    {navItem.item}
                  </a>
                  {hasChildren && (
                    <button onClick={(e) => toggleExpand(navItem.item, e)} className="p-3 text-gray-400">
                      <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="pl-4 pb-3 space-y-4">
                    {navItem.children?.map(child => (
                      <div key={child.item}>
                        <a href={child.href} className="text-md font-normal text-gray-300 block mb-2">{child.item}</a>
                        {child.children && (
                          <div className="pl-4 space-y-2 border-l border-gray-700">
                            {child.children.map(grandchild => (
                              <a 
                                key={grandchild.item} 
                                href={grandchild.href} 
                                className="block text-sm font-normal text-gray-500 hover:text-white"
                              >
                                {grandchild.item}
                              </a>
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
          <a 
            href="/contact" 
            className="block w-full py-3 text-center text-sm font-normal text-white bg-[#2563eb] rounded-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};


// --- MAIN WRAPPER COMPONENT ---
export const Navbar: React.FC = () => {
  // Use Next.js hook instead of window.location to track route changes dynamically
  const pathname = usePathname(); 
  const currentPath = pathname || ''; // Fallback just in case

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // We only need to set up the scroll listener once

  // This will now instantly re-calculate on every client-side route change
  const isLightMode = 
    (currentPath.startsWith('/careers/') && currentPath.length > '/careers/'.length) || 
    (currentPath.startsWith('/blogs-newsroom/') && currentPath.length > '/blogs-newsroom/'.length);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isLightMode 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-[#070714]/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center">
        <DesktopNavbar currentPath={currentPath} isLightMode={isLightMode} />
        <MobileNavbar currentPath={currentPath} isLightMode={isLightMode} />
      </div>
    </header>
  );
};;