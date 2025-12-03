import Link from "next/link";

export function StyleInspiration() {
  const inspirationCards = [
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      alt: "Street Style",
      tag: "Street Style",
      title: "Urban Comfort",
    },
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      alt: "Minimalist Fashion",
      tag: "Minimalist",
      title: "Less is More",
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
      alt: "Classic Elegance",
      tag: "Classic",
      title: "Timeless Pieces",
    },
  ];

  return (
    <section className="bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Style Inspiration</h2>
          <p className="text-base text-gray-400 sm:text-lg">Discover how to wear this season's must-haves</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {inspirationCards.map((card, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px]">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">{card.tag}</span>
                  <h3 className="mb-2 text-2xl font-bold">{card.title}</h3>
                  <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#FF6B6B]">
                    Shop the Look
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
