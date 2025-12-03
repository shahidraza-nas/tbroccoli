import Link from "next/link";

export function MegaMenuElements() {
  const elementSections = [
    {
      title: "Basic Elements",
      links: [
        { name: "Buttons", href: "#" },
        { name: "Icons", href: "#" },
        { name: "Typography", href: "#" },
        { name: "Colors", href: "#" },
      ],
    },
    {
      title: "Components",
      links: [
        { name: "Banners", href: "#" },
        { name: "Cards", href: "#" },
        { name: "Carousels", href: "#" },
        { name: "Tabs", href: "#" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Product Grid", href: "#" },
        { name: "Category Grid", href: "#" },
        { name: "Brand Logos", href: "#" },
        { name: "Testimonials", href: "#" },
      ],
    },
  ];

  return (
    <div className="invisible absolute left-1/2 top-full w-screen max-w-7xl -translate-x-1/2 border-t border-gray-100 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {elementSections.map((section) => (
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
