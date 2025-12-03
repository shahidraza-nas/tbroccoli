"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

interface ProductDetailClientProps {
    product: any;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<"description" | "custom" | "reviews">("description");

    const images = product.images && product.images.length > 0 
        ? product.images 
        : ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"];

    const thumbnails = [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&q=80",
    ];

    return (
        <>
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left Column - Images */}
                <div className="flex gap-4">
                    {/* Thumbnail Column */}
                    <div className="flex flex-col gap-3">
                        {thumbnails.map((thumb, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`h-16 w-16 overflow-hidden border-2 transition-all ${
                                    selectedImage === index 
                                        ? "border-black" 
                                        : "border-transparent hover:border-gray-300"
                                }`}
                            >
                                <img 
                                    src={thumb} 
                                    alt={`Thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="relative flex-1">
                        <div className="sticky top-24">
                            {/* Navigation Arrows */}
                            <button 
                                className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-gray-600 shadow-md hover:text-black"
                                onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : thumbnails.length - 1)}
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-gray-600 shadow-md hover:text-black"
                                onClick={() => setSelectedImage(prev => prev < thumbnails.length - 1 ? prev + 1 : 0)}
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Fullscreen Button */}
                            <button className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-white text-gray-600 shadow-md hover:text-black">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            </button>

                            <div className="aspect-square overflow-hidden bg-gray-50">
                                <img 
                                    src={images[selectedImage] || images[0]} 
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Product Info */}
                <div className="space-y-6">
                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-between text-gray-400">
                        <button className="hover:text-black">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                        </div>
                        <button className="hover:text-black">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <h1 className="text-3xl font-semibold text-black">{product.name}</h1>
                        <div className="mt-3 flex items-center gap-2">
                            <div className="text-2xl font-bold text-[#FF6B6B]">${product.price.toFixed(2)}</div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-4 w-4 fill-orange-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span>(3 reviews)</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600">
                        Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                    </p>

                    {/* Quantity and Add to Cart */}
                    <div className="flex gap-3">
                        <div className="flex items-center border border-gray-300">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 text-gray-600 hover:text-black"
                            >
                                -
                            </button>
                            <input 
                                type="number" 
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 border-x border-gray-300 py-2 text-center text-sm focus:outline-none"
                            />
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 text-gray-600 hover:text-black"
                            >
                                +
                            </button>
                        </div>
                        <button className="flex-1 bg-[#FF6B6B] py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#FF5252]">
                            ADD TO CART
                        </button>
                    </div>

                    {/* Buy It Now Button */}
                    <button className="w-full border-2 border-green-500 bg-green-500 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-green-600">
                        BUY IT NOW
                    </button>

                    {/* Payment Icons */}
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-5" />
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-5" />
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex gap-8 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab("description")}
                                className={`pb-3 text-sm font-medium uppercase tracking-wide ${
                                    activeTab === "description"
                                        ? "border-b-2 border-black text-black"
                                        : "text-gray-600 hover:text-black"
                                }`}
                            >
                                DESCRIPTION
                            </button>
                            <button
                                onClick={() => setActiveTab("custom")}
                                className={`pb-3 text-sm font-medium uppercase tracking-wide ${
                                    activeTab === "custom"
                                        ? "border-b-2 border-black text-black"
                                        : "text-gray-600 hover:text-black"
                                }`}
                            >
                                CUSTOM TAB
                            </button>
                            <button
                                onClick={() => setActiveTab("reviews")}
                                className={`pb-3 text-sm font-medium uppercase tracking-wide ${
                                    activeTab === "reviews"
                                        ? "border-b-2 border-black text-black"
                                        : "text-gray-600 hover:text-black"
                                }`}
                            >
                                REVIEWS
                            </button>
                        </div>

                        <div className="mt-6">
                            {activeTab === "description" && (
                                <div className="space-y-4 text-sm text-gray-700">
                                    <h3 className="font-semibold text-black">Premium Materials</h3>
                                    <p>
                                        Carefully designed materials, use high quality double thickness cloth. Delicate and softer tissue seems
                                        soft materials impart soft cookie and is made freely lovemaking interior: made with wheat flour, natural
                                        liquid strain stew or oil-food based sand from rice and white.
                                    </p>
                                    <h3 className="font-semibold text-black">Innovative Approaches</h3>
                                    <ul className="list-inside list-disc space-y-2 pl-4">
                                        <li><strong>Almond Croissant:</strong> Croissant filled with almond curd, generously topped with almond rods.</li>
                                        <li><strong>Almond Chocolate Croissant:</strong> Croissant filled with chocolate, sweet and delicious.</li>
                                        <li><strong>Cheese Croissant:</strong> Croissant topped with Emmental cheese.</li>
                                        <li><strong>Ham and Cheese Croissants:</strong> Croissant filled with fine ham and served with Emmental Cheese.</li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === "custom" && (
                                <div className="text-sm text-gray-700">
                                    <p>Custom tab content goes here.</p>
                                </div>
                            )}
                            {activeTab === "reviews" && (
                                <div className="text-sm text-gray-700">
                                    <p>Customer reviews will be displayed here.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-3 border-t border-gray-200 pt-6 text-sm">
                        <div className="flex">
                            <span className="w-32 font-medium text-black">SKU:</span>
                            <span className="text-gray-600">{product.sku}</span>
                        </div>
                        <div className="flex">
                            <span className="w-32 font-medium text-black">Vendor:</span>
                            <span className="text-gray-600">Moment</span>
                        </div>
                        <div className="flex">
                            <span className="w-32 font-medium text-black">Availability:</span>
                            <span className="text-gray-600">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </div>
                        <div className="flex">
                            <span className="w-32 font-medium text-black">Product Type:</span>
                            <span className="text-gray-600">Clothing, Fashion, New Arrival, On Sale</span>
                        </div>
                        <div className="flex">
                            <span className="w-32 font-medium text-black">Tags:</span>
                            <span className="text-gray-600">Color Green, Coat Orange, Color White, Unisex, Polo Style, S180, Sweater Maxi, Woman, Spiring, Nature</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section with Images */}
            <section className="mt-16 border-t border-gray-200 pt-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" 
                            alt="Premium Materials"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" 
                            alt="Innovative Approaches"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
