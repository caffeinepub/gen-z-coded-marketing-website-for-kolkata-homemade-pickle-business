import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface SiteHeaderProps {
  currentView: 'home' | 'submissions';
  onNavigate: (view: 'home' | 'submissions') => void;
}

export default function SiteHeader({ currentView, onNavigate }: SiteHeaderProps) {
  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'Our Story', id: 'story' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
        >
          <img
            src="/assets/generated/logo.dim_512x512.png"
            alt="Achar Ghar Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-xl text-primary">Achar Ghar</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('submissions')}
            className="text-muted-foreground"
          >
            Internal
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-base font-medium text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-2"
                  >
                    {item.label}
                  </button>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <button
                  onClick={() => onNavigate('submissions')}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-2"
                >
                  Internal
                </button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
