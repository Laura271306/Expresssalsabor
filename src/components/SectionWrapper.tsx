"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};