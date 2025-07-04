import { Contact } from "./Contact";
import { CTA } from "../../components/CTA";
import { FeaturedBoats } from "./FeaturedBoats";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";

export const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <FeaturedBoats />
      <Testimonials />
      <Contact />
      <CTA />
    </div>
  );
};
