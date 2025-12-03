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
        <section className="relative h-[600px] overflow-hidden">
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
                            <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
                                {/* Left Content */}
                                <div className={`transition-all duration-700 ${
                                    index === currentSlide 
                                        ? "translate-x-0 opacity-100" 
                                        : "-translate-x-10 opacity-0"
                                }`}>
                                    <div className="inline-block mb-4 rounded-full bg-black px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white">
                                        {slide.tag}
                                    </div>
                                    <h1 className="mb-6 text-7xl font-bold leading-tight text-gray-900">
                                        {slide.title.split(" ").map((word, i) => (
                                            <span key={i}>
                                                {word}
                                                {i === 0 && <br />}
                                                {i > 0 && " "}
                                            </span>
                                        ))}
                                    </h1>
                                    <p className="mb-8 max-w-md text-lg leading-relaxed text-gray-700">
                                        {slide.description}
                                    </p>
                                    <Link
                                        href={slide.buttonLink}
                                        className="inline-block bg-black px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                </div>

                                {/* Right Image */}
                                <div className={`relative h-full transition-all duration-700 delay-200 ${
                                    index === currentSlide 
                                        ? "translate-x-0 opacity-100" 
                                        : "translate-x-10 opacity-0"
                                }`}>
                                    <div className="absolute right-0 top-1/2 h-[500px] w-[450px] -translate-y-1/2">
                                        <div className="relative h-full w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl">
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

            {/* Dot Navigation - Bottom Left */}
            <div className="absolute bottom-12 left-8 z-20 flex gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div className={`h-3 w-3 rounded-full border-2 transition-all ${
                            index === currentSlide
                                ? "border-gray-900 bg-gray-900"
                                : "border-gray-400 bg-transparent hover:border-gray-600"
                        }`}></div>
                    </button>
                ))}
            </div>

            {/* Slide Counter - Bottom Right */}
            <div className="absolute bottom-12 right-8 z-20 flex items-center gap-2 text-sm font-medium text-gray-900">
                <span className="text-2xl">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">{String(heroSlides.length).padStart(2, '0')}</span>
            </div>
        </section>
    );
}
