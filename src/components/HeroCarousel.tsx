'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './Button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlay(autoPlay), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(autoPlay), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(autoPlay), 10000);
  };

  if (slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            {s.image.startsWith('http') ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${s.image})`,
                }}
              />
            ) : (
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={85}
                sizes="100vw"
              />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="text-left text-white px-4 sm:px-6 lg:px-16 max-w-2xl z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                  {s.title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-100 mb-8 animate-fade-in-delayed">
                  {s.subtitle}
                </p>
                {s.cta && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <a href={s.cta.href}>
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-full sm:w-auto"
                      >
                        {s.cta.text}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-red-600/80 text-white p-3 rounded-full transition-all duration-300 hover:bg-red-700/90"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-red-600/80  text-white p-3 rounded-full transition-all duration-300 hover:bg-red-700/90"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-yellow-400 w-3 h-3'
                : 'bg-white/50 hover:bg-white/75 w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Auto-play Indicator */}
      {isAutoPlay && (
        <div className="absolute bottom-8 left-8 z-20 text-white text-sm bg-black/40 px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Auto-playing
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
