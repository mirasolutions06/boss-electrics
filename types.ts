import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}