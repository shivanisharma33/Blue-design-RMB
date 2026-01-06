import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= HERO IMAGE ================= */

import heroImg from "@/assets/hero-bg.jpg";

/* ================= FILTER OPTIONS ================= */

const MIN_PRICES = [
  { label: "No Min", value: 0 },
  { label: "$600,000", value: 600000 },
  { label: "$800,000", value: 800000 },
  { label: "$1,000,000", value: 1000000 },
  { label: "$1,200,000", value: 1200000 },
  { label: "$1,400,000", value: 1400000 },
  { label: "$1,600,000", value: 1600000 },
  { label: "$1,800,000", value: 1800000 },
  { label: "$2,000,000", value: 2000000 },
  { label: "$2,200,000", value: 2200000 },
];

const MAX_PRICES = [
  { label: "No Max", value: Infinity },
  { label: "$1,000,000", value: 1000000 },
  { label: "$1,200,000", value: 1200000 },
  { label: "$1,400,000", value: 1400000 },
  { label: "$1,600,000", value: 1600000 },
  { label: "$1,800,000", value: 1800000 },
  { label: "$2,000,000", value: 2000000 },
  { label: "$2,200,000", value: 2200000 },
  { label: "$2,400,000", value: 2400000 },
  { label: "$2,600,000", value: 2600000 },
  { label: "$2,800,000", value: 2800000 },
  { label: "$3,000,000+", value: 3000000 },
];

const COUNT_OPTIONS = [
  { label: "Any", value: 0 },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
  { label: "5+", value: 5 },
  { label: "6+", value: 6 },
];

const PROPERTY_TYPES = ["All Properties", "House", "Apartment", "Land", "Rural"];

/* ================= PROPERTY IMAGES (Unsplash - Free to use) ================= */

const propertyImages = {
  luxury1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  luxury2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  modern1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  modern2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  classic1: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  classic2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  rural1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
  rural2: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80",
  elegant1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
  elegant2: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
  family1: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
  family2: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80",
};

/* ================= LISTINGS DATA ================= */

const listings = [
  { id: 1, title: "80 Elizabeth Place", suburb: "Eden Park", price: "$1,850,000", priceNum: 1850000, beds: 4, baths: 3, cars: 2, size: "20.36 acres", img: propertyImages.luxury1, featured: true, tag: "Premium", type: "Rural" },
  { id: 2, title: "7 & 8 Cordell Court", suburb: "Whittlesea", price: "$2,200,000", priceNum: 2200000, beds: 5, baths: 4, cars: 3, size: "6431m²", img: propertyImages.luxury2, featured: true, tag: "Exclusive", type: "House" },
  { id: 3, title: "63 Ford Drive", suburb: "Mansfield", price: "$1,450,000", priceNum: 1450000, beds: 4, baths: 2, cars: 2, size: "1.2 acres", img: propertyImages.modern1, type: "Rural" },
  { id: 4, title: "31 Baden Drive", suburb: "Wandong", price: "$980,000", priceNum: 980000, beds: 3, baths: 2, cars: 2, size: "850m²", img: propertyImages.classic1, type: "House" },
  { id: 5, title: "224 Edenvale Crescent", suburb: "Kinglake West", price: "$1,150,000", priceNum: 1150000, beds: 4, baths: 2, cars: 2, size: "2.5 acres", img: propertyImages.rural1, type: "Rural" },
  { id: 6, title: "253 Hidden Valley Boulevard", suburb: "Hidden Valley", price: "$1,680,000", priceNum: 1680000, beds: 5, baths: 3, cars: 3, size: "1100m²", img: propertyImages.elegant1, type: "House" },
  { id: 7, title: "37 Baden Drive", suburb: "Wandong", price: "$920,000", priceNum: 920000, beds: 3, baths: 2, cars: 2, size: "780m²", img: propertyImages.family1, type: "House" },
  { id: 8, title: "88 King Street", suburb: "Wallan", price: "$750,000", priceNum: 750000, beds: 3, baths: 2, cars: 1, size: "450m²", img: propertyImages.classic2, type: "Apartment" },
  { id: 9, title: "1 Nez Avenue", suburb: "Eltham", price: "$1,950,000", priceNum: 1950000, beds: 4, baths: 3, cars: 2, size: "920m²", img: propertyImages.modern2, type: "House" },
  { id: 10, title: "15 Thornbill Drive", suburb: "Plenty", price: "$2,100,000", priceNum: 2100000, beds: 5, baths: 4, cars: 3, size: "1200m²", img: propertyImages.elegant2, type: "House" },
  { id: 11, title: "120 Dolomite Rise", suburb: "Hidden Valley", price: "$1,320,000", priceNum: 1320000, beds: 4, baths: 2, cars: 2, size: "980m²", img: propertyImages.rural2, type: "Land" },
  { id: 12, title: "11 The Heights", suburb: "Hidden Valley", price: "$1,480,000", priceNum: 1480000, beds: 4, baths: 3, cars: 2, size: "1050m²", img: propertyImages.family2, type: "House" },
];

