"use client";

import { useState } from "react";

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

const currencies = [
    { code: "USD", symbol: "$", flag: "https://flagcdn.com/w20/us.png" },
    { code: "EUR", symbol: "€", flag: "https://flagcdn.com/w20/eu.png" },
    { code: "GBP", symbol: "£", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "JPY", symbol: "¥", flag: "https://flagcdn.com/w20/jp.png" },
];

export function TopBar() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);

    return (
        <div className="border-b border-gray-100 bg-white py-2">
            <div className="container mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 text-xs sm:px-6 lg:px-8">
                {/* Language Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowLanguageMenu(!showLanguageMenu);
                            setShowCurrencyMenu(false);
                        }}
                        className="flex items-center gap-1 text-gray-600 hover:text-black"
                    >
                        <span>{selectedLanguage.flag}</span>
                        <span>{selectedLanguage.name}</span>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {showLanguageMenu && (
                        <div className="absolute right-0 top-full z-[100] mt-1 w-36 border border-gray-200 bg-white shadow-lg">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setSelectedLanguage(lang);
                                        setShowLanguageMenu(false);
                                    }}
                                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-xs hover:bg-gray-50 ${
                                        selectedLanguage.code === lang.code ? "bg-gray-100" : ""
                                    }`}
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Currency Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowCurrencyMenu(!showCurrencyMenu);
                            setShowLanguageMenu(false);
                        }}
                        className="flex items-center gap-1 text-gray-600 hover:text-black"
                    >
                        <img src={selectedCurrency.flag} alt={selectedCurrency.code} className="h-3" />
                        <span>{selectedCurrency.code}</span>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {showCurrencyMenu && (
                        <div className="absolute right-0 top-full z-[100] mt-1 w-32 border border-gray-200 bg-white shadow-lg">
                            {currencies.map((currency) => (
                                <button
                                    key={currency.code}
                                    onClick={() => {
                                        setSelectedCurrency(currency);
                                        setShowCurrencyMenu(false);
                                    }}
                                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-xs hover:bg-gray-50 ${
                                        selectedCurrency.code === currency.code ? "bg-gray-100" : ""
                                    }`}
                                >
                                    <img src={currency.flag} alt={currency.code} className="h-3" />
                                    <span>{currency.code}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
