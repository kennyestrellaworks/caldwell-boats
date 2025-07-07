import { ShieldCheck, Ship, Waves, Zap } from "lucide-react";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/speedboats", label: "Speedboats" },
  { path: "/profile", label: "Profile" },
];

export const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "30+", label: "Premium Speedboats" },
  { number: "1000+", label: "Happy Customers" },
  { number: "24/7", label: "Customer Support" },
];

export const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

export const locations = [
  { value: "miami-beach", label: "Miami Beach Marina" },
  { value: "key-biscayne", label: "Key Biscayne Harbor" },
  { value: "coconut-grove", label: "Coconut Grove Marina" },
  { value: "fort-lauderdale", label: "Fort Lauderdale Port" },
];

export const durations = [
  { value: "2", label: "2 Hours", multiplier: 0.3 },
  { value: "4", label: "4 Hours", multiplier: 0.5 },
  { value: "6", label: "6 Hours", multiplier: 0.7 },
  { value: "8", label: "Full Day (8 Hours)", multiplier: 1 },
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
