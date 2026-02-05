import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomeHeroSection from './sections/HomeHeroSection';
import ProductsSection from './sections/ProductsSection';
import OurStorySection from './sections/OurStorySection';
import ReviewsSection from './sections/ReviewsSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import SubmissionsView from './views/SubmissionsView';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'submissions'>('home');

  useEffect(() => {
    if (currentView === 'home') {
      document.title = 'Achar Ghar - Homemade Pickles from Kolkata';
    } else {
      document.title = 'Submissions - Achar Ghar';
    }
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <HomeHeroSection />
            <ProductsSection />
            <OurStorySection />
            <ReviewsSection />
            <FaqSection />
            <ContactSection />
          </>
        ) : (
          <SubmissionsView />
        )}
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

export default App;
