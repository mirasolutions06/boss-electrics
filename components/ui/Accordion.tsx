import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:text-brand-600 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-slate-900 text-lg">{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: { id: string; title: string; content: string }[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full divide-y divide-slate-200 rounded-md border border-slate-200 bg-white px-6">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};