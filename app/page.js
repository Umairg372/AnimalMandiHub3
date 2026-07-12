import HeroSection from "../components/HeroSection";
import CategoryCards from "../components/CategoryCards";
import FeaturedListings from "../components/FeaturedListings";
import HowItWorks from "../components/HowItWorks";
import ServicesPreview from "../components/ServicesPreview";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <FeaturedListings />
      <HowItWorks />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
