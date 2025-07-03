import { ShieldCheck, Ship, Waves, Zap } from "lucide-react";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/speedboats", label: "Speedboats" },
];

export const features = [
  {
    icon: Ship,
    title: "Premium Fleet",
    description: "Choose from our collection of 30+ high-quality speedboats",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book your perfect speedboat in minutes with our easy system",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "All boats are regularly inspected and equipped with safety gear",
  },
  {
    icon: Waves,
    title: "Best Locations",
    description: "Explore the most beautiful waters and destinations",
  },
];
