"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import Hamburger from 'hamburger-react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // Add offset for fixed header
      const headerHeight = 69; // Approximate header height in pixels
      const elementPosition = element.offsetTop - headerHeight;
      
      // Ensure we don't scroll to negative positions
      const scrollPosition = Math.max(0, elementPosition);
      
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50 cursor-pointer"
          >
            <div className="left-3">
              <Hamburger toggled={isMenuOpen} size={18}/>
            </div>
          </Button>

          {/* Mobile Theme Toggle */}
          <ThemeToggle />
        </div>
        {/* Logo with Icon */}
        <div className="hidden md:flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("#home")}>
          <Image 
            src="/favicon.ico" 
            alt="Logo" 
            width={24} 
            height={24}
            className="w-6 h-6"
          />
          <span className="text-xl font-bold text-foreground">
            Alson Lee
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>


      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-4 text-muted-foreground text-md hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 