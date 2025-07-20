import type { FC } from "react";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { FeaturedBoats } from "../../components/FeaturedBoats";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { CTA } from "../../components/CTA";

export const Home: FC = () => {
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
