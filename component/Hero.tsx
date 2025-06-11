"use client";
import { useState, useEffect, useCallback } from 'react';
import { HeroSlide, HeroProps } from '@/types';


export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, isAutoPlaying, slides.length]);

  return (
    <section className="relative h-96 md:h-[32rem] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${slide.bgColor} ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">{slide.title}</h1>
              <p className="text-xl mb-8 text-white">{slide.description}</p>
              <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}