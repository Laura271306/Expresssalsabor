import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionWrapper from './SectionWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const recipeImages = [
  "/images/recipes/airfryer-13.jpg",
  "/images/recipes/airfryer-14.jpg",
  "/images/recipes/airfry2 (7)_11zon.jpg",
  "/images/recipes/airfryer-12.jpg",
  "/images/recipes/airfryer-7.jpg",
  "/images/recipes/airfryer-8.jpg",
  "/images/recipes/aifryer-5.jpg",
  "/images/recipes/airfryer-11.jpg",
  "/images/recipes/airfryer-10.jpg",
  "/images/recipes/aifryer-6.jpg",
  "/images/recipes/airfryer-1.jpg",
  "/images/recipes/airfryer-4.jpg",
  "/images/recipes/aifryer-3.jpg",
  "/images/recipes/airfryer-2.jpg",
];

const RecipeCarouselSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-bg mb-4 px-4">
          ¡Esto es lo que vas a lograr!
        </h2>
        <p className="font-sans text-lg md:text-xl text-gray-700 mb-4 px-4">
          Resultados crujientes, sabrosos y saludables en minutos, <span className="font-bold text-cta-primary">sin fallar nunca más.</span>
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 text-highlight-gold font-bold animate-pulse">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-sans text-sm uppercase tracking-widest">Desliza para ver más</span>
          <ChevronRight className="w-5 h-5" />
        </div>

        <div className="px-10 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {recipeImages.map((src, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="aspect-square overflow-hidden rounded-xl shadow-2xl border-4 border-highlight-gold/50 bg-gray-100">
                      <img 
                        src={src} 
                        alt={`Receta Air Fryer ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        // Performance: Eager load only the first image of the carousel as it's likely visible
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "low"}
                        width="400"
                        height="400"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RecipeCarouselSection;