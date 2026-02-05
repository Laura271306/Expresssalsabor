"use client";
import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

const CTASection = () => (
  <SectionWrapper className="bg-blue-600 text-white text-center">
    <h2 className="text-3xl font-bold">CTA Section Placeholder</h2>
    <Button size="lg" className="mt-4 bg-white text-blue-600 hover:bg-gray-100">Ação Principal</Button>
  </SectionWrapper>
);
export default CTASection;