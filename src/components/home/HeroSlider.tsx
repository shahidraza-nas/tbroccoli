"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroSlides = [
    {
        id: 1,
        tag: "New Arrivals 2025",
        title: "Autumn & Winter",
        description: "Discover the latest trends in fashion with our exclusive collection",
        buttonText: "Shop Now",
        buttonLink: "/shop",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
        bgColor: "from-rose-50 to-orange-50",
    },
    {
        id: 2,
        tag: "Limited Edition",
        title: "Urban Street Style",
        description: "Express yourself with bold designs and contemporary fashion",
        buttonText: "Explore Collection",
        buttonLink: "/shop?category=urban",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop",
        bgColor: "from-blue-50 to-cyan-50",
    },
    {
        id: 3,
        tag: "Summer Collection",
        title: "Light & Breezy",
        description: "Stay cool and comfortable with our breathable summer essentials",
        buttonText: "View Styles",
        buttonLink: "/shop?category=summer",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80&auto=format&fit=crop",
        bgColor: "from-amber-50 to-yellow-50",
    },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-[500px] overflow-hidden sm:h-[550px] lg:h-[600px]">
            {/* Background gradient changes with slides */}
            <div className={`absolute inset-0 bg-gradient-to-r transition-all duration-1000 ${heroSlides[currentSlide].bgColor}`}></div>

            {/* Slides Container */}
            <div className="relative h-full">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="container relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-full flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                                {/* Left Content */}
                                <div className={`z-10 text-center transition-all duration-700 lg:text-left ${
                                    index === currentSlide 
                                        ? "translate-x-0 opacity-100" 
                                        : "-translate-x-10 opacity-0"
                                }`}>
                                    <div className="mb-3 inline-block rounded-full bg-black px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white sm:px-4 sm:py-1.5 sm:text-xs">
                                        {slide.tag}
                                    </div>
                                    <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:mb-5 sm:text-5xl lg:mb-6 lg:text-7xl">
                                        {slide.title.split(" ").map((word, i) => (
                                            <span key={i}>
                                                {word}
                                                {i === 0 && <br className="hidden sm:block" />}
                                                {i > 0 && " "}
                                            </span>
                                        ))}
                                    </h1>
                                    <p className="mb-6 mx-auto max-w-md text-sm leading-relaxed text-gray-700 sm:text-base lg:mx-0 lg:text-lg">
                                        {slide.description}
                                    </p>
                                    <Link
                                        href={slide.buttonLink}
                                        className="inline-block bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-sm"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                </div>

                                {/* Right Image - Hidden on mobile, visible on lg */}
                                <div className={`relative hidden h-full transition-all duration-700 delay-200 lg:block ${
                                    index === currentSlide 
                                        ? "translate-x-0 opacity-100" 
                                        : "translate-x-10 opacity-0"
                                }`}>
                                    <div className="absolute right-0 top-1/2 h-[400px] w-[350px] -translate-y-1/2 xl:h-[500px] xl:w-[450px]">
                                        <div className="relative h-full w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl xl:rounded-tl-[100px] xl:rounded-br-[100px]">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot Navigation - Centered bottom on mobile, left on desktop */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3 lg:left-8 lg:translate-x-0">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div className={`h-2 w-2 rounded-full border-2 transition-all sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 ${
                            index === currentSlide
                                ? "border-gray-900 bg-gray-900"
                                : "border-gray-400 bg-transparent hover:border-gray-600"
                        }`}></div>
                    </button>
                ))}
            </div>

            {/* Slide Counter - Hidden on mobile, visible on sm */}
            <div className="absolute bottom-6 right-4 z-20 hidden items-center gap-2 text-sm font-medium text-gray-900 sm:flex sm:bottom-8 sm:right-8">
                <span className="text-xl sm:text-2xl">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">{String(heroSlides.length).padStart(2, '0')}</span>
            </div>
        </section>
    );
}
