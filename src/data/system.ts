import { BsShieldCheck } from "react-icons/bs";
import { FaShip, FaWaveSquare } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import type { ElementType } from "react";

// navLinks

export type NavLinksType = {
  path: string;
  label: string;
};

export const navLinks: NavLinksType[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/speedboats", label: "Speedboats" },
  { path: "/profile", label: "Profile" },
];

// Stats

export type StatsType = {
  number: string;
  label: string;
};

export const stats: StatsType[] = [
  { number: "5+", label: "Years Experience" },
  { number: "30+", label: "Premium Speedboats" },
  { number: "1000+", label: "Happy Customers" },
  { number: "24/7", label: "Customer Support" },
];

// timeSlots

export const timeSlots: string[] = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

// locations

export type LocationsType = {
  value: string;
  label: string;
};

export const locations: LocationsType[] = [
  { value: "miami-beach", label: "Miami Beach Marina" },
  { value: "key-biscayne", label: "Key Biscayne Harbor" },
  { value: "coconut-grove", label: "Coconut Grove Marina" },
  { value: "fort-lauderdale", label: "Fort Lauderdale Port" },
];

// durations

export type DurationsType = {
  value: string;
  label: string;
  multiplier: string;
};

export const durations = [
  { value: "2", label: "2 Hours", multiplier: 0.3 },
  { value: "4", label: "4 Hours", multiplier: 0.5 },
  { value: "6", label: "6 Hours", multiplier: 0.7 },
  { value: "8", label: "Full Day (8 Hours)", multiplier: 1 },
];

// features

export type FeaturesType = {
  icon: ElementType;
  title: string;
  description: string;
};

export const features: FeaturesType[] = [
  {
    icon: FaShip,
    title: "Premium Fleet",
    description: "Choose from our collection of 30+ high-quality speedboats",
  },
  {
    icon: FiZap,
    title: "Instant Booking",
    description: "Book your perfect speedboat in minutes with our easy system",
  },
  {
    icon: BsShieldCheck,
    title: "Safety First",
    description:
      "All boats are regularly inspected and equipped with safety gear",
  },
  {
    icon: FaWaveSquare,
    title: "Best Locations",
    description: "Explore the most beautiful waters and destinations",
  },
];

// testimonials

export type TestimonialsType = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
};

export const testimonials = [
  {
    id: "5135oifh",
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely amazing experience! The Ocean Thunder was perfectly maintained and the staff was incredibly helpful.",
    location: "Miami, FL",
  },
  {
    id: "7831mvhd",
    name: "Mike Rodriguez",
    rating: 5,
    comment:
      "Best speedboat rental service I've ever used. The Wave Master exceeded all expectations!",
    location: "San Diego, CA",
  },
  {
    id: "4931mnfu",
    name: "Emily Chen",
    rating: 5,
    comment:
      "Perfect for our family vacation. The Sea Breeze was safe, clean, and so much fun!",
    location: "Key West, FL",
  },
];
