import Section from '@/components/Section';
import { Heart, Home, Users } from 'lucide-react';

export default function OurStorySection() {
  return (
    <Section id="story">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            Started in the heart of Kolkata, Achar Ghar was born from a simple truth: when you're far from home, it's
            the little things that matter most. That first bite of achar with your meal, the familiar tang that takes
            you back to your mom's kitchen—that's what we're all about.
          </p>
          <p>
            We're a small team making pickles the old-school way—no machines, no mass production, just hands, hearts,
            and recipes that have been perfected over years. Every jar is made in small batches to ensure that
            authentic taste you've been craving.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Kolkata Roots</h3>
              <p className="text-sm">Made with love in the City of Joy</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Homemade Quality</h3>
              <p className="text-sm">Traditional recipes, no preservatives</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">For Our Community</h3>
              <p className="text-sm">Bringing home flavors to youths everywhere</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
