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

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely amazing experience! The Ocean Thunder was perfectly maintained and the staff was incredibly helpful.",
    location: "Miami, FL",
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    rating: 5,
    comment:
      "Best speedboat rental service I've ever used. The Wave Master exceeded all expectations!",
    location: "San Diego, CA",
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 5,
    comment:
      "Perfect for our family vacation. The Sea Breeze was safe, clean, and so much fun!",
    location: "Key West, FL",
  },
];
