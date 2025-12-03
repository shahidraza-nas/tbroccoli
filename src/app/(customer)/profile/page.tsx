"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
  });

  const recentOrders = [
    { id: "ORD-001", date: "Nov 28, 2025", total: 129.99, status: "Delivered" },
    { id: "ORD-002", date: "Nov 15, 2025", total: 89.50, status: "Shipped" },
    { id: "ORD-003", date: "Oct 30, 2025", total: 249.00, status: "Delivered" },
  ];

  const handleSave = () => {
    // TODO: Save to API
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="mt-1 text-gray-600">Manage your account information and view your orders</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B6B] text-2xl font-bold text-white">
                  {userData.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{userData.name}</h2>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                </div>
              </div>
              <nav className="space-y-1">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-lg bg-[#FF6B6B]/10 px-4 py-3 text-sm font-medium text-[#FF6B6B]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </Link>
                <Link
                  href="/orders"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Orders
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Wishlist
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Link>
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Information */}
            <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-sm font-medium text-[#FF6B6B] hover:text-[#FF5252]"
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="rounded-lg bg-[#FF6B6B] px-4 py-2 text-sm font-medium text-white hover:bg-[#FF5252]"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{userData.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{userData.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{userData.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  {isEditing ? (
                    <textarea
                      value={userData.address}
                      onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                      rows={2}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{userData.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <Link href="/orders" className="text-sm font-medium text-[#FF6B6B] hover:text-[#FF5252]">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div>
                      <p className="font-semibold text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
