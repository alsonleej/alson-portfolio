import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  index: number;
  className?: string;
  title?: string;
  id?: string;
}

export function Section({ children, index, title, className = "", id }: SectionProps) {
  const isOdd = index % 2 === 1;
  const baseClasses = "py-20 px-5 sm:px-10 md:px-16";
  const backgroundClasses = isOdd ? "bg-white/5 backdrop-blur-sm" : "";
  
  return (
    <section id={id} className={`${baseClasses} ${backgroundClasses} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        {children}
      </div>
    </section>
  );
} 