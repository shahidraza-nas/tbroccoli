"use client";

import Link from "next/link";

const categories = [
  {
    href: "/shop/categories/women",
    title: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&auto=format&fit=crop",
    bgColor: "bg-pink-100"
  },
  {
    href: "/shop/categories/men",
    title: "Men",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80&auto=format&fit=crop",
    bgColor: "bg-blue-100"
  },
  {
    href: "/shop/categories/accessories",
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=800&q=80&auto=format&fit=crop",
    bgColor: "bg-purple-100"
  }
];

export function CategoryCards() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link 
              key={category.href}
              href={category.href} 
              className={`group relative h-[300px] overflow-hidden ${category.bgColor}`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                <p className="text-sm text-white">View Collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
