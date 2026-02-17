import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    text: "Called them out for an emergency at 10pm—engineer arrived within 45 minutes and had our power back on safely. Couldn't ask for better service!",
    author: "Sarah M",
    location: "Islington",
    rating: 5
  },
  {
    id: '2',
    text: "Needed an EICR for my rental property urgently. They came next day, thorough inspection, and sent the certificate within hours. Brilliant!",
    author: "James T",
    location: "Hackney",
    rating: 5
  },
  {
    id: '3',
    text: "Professional team installed our EV charger. Clean work, explained everything clearly, and finished ahead of schedule. Highly recommend!",
    author: "Priya K",
    location: "Canary Wharf",
    rating: 5
  },
  {
    id: '4',
    text: "Full rewire of our Victorian terrace. The team was tidy, respectful, and the quality of work is outstanding. Fair pricing too.",
    author: "Michael R",
    location: "Stratford",
    rating: 5
  },
  {
    id: '5',
    text: "Had a tricky fault that two other electricians couldn't find. Boss Electrics diagnosed it in 20 minutes. True professionals!",
    author: "Emma L",
    location: "Greenwich",
    rating: 5
  },
  {
    id: '6',
    text: "Consumer unit upgrade done perfectly. Engineer was friendly, knowledgeable, and left everything spotless. Will definitely use again.",
    author: "David W",
    location: "Bethnal Green",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-900 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-800 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">What Our Customers Say</h2>
          <p className="text-xl text-slate-300 mb-4">Real feedback from homeowners and businesses across the UK.</p>
          <p className="text-sm text-slate-400 italic">* Reviews shown are placeholders for demonstration purposes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/10 fill-white/10" />
              </div>

              <p className="text-slate-200 text-lg leading-relaxed mb-8 flex-grow">"{item.text}"</p>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="font-bold text-white text-lg">{item.author}</p>
                <p className="text-sm text-brand-400 font-medium">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};