/* ================= PAGE ================= */

const Listings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeType, setActiveType] = useState("All Properties");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minBeds, setMinBeds] = useState(0);
  const [minBaths, setMinBaths] = useState(0);
  const [minCars, setMinCars] = useState(0);
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort listings
  const filteredListings = useMemo(() => {
    let result = listings.filter((listing) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === "" ||
        listing.title.toLowerCase().includes(searchLower) ||
        listing.suburb.toLowerCase().includes(searchLower);

      // Property type filter
      const matchesType = activeType === "All Properties" || listing.type === activeType;

      // Price filter
      const matchesPrice = listing.priceNum >= minPrice && listing.priceNum <= maxPrice;

      // Beds, baths, cars filter
      const matchesBeds = listing.beds >= minBeds;
      const matchesBaths = listing.baths >= minBaths;
      const matchesCars = listing.cars >= minCars;

      return matchesSearch && matchesType && matchesPrice && matchesBeds && matchesBaths && matchesCars;
    });

    // Sort results
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.priceNum - b.priceNum);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.priceNum - a.priceNum);
        break;
      default:
        // newest - keep original order (id descending for demo)
        result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [searchQuery, activeType, minPrice, maxPrice, minBeds, minBaths, minCars, sortBy]);

  const featuredListings = filteredListings.filter((l) => l.featured);
  const regularListings = filteredListings.filter((l) => !l.featured);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Properties"
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6" data-aos="fade-down" data-aos-delay="100">
            <span className="w-2 h-2 bg-yellow rounded-full animate-pulse" />
            <p className="text-xs uppercase tracking-[0.25em] text-yellow font-medium">
              Discover Your Dream Home
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="200">
            Our Properties
          </h1>
          <p className="text-lg md:text-xl text-orange opacity-80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Explore our curated collection of exceptional properties across Victoria's most sought-after locations
          </p>

          {/* Scroll indicator */}
          <div className="mt-10 animate-bounce" data-aos="fade-up" data-aos-delay="500">
            <svg className="w-6 h-6 mx-auto text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-navy/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Property Type Tabs */}
          <div className="flex items-center gap-2 py-4 border-b border-navy/5 overflow-x-auto scrollbar-hide">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 rounded-full ${
                  activeType === type
                    ? "bg-navy text-white shadow-lg shadow-navy/20"
                    : "text-navy/60 hover:bg-cream hover:text-navy"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="py-5">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input - Enhanced */}
              <div className="relative flex-1 lg:max-w-md group">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/30 group-focus-within:text-orange transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by suburb, address or keyword..."
                  className="w-full bg-cream/50 border-2 border-transparent rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none text-foreground placeholder-navy/40 focus:border-orange/30 focus:bg-white focus:shadow-lg focus:shadow-orange/5 transition-all duration-300"
                />
              </div>

              {/* Filter Dropdowns - Enhanced */}
              <div className="flex flex-wrap gap-3">
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer min-w-[130px] transition-all duration-300 hover:bg-cream"
                >
                  {MIN_PRICES.map((price) => (
                    <option key={price.label} value={price.value}>{price.label}</option>
                  ))}
                </select>

                <select
                  value={maxPrice === Infinity ? "Infinity" : maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value === "Infinity" ? Infinity : Number(e.target.value))}
                  className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer min-w-[130px] transition-all duration-300 hover:bg-cream"
                >
                  {MAX_PRICES.map((price) => (
                    <option key={price.label} value={price.value === Infinity ? "Infinity" : price.value}>{price.label}</option>
                  ))}
                </select>

                <select
                  value={minBeds}
                  onChange={(e) => setMinBeds(Number(e.target.value))}
                  className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer min-w-[100px] transition-all duration-300 hover:bg-cream"
                >
                  {COUNT_OPTIONS.map((opt) => (
                    <option key={opt.label} value={opt.value}>{opt.value === 0 ? "Beds" : opt.label}</option>
                  ))}
                </select>

                <select
                  value={minBaths}
                  onChange={(e) => setMinBaths(Number(e.target.value))}
                  className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer min-w-[100px] transition-all duration-300 hover:bg-cream"
                >
                  {COUNT_OPTIONS.map((opt) => (
                    <option key={opt.label} value={opt.value}>{opt.value === 0 ? "Baths" : opt.label}</option>
                  ))}
                </select>

                <select
                  value={minCars}
                  onChange={(e) => setMinCars(Number(e.target.value))}
                  className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer min-w-[100px] transition-all duration-300 hover:bg-cream"
                >
                  {COUNT_OPTIONS.map((opt) => (
                    <option key={opt.label} value={opt.value}>{opt.value === 0 ? "Cars" : opt.label}</option>
                  ))}
                </select>
              </div>

              {/* View Toggle - Enhanced */}
              <div className="flex items-center gap-1 ml-auto bg-cream/50 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-navy text-white shadow-md"
                      : "text-navy/40 hover:text-navy hover:bg-white"
                  }`}
                  aria-label="Grid view"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <rect x="0" y="0" width="7" height="7" rx="1.5" />
                    <rect x="9" y="0" width="7" height="7" rx="1.5" />
                    <rect x="0" y="9" width="7" height="7" rx="1.5" />
                    <rect x="9" y="9" width="7" height="7" rx="1.5" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-navy text-white shadow-md"
                      : "text-navy/40 hover:text-navy hover:bg-white"
                  }`}
                  aria-label="List view"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <rect x="0" y="0" width="16" height="3" rx="1" />
                    <rect x="0" y="6.5" width="16" height="3" rx="1" />
                    <rect x="0" y="13" width="16" height="3" rx="1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS COUNT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow to-orange rounded-full" />
            <p className="text-sm text-navy/60">
              Showing <span className="font-bold text-navy text-base">{filteredListings.length}</span> of {listings.length} properties
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-navy/40 uppercase tracking-wider">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-navy font-medium bg-cream/50 border-0 rounded-lg px-3 py-2 outline-none cursor-pointer hover:bg-cream transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* ================= FEATURED LISTINGS ================= */}
      {featuredListings.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-navy">
                Featured Properties
              </h2>
            </div>
            <span className="flex-1 h-px bg-gradient-to-r from-yellow/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredListings.map((item, index) => (
              <div key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                <FeaturedCard {...item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= ALL LISTINGS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {regularListings.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-navy">
                  All Properties
                </h2>
              </div>
              <span className="flex-1 h-px bg-gradient-to-r from-navy/20 to-transparent" />
            </div>

            {viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {regularListings.map((item, index) => (
                  <div key={item.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                    <ListingCard {...item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-5">
                {regularListings.map((item, index) => (
                  <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
                    <ListingCardHorizontal {...item} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* No Results Message - Enhanced */}
        {filteredListings.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-navy mb-3">No Properties Found</h3>
            <p className="text-navy/50 mb-8 max-w-md mx-auto">We couldn't find any properties matching your criteria. Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveType("All Properties");
                setMinPrice(0);
                setMaxPrice(Infinity);
                setMinBeds(0);
                setMinBaths(0);
                setMinCars(0);
              }}
              className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-sm uppercase tracking-[0.12em] font-semibold rounded-xl hover:bg-navy/90 hover:shadow-lg hover:shadow-navy/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/95 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6" data-aos="fade-up">
            <svg className="w-4 h-4 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs uppercase tracking-wider text-white/70">Need Help?</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="150">
            Let our experienced team help you find the perfect property. Register your requirements and we'll personally reach out with tailored recommendations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="group inline-flex items-center gap-3 bg-yellow text-navy px-8 py-4 text-sm uppercase tracking-[0.15em] font-bold rounded-xl hover:bg-white hover:shadow-xl hover:shadow-yellow/20 transition-all duration-300">
              Register Interest
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Listings;

/* ================= FEATURED CARD ================= */

const FeaturedCard = ({
  title,
  suburb,
  price,
  beds,
  baths,
  cars,
  size,
  img,
  tag,
}: {
  title: string;
  suburb: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
  size: string;
  img: string;
  tag?: string;
}) => {
  return (
    <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-500">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
        />
        {/* Elegant multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tag Badge - Refined */}
        <div className="absolute top-5 left-5 flex gap-2">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow to-yellow/90 text-navy px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-lg shadow-yellow/25">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {tag || "Featured"}
          </span>
        </div>

        {/* Save Button - Refined */}
        <button className="absolute top-5 right-5 w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-navy hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Price Overlay - Refined with glass effect */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2 font-medium">{suburb}</p>
              <p className="text-white font-display text-3xl md:text-4xl tracking-tight">{price}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Land Size</p>
              <p className="text-white font-medium text-sm">{size}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-navy group-hover:text-orange transition-colors duration-300 mb-1">
              {title}
            </h3>
            <p className="text-sm text-navy/50 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {suburb}, VIC
            </p>
          </div>
          <span className="text-[10px] text-white bg-navy/80 px-3 py-1.5 rounded-full uppercase tracking-wider font-medium">For Sale</span>
        </div>

        {/* Property Details - Modern pill design */}
        <div className="flex items-center gap-3 pt-4 border-t border-navy/8">
          <div className="flex items-center gap-2 bg-cream/80 px-3.5 py-2 rounded-lg">
            <svg className="w-4 h-4 text-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-semibold text-navy">{beds}</span>
            <span className="text-xs text-navy/40">Beds</span>
          </div>
          <div className="flex items-center gap-2 bg-cream/80 px-3.5 py-2 rounded-lg">
            <svg className="w-4 h-4 text-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <span className="text-sm font-semibold text-navy">{baths}</span>
            <span className="text-xs text-navy/40">Baths</span>
          </div>
          <div className="flex items-center gap-2 bg-cream/80 px-3.5 py-2 rounded-lg">
            <svg className="w-4 h-4 text-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-semibold text-navy">{cars}</span>
            <span className="text-xs text-navy/40">Cars</span>
          </div>
          <button className="ml-auto flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-orange hover:text-navy transition-colors">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= LISTING CARD (GRID) ================= */

const ListingCard = ({
  title,
  suburb,
  price,
  beds,
  baths,
  cars,
  size,
  img,
}: {
  title: string;
  suburb: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
  size: string;
  img: string;
}) => {
  return (
    <div className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Refined gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Save Button - Refined */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy/50 hover:text-orange hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Price Badge - Refined with glass effect */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-end justify-between">
            <span className="bg-white/95 backdrop-blur-sm text-navy px-4 py-2 font-display text-lg rounded-lg shadow-lg">
              {price}
            </span>
            <span className="bg-navy/80 backdrop-blur-sm text-white/90 px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-md font-medium">
              {size}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-base font-semibold text-navy group-hover:text-orange transition-colors duration-300 line-clamp-1 mb-1">
            {title}
          </h3>
          <p className="text-xs text-navy/50 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {suburb}
          </p>
        </div>

        {/* Property Details - Modern compact design */}
        <div className="flex items-center justify-between pt-3 border-t border-navy/8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-navy/60">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm font-medium">{beds}</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy/60">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-sm font-medium">{baths}</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy/60">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">{cars}</span>
            </div>
          </div>
          <svg className="w-5 h-5 text-navy/30 group-hover:text-orange group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/* ================= LISTING CARD (HORIZONTAL/LIST) ================= */

const ListingCardHorizontal = ({
  title,
  suburb,
  price,
  beds,
  baths,
  cars,
  size,
  img,
}: {
  title: string;
  suburb: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
  size: string;
  img: string;
}) => {
  return (
    <div className="group flex gap-0 bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer">
      {/* Image Section */}
      <div className="relative w-80 flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
        </div>

        {/* Save Button */}
        <button className="absolute top-4 left-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy/50 hover:text-orange hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Status Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-navy/80 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-full font-medium">
            For Sale
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-xl text-navy group-hover:text-orange transition-colors duration-300 mb-1.5">
                {title}
              </h3>
              <p className="text-sm text-navy/50 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {suburb}, VIC
              </p>
            </div>
            <div className="text-right">
              <p className="text-navy/40 text-[10px] uppercase tracking-wider mb-1">Price</p>
              <p className="text-navy font-display text-2xl">{price}</p>
            </div>
          </div>

          {/* Property Features - Pill style */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-cream/80 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm font-medium text-navy">{beds}</span>
              <span className="text-xs text-navy/40">Beds</span>
            </div>
            <div className="flex items-center gap-2 bg-cream/80 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-sm font-medium text-navy">{baths}</span>
              <span className="text-xs text-navy/40">Baths</span>
            </div>
            <div className="flex items-center gap-2 bg-cream/80 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium text-navy">{cars}</span>
              <span className="text-xs text-navy/40">Cars</span>
            </div>
            <div className="flex items-center gap-2 bg-cream/80 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="text-sm font-medium text-navy">{size}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-navy/8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-semibold text-orange hover:text-navy transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Details
            </button>
            <button className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-medium text-navy/50 hover:text-navy transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Save
            </button>
          </div>
          <svg className="w-5 h-5 text-navy/30 group-hover:text-orange group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
