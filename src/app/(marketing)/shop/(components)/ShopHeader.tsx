export function ShopHeader({ title, breadcrumb }: { title: string; breadcrumb?: string }) {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-12">
            <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-black">{title}</h1>
                {breadcrumb && <p className="mt-2 text-sm text-gray-600">{breadcrumb}</p>}
            </div>
        </section>
    );
}
