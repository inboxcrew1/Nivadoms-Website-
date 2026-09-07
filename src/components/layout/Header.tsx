'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';
import { BRAND } from '@/data/brand';
import { Menu, X } from 'lucide-react';

const QuoteModal = dynamic(() => import('../interactive/QuoteModal').then((mod) => mod.QuoteModal), {
  ssr: false,
});

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'D1', href: '/d1' },
    { label: 'D2', href: '/d2' },
    { label: 'WHY NIVA', href: '/why-niva' },
    { label: 'APPLICATIONS', href: '/applications' },
    { label: 'ABOUT', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal/95 backdrop-blur-xl py-3 sm:py-4 border-b border-champagne/20 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-charcoal/95 via-charcoal/50 to-transparent py-4 sm:py-6 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          <BrandLogo />
          
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`text-xs tracking-[0.22em] font-sans transition-all duration-300 relative py-1 ${
                    isActive ? 'text-champagne font-medium' : 'text-ivory/80 hover:text-champagne'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-champagne" />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setQuoteModalOpen(true)}
              className="shimmer-badge"
            >
              REQUEST A QUOTE
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-ivory hover:text-champagne focus:outline-none transition-colors rounded-sm border border-champagne/20 bg-charcoal/60 backdrop-blur-md"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-2xl transition-all duration-400 flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6 items-start w-full max-w-md mx-auto">
          <span className="text-[10px] font-sans tracking-[0.3em] text-champagne uppercase font-medium">Navigation Index</span>
          <nav className="flex flex-col gap-4 w-full">
            {BRAND.navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg sm:text-xl font-serif tracking-widest border-b border-white/10 pb-2.5 w-full flex items-center justify-between transition-colors ${
                    isActive ? 'text-champagne font-medium' : 'text-ivory hover:text-champagne'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-champagne font-sans">ACTIVE</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-champagne/20 w-full max-w-md mx-auto">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              setMobileMenuOpen(false);
              setQuoteModalOpen(true);
            }}
          >
            REQUEST A QUOTE
          </Button>

          <div className="grid grid-cols-2 gap-2 text-center text-xs font-sans">
            <a
              href={`tel:${BRAND.contact.phone.replace(/\s+/g, '')}`}
              className="border border-white/15 py-2 px-3 text-ivory hover:text-champagne hover:border-champagne transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Call</span>
              <span className="text-[10px] text-champagne">{BRAND.contact.phoneRaw}</span>
            </a>
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-champagne/40 bg-champagne/10 py-2 px-3 text-champagne hover:bg-champagne/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-warm pt-1 font-sans">
            <span>NIVA DOMS</span>
            <span>ELEVATED LIVING</span>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
};
