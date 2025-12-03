export function BrandLogos() {
  return (
    <section className="border-t border-gray-100 bg-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Nike */}
          <svg className="h-12 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 1000 356" xmlns="http://www.w3.org/2000/svg">
            <path d="M245.8 212.6l-38.1 85.7s-111.3-69.2-211.9-111.3c-25.7-10.7-34.4 6.5-22 20.6C7.4 250.8 140.4 348 140.4 348l118.9-267.1c8-17.8 0-27.4-16.3-21.8L0 146.4l245.8 66.2z"/>
          </svg>

          {/* Adidas */}
          <svg className="h-8 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 2560 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M1024 0l-256 512h512L1024 0zm-384 768l-128 256h384l128-256H640zm640 0l-128 256h384l128-256h-384zm-512-256L640 768h384l128-256H768zm512 0l-128 256h384l128-256h-384z"/>
          </svg>

          {/* Zara */}
          <div className="font-serif text-4xl font-bold tracking-wider text-gray-400 transition-colors hover:text-gray-900">ZARA</div>

          {/* H&M */}
          <svg className="h-10 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm-80 320h-48V192h48v80h64v-80h48v160h-48v-64h-64v64zm160-96c0 26.5-21.5 48-48 48h-48v-96h48c26.5 0 48 21.5 48 48z"/>
          </svg>

          {/* Gucci */}
          <div className="font-serif text-3xl font-bold tracking-widest text-gray-400 transition-colors hover:text-gray-900">GUCCI</div>

          {/* Prada */}
          <div className="font-serif text-3xl font-light tracking-[0.3em] text-gray-400 transition-colors hover:text-gray-900">PRADA</div>

          {/* Versace */}
          <svg className="h-12 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <circle cx="256" cy="256" r="200" fill="none" stroke="currentColor" strokeWidth="24"/>
            <path d="M256 150c-30 0-55 25-55 55s25 55 55 55 55-25 55-55-25-55-55-55zm0 180c-50 0-90 40-90 90h180c0-50-40-90-90-90z"/>
          </svg>

          {/* Calvin Klein */}
          <div className="text-2xl font-bold tracking-widest text-gray-400 transition-colors hover:text-gray-900">CK</div>

          {/* Levi's */}
          <div className="font-serif text-3xl font-bold italic text-gray-400 transition-colors hover:text-gray-900">Levi's</div>

          {/* Tommy Hilfiger */}
          <div className="flex items-center gap-1">
            <div className="h-8 w-2 bg-red-600"></div>
            <div className="h-8 w-2 border border-gray-300 bg-white"></div>
            <div className="h-8 w-2 bg-blue-600"></div>
            <span className="ml-2 text-xl font-bold text-gray-400 transition-colors hover:text-gray-900">TOMMY</span>
          </div>

          {/* Lacoste */}
          <svg className="h-10 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100c-20 0-40 10-50 25-10-15-30-25-50-25-35 0-65 30-65 65v80c0 35 30 65 65 65 20 0 40-10 50-25 10 15 30 25 50 25 35 0 65-30 65-65v-80c0-35-30-65-65-65z"/>
            <circle cx="280" cy="150" r="8"/>
            <circle cx="320" cy="140" r="8"/>
          </svg>

          {/* Ralph Lauren */}
          <div className="font-serif text-xl tracking-wider text-gray-400 transition-colors hover:text-gray-900">RALPH LAUREN</div>
        </div>
      </div>
    </section>
  );
}
