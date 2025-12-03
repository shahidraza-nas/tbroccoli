import Link from "next/link";

export function MegaMenuProduct() {
  const productLinks = [
    {
      title: "Product Types",
      links: [
        { name: "Simple Product", href: "/shop/products/1" },
        { name: "Variable Product", href: "/shop/products/2" },
        { name: "Grouped Product", href: "/shop/products/3" },
        { name: "External Product", href: "/shop/products/4" },
      ],
    },
    {
      title: "Product Features",
      links: [
        { name: "Product Gallery", href: "/shop/products/1" },
        { name: "Product Video", href: "/shop/products/2" },
        { name: "Product 360° View", href: "/shop/products/3" },
        { name: "Product Size Guide", href: "/shop/products/4" },
      ],
    },
    {
      title: "Product Layouts",
      links: [
        { name: "Default Layout", href: "/shop/products/1" },
        { name: "Sidebar Layout", href: "/shop/products/2" },
        { name: "Full Width", href: "/shop/products/3" },
        { name: "Sticky Info", href: "/shop/products/4" },
      ],
    },
  ];

  return (
    <div className="invisible absolute left-1/2 top-full w-screen max-w-7xl -translate-x-1/2 border-t border-gray-100 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {productLinks.map((section) => (
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
      </div>
    </div>
  );
}
