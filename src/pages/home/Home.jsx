import { Features } from "./Features";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
    </div>
  );
};
