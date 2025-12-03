import { ShopProductCard } from "@/components/products/ShopProductCard";

interface ProductGridProps {
    products: any[];
    gridCols?: number;
}

export function ProductGrid({ products, gridCols = 3 }: ProductGridProps) {
    // Sample products for now - will be replaced with actual products
    const sampleProducts = [
        {
            id: "1",
            name: "Chenille Sweater",
            price: 29.00,
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
            badge: "HOT" as const,
            colors: ["#87CEEB", "#FFD700"],
        },
        {
            id: "2",
            name: "Classic Wool Sweater",
            price: 36.00,
            image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
        },
        {
            id: "3",
            name: "Coach Holder",
            price: 49.00,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
            colors: ["#FFD700", "#FF8C00"],
        },
        {
            id: "4",
            name: "Colorful Jacket",
            price: 89.00,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
            colors: ["#FFD700", "#000000", "#A0522D"],
        },
        {
            id: "5",
            name: "Elessi Knit",
            price: 96.00,
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
            colors: ["#4682B4", "#708090", "#000000"],
        },
        {
            id: "6",
            name: "Elessi Young T-Shirt",
            price: 32.00,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
            colors: ["#FFB6C1", "#FFC0CB"],
        },
        {
            id: "7",
            name: "Floral Embroidery Jacket",
            price: 99.00,
            image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80",
            colors: ["#FFB6C1"],
        },
        {
            id: "8",
            name: "Flowers Mini Dress",
            price: 33.00,
            image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80",
        },
        {
            id: "9",
            name: "Gathered Sleeve",
            price: 17.00,
            originalPrice: 20.00,
            image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&q=80",
            badge: "SALE" as const,
        },
        {
            id: "10",
            name: "Gray T-Shirt",
            price: 14.00,
            originalPrice: 16.00,
            image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80",
            badge: "SALE" as const,
            colors: ["#808080", "#000000"],
        },
        {
            id: "11",
            name: "Green Sweatshirt",
            price: 37.00,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
        },
        {
            id: "12",
            name: "Hooded Anorak",
            price: 32.00,
            image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",
        },
    ];

    const gridClass = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        6: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
    }[gridCols] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={`grid gap-8 ${gridClass}`}>
            {sampleProducts.map((product) => (
                <ShopProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
