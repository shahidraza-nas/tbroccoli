import Link from "next/link";

export default function DashboardPage() {
    // Mock stats data
    const stats = [
        {
            label: "Total Revenue",
            value: "$45,231.89",
            change: "+20.1% from last month",
            trend: "up" as const,
        },
        {
            label: "Total Orders",
            value: "2,350",
            change: "+180 from last month",
            trend: "up" as const,
        },
        {
            label: "Total Products",
            value: "573",
            change: "+12 new this month",
            trend: "up" as const,
        },
        {
            label: "Active Users",
            value: "1,429",
            change: "+12% from last month",
            trend: "up" as const,
        },
    ];

    const recentOrders = [
        {
            id: "ORD-001",
            customer: "John Doe",
            amount: "$250.00",
            status: "completed",
            date: "2024-12-01",
        },
        {
            id: "ORD-002",
            customer: "Jane Smith",
            amount: "$180.50",
            status: "processing",
            date: "2024-12-01",
        },
        {
            id: "ORD-003",
            customer: "Bob Johnson",
            amount: "$420.00",
            status: "completed",
            date: "2024-11-30",
        },
        {
            id: "ORD-004",
            customer: "Alice Williams",
            amount: "$95.00",
            status: "pending",
            date: "2024-11-30",
        },
    ];

    const quickActions = [
        {
            title: "Add Product",
            description: "Create a new product listing",
            href: "/products/new",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            ),
        },
        {
            title: "Add Category",
            description: "Create a new category",
            href: "/categories/new",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
            ),
        },
        {
            title: "View Orders",
            description: "Manage customer orders",
            href: "/orders",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
        },
        {
            title: "View Customers",
            description: "Manage customer accounts",
            href: "/customers",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        Welcome back! Here's what's happening with your store today.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                                {stat.trend === "up" && (
                                    <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                )}
                            </div>
                            <div className="mt-4">
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{stat.change}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Recent Orders</h2>
                                <Link href="/orders" className="text-sm font-medium text-black hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300">
                                    View all →
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                                        <div>
                                            <p className="font-semibold">{order.id}</p>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{order.customer}</p>
                                            <p className="mt-1 text-xs text-zinc-500">{order.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">{order.amount}</p>
                                            <span
                                                className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-medium ${
                                                    order.status === "completed"
                                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                                                        : order.status === "processing"
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                                                        : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                                                }`}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                            <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>
                            <div className="space-y-3">
                                {quickActions.map((action) => (
                                    <Link
                                        key={action.title}
                                        href={action.href}
                                        className="flex items-start gap-4 rounded-lg border border-zinc-200 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                                            {action.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold">{action.title}</p>
                                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{action.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
