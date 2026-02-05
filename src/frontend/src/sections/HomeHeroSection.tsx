import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import BrandBadge from '@/components/BrandBadge';
import { ArrowRight } from 'lucide-react';

export default function HomeHeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" className="pt-8 md:pt-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <BrandBadge variant="secondary">Made in Kolkata 🌶️</BrandBadge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Taste of Home, <span className="text-primary">Wherever You Are</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Authentic homemade pickles crafted with love in Kolkata. For youths missing the taste of
            home—we've got you covered with that real achar vibe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToProducts} className="group">
              Explore Flavors
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/generated/hero-banner.dim_1600x900.png"
            alt="Delicious homemade pickles from Kolkata"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </div>
    </Section>
  );
}
