import Link from "next/link";

interface ShopProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: "HOT" | "SALE" | "LIMITED" | "-19%";
    colors?: string[];
}

export function ShopProductCard({ id, name, price, originalPrice, image, badge, colors }: ShopProductCardProps) {
    return (
        <div className="group relative">
            <Link href={`/shop/products/${id}`} className="block">
                {/* Product Image */}
                <div className="relative mb-3 aspect-square overflow-hidden bg-gray-100">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Badge */}
                    {badge && (
                        <span
                            className={`absolute left-2 top-2 px-2 py-1 text-xs font-semibold uppercase text-white ${
                                badge === "HOT"
                                    ? "bg-[#FF6B6B]"
                                    : badge === "SALE" || badge === "-19%"
                                    ? "bg-[#7FBA00]"
                                    : "bg-[#FFA500]"
                            }`}
                        >
                            {badge}
                        </span>
                    )}
                    {/* Quick Actions on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-white p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="w-full bg-[#FF6B6B] py-2 text-sm font-medium uppercase tracking-wide text-white hover:bg-[#FF5252]">
                            Add To Cart
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                    <h3 className="mb-1 text-sm font-medium text-gray-900 hover:text-[#FF6B6B]">{name}</h3>
                    <div className="flex items-center justify-center gap-2">
                        {originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-base font-semibold text-gray-900">${price.toFixed(2)}</span>
                    </div>
                    {/* Color Swatches */}
                    {colors && colors.length > 0 && (
                        <div className="mt-2 flex items-center justify-center gap-1.5">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    className="h-4 w-4 rounded-full border border-gray-300 hover:scale-110"
                                    style={{ backgroundColor: color }}
                                    title={color}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}
