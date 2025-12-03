"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        title: "Women's Collection",
        subtitle: "Discover the latest trends",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&auto=format&fit=crop",
        link: "/shop?category=women",
    },
    {
        id: 2,
        title: "Men's Fashion",
        subtitle: "Style that defines you",
        image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1600&q=80&auto=format&fit=crop",
        link: "/shop?category=men",
    },
    {
        id: 3,
        title: "Winter Collection",
        subtitle: "Stay warm in style",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1600&q=80&auto=format&fit=crop",
        link: "/shop?category=winter",
    },
    {
        id: 4,
        title: "Accessories",
        subtitle: "Complete your look",
        image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=1600&q=80&auto=format&fit=crop",
        link: "/shop?category=accessories",
    },
];

export function ShopHeader({ title, breadcrumb }: { title: string; breadcrumb?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="relative h-[300px] overflow-hidden bg-gray-100 sm:h-[350px] lg:h-[400px]">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentSlide
                                ? "translate-x-0 opacity-100"
                                : index < currentSlide
                                ? "-translate-x-full opacity-0"
                                : "translate-x-full opacity-0"
                        }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
                        </div>

                        {/* Content */}
                        <div className="container relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl text-center sm:text-left">
                                <h2 className="mb-2 text-3xl font-bold text-white sm:mb-3 sm:text-4xl lg:text-5xl">{slide.title}</h2>
                                <p className="mb-4 text-sm text-white/90 sm:mb-6 sm:text-base lg:text-lg">{slide.subtitle}</p>
                                <Link
                                    href={slide.link}
                                    className="inline-block bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors hover:bg-gray-100 sm:px-8 sm:py-3 sm:text-sm"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Smaller on mobile */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-900 transition-all hover:bg-white sm:left-4 sm:p-2"
                aria-label="Previous slide"
            >
                <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-900 transition-all hover:bg-white sm:right-4 sm:p-2"
                aria-label="Next slide"
            >
                <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot Indicators - Smaller on mobile */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-6 sm:gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all sm:h-2.5 ${
                            index === currentSlide
                                ? "w-6 bg-white sm:w-8"
                                : "w-2 bg-white/50 hover:bg-white/75 sm:w-2.5"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
