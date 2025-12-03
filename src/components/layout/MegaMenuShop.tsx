import Link from "next/link";

export function MegaMenuShop() {
  const shopCategories = [
    {
      title: "Women",
      links: [
        { name: "Dresses", href: "/shop?category=womens-dresses" },
        { name: "Tops & Blouses", href: "/shop?category=womens-tops" },
        { name: "Sweaters & Knits", href: "/shop?category=womens-sweaters" },
        { name: "Jackets & Coats", href: "/shop?category=womens-jackets" },
        { name: "Pants & Jeans", href: "/shop?category=womens-pants" },
      ],
    },
    {
      title: "Men",
      links: [
        { name: "T-Shirts & Polos", href: "/shop?category=mens-tshirts" },
        { name: "Shirts", href: "/shop?category=mens-shirts" },
        { name: "Sweaters", href: "/shop?category=mens-sweaters" },
        { name: "Jackets", href: "/shop?category=mens-jackets" },
        { name: "Jeans & Pants", href: "/shop?category=mens-pants" },
      ],
    },
    {
      title: "Accessories",
      links: [
        { name: "Bags", href: "/shop?category=bags" },
        { name: "Shoes", href: "/shop?category=shoes" },
        { name: "Jewelry", href: "/shop?category=jewelry" },
        { name: "Watches", href: "/shop?category=watches" },
        { name: "Sunglasses", href: "/shop?category=sunglasses" },
      ],
    },
    {
      title: "Collections",
      links: [
        { name: "New Arrivals", href: "/shop?collection=new" },
        { name: "Best Sellers", href: "/shop?sort=bestseller" },
        { name: "Sale Items", href: "/shop?sale=true" },
        { name: "Trending Now", href: "/shop?trending=true" },
      ],
    },
  ];

  return (
    <div className="invisible absolute left-1/2 top-full w-screen max-w-7xl -translate-x-1/2 border-t border-gray-100 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {shopCategories.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-[#FF6B6B]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Featured Banner */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-rose-50 to-orange-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="mb-1 text-lg font-bold text-gray-900">Flash Sale</h4>
              <p className="text-sm text-gray-600">Up to 70% off on selected items</p>
            </div>
            <Link
              href="/shop?sale=flash"
              className="rounded-lg bg-[#FF6B6B] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#FF5252]"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
