import Link from "next/link";

interface ShopProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: "HOT" | "SALE" | "LIMITED" | "NEW" | "-19%" | "-11%" | string;
    colors?: string[];
}

export function ShopProductCard({ id, name, price, originalPrice, image, badge, colors }: ShopProductCardProps) {
    return (
        <div className="group relative">
            <Link href={`/shop/products/${id}`} className="block">
                {/* Product Image */}
                <div className="relative mb-4 aspect-square overflow-hidden bg-gray-50">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Badge */}
                    {badge && (
                        <span
                            className={`absolute left-3 top-3 px-2 py-1 text-[10px] font-semibold uppercase text-white ${
                                badge === "HOT"
                                    ? "bg-[#FF6B6B]"
                                    : badge === "SALE" || badge === "-19%" || badge === "-11%"
                                    ? "bg-[#7FBA00]"
                                    : "bg-gray-900"
                            }`}
                        >
                            {badge}
                        </span>
                    )}
                    {/* Quick Actions on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 flex translate-y-full gap-2 bg-white p-4 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="flex-1 bg-black py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#FF6B6B]">
                            Add To Cart
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h3 className="mb-2 text-sm text-gray-900 transition-colors hover:text-[#FF6B6B]">{name}</h3>
                    <div className="flex items-center gap-2">
                        {originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-base font-semibold text-gray-900">${price.toFixed(2)}</span>
                    </div>
                    {/* Color Swatches */}
                    {colors && colors.length > 0 && (
                        <div className="mt-2.5 flex items-center gap-1.5">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    className="h-3.5 w-3.5 rounded-full border border-gray-300 transition-transform hover:scale-125"
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
