"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Venture Studio Model", href: "/venture-studio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow duration-300 border-b py-4 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm shadow-sm border-border-accent"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Mark: Symmetrical rounded square badge matching the image */}
          <div className="relative w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_12px_rgba(249,58,62,0.15)]">
            <span className="font-sans font-bold text-lg text-[#F6F4EE] leading-none select-none lowercase tracking-tighter">
              able
            </span>
          </div>
          <span className="font-sans font-semibold text-lg tracking-tight text-foreground">
            Able Ventures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200 py-1"
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="text-sm font-medium tracking-wider uppercase bg-foreground text-background px-5 py-2.5 rounded-sm hover:bg-primary hover:text-[#F6F4EE] transition-all-custom shadow-sm hover:shadow-[0_4px_12px_rgba(249,58,62,0.2)]"
          >
            Engage
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground hover:text-primary transition-colors focus:outline-none p-1"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[69px] bottom-0 bg-background border-t border-border-accent z-40 flex flex-col justify-between p-8 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-medium tracking-wide hover:text-primary transition-colors duration-200 flex items-center justify-between ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && <div className="w-2 h-2 bg-primary rounded-full" />}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="w-full text-center text-sm font-semibold tracking-wider uppercase bg-foreground text-background py-3.5 rounded-sm hover:bg-primary hover:text-[#F6F4EE] transition-all-custom"
            >
              Engage
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
