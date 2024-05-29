import Approach from '@/components/Approach';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import Testimonials from '@/components/Testimonials';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center overflow-hidden flex-col mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Certificates />
        <RecentProjects />
        <Testimonials />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
