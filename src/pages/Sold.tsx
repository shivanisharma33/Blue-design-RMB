import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= HERO IMAGE ================= */

import heroImg from "@/assets/hero-bg.jpg";

/* ================= FILTER OPTIONS ================= */

const YEARS = ["All Years", "2024", "2023", "2022", "2021", "2020"];
const SUBURBS = ["All Suburbs", "Diamond Creek", "Hurstbridge", "Eltham", "Eltham North", "Plenty", "Kinglake", "Warrandyte", "Research", "Montmorency", "Yarrambat", "Doreen", "Wattle Glen"];

/* ================= HELPER FUNCTION ================= */

const getYearFromDate = (dateStr: string): string => {
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : "";
};

/* ================= SOLD PROPERTY IMAGES (Unsplash - Free to use) ================= */

const soldImages = {
  sold1: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  sold2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  sold3: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  sold4: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  sold5: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  sold6: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  sold7: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  sold8: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
  sold9: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
  sold10: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  sold11: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
  sold12: "https://images.unsplash.com/photo-1600573472591-ee6981cf81f0?w=800&q=80",
};

/* ================= SOLD LISTINGS DATA ================= */

const soldListings = [
  { id: 1, title: "42 Panorama Drive", suburb: "Diamond Creek", price: "$1,950,000", soldDate: "December 2024", beds: 5, baths: 3, cars: 2, size: "1,200m²", img: soldImages.sold1, highlight: true },
  { id: 2, title: "18 Hilltop Avenue", suburb: "Hurstbridge", price: "$1,680,000", soldDate: "November 2024", beds: 4, baths: 3, cars: 2, size: "980m²", img: soldImages.sold2, highlight: true },
  { id: 3, title: "95 Valley Road", suburb: "Eltham", price: "$2,150,000", soldDate: "November 2024", beds: 5, baths: 4, cars: 3, size: "1,450m²", img: soldImages.sold3 },
  { id: 4, title: "27 Sunset Boulevard", suburb: "Plenty", price: "$1,420,000", soldDate: "October 2024", beds: 4, baths: 2, cars: 2, size: "850m²", img: soldImages.sold4 },
  { id: 5, title: "163 Mountain View", suburb: "Kinglake", price: "$1,280,000", soldDate: "October 2024", beds: 4, baths: 2, cars: 2, size: "5 acres", img: soldImages.sold5 },
  { id: 6, title: "8 Riverside Close", suburb: "Warrandyte", price: "$1,890,000", soldDate: "September 2024", beds: 4, baths: 3, cars: 2, size: "1,100m²", img: soldImages.sold6 },
  { id: 7, title: "54 Forest Lane", suburb: "Research", price: "$1,520,000", soldDate: "September 2024", beds: 4, baths: 2, cars: 2, size: "920m²", img: soldImages.sold7 },
  { id: 8, title: "112 Parkside Crescent", suburb: "Montmorency", price: "$1,350,000", soldDate: "August 2024", beds: 3, baths: 2, cars: 2, size: "680m²", img: soldImages.sold8 },
  { id: 9, title: "29 Heritage Place", suburb: "Eltham North", price: "$1,750,000", soldDate: "August 2024", beds: 5, baths: 3, cars: 3, size: "1,050m²", img: soldImages.sold9 },
  { id: 10, title: "76 Orchard Road", suburb: "Yarrambat", price: "$1,620,000", soldDate: "July 2024", beds: 4, baths: 2, cars: 2, size: "2.5 acres", img: soldImages.sold10 },
  { id: 11, title: "33 Meadow Lane", suburb: "Doreen", price: "$980,000", soldDate: "July 2024", beds: 4, baths: 2, cars: 2, size: "550m²", img: soldImages.sold11 },
  { id: 12, title: "201 Creek View", suburb: "Wattle Glen", price: "$1,180,000", soldDate: "June 2024", beds: 3, baths: 2, cars: 2, size: "750m²", img: soldImages.sold12 },
];

/* ================= STATS ================= */

const stats = [
  { value: "$1.5B+", label: "Total Sales Value" },
  { value: "850+", label: "Properties Sold" },
  { value: "98%", label: "Auction Clearance Rate" },
  { value: "14", label: "Days Average on Market" },
];

/* ================= PAGE ================= */

const Sold = () => {
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedSuburb, setSelectedSuburb] = useState("All Suburbs");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter listings
  const filteredListings = useMemo(() => {
    return soldListings.filter((listing) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === "" ||
        listing.title.toLowerCase().includes(searchLower) ||
        listing.suburb.toLowerCase().includes(searchLower);

      // Year filter
      const listingYear = getYearFromDate(listing.soldDate);
      const matchesYear = selectedYear === "All Years" || listingYear === selectedYear;

      // Suburb filter
      const matchesSuburb = selectedSuburb === "All Suburbs" || listing.suburb === selectedSuburb;

      return matchesSearch && matchesYear && matchesSuburb;
    });
  }, [searchQuery, selectedYear, selectedSuburb]);

  const highlightedListings = filteredListings.filter((l) => l.highlight);
  const regularListings = filteredListings.filter((l) => !l.highlight);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sold Properties"
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-yellow/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6" data-aos="fade-down" data-aos-delay="100">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            <p className="text-xs uppercase tracking-[0.25em] text-orange font-medium">
              Our Track Record
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="200">
            Recently Sold
          </h1>
          <p className="text-lg md:text-xl text-orange opacity-80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Delivering exceptional results for our clients across Melbourne's north
          </p>

          {/* Scroll indicator */}
          <div className="mt-10 animate-bounce" data-aos="fade-up" data-aos-delay="500">
            <svg className="w-6 h-6 mx-auto text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative bg-gradient-to-r from-navy via-navy to-navy/95 py-16 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="inline-flex flex-col items-center">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-yellow mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-yellow/50 to-orange/50 mb-3 group-hover:w-20 transition-all duration-300" />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-navy/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Search Input - Enhanced */}
              <div className="relative group">
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
                  placeholder="Search address or suburb..."
                  className="w-full md:w-72 bg-cream/50 border-2 border-transparent rounded-xl pl-12 pr-4 py-3 text-sm outline-none text-foreground placeholder-navy/40 focus:border-orange/30 focus:bg-white focus:shadow-lg focus:shadow-orange/5 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-navy/40 font-medium">Year:</span>
                <div className="flex gap-1 flex-wrap bg-cream/50 p-1 rounded-xl">
                  {YEARS.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-medium transition-all duration-300 rounded-lg ${
                        selectedYear === year
                          ? "bg-navy text-white shadow-md"
                          : "text-navy/60 hover:bg-white hover:text-navy"
                      }`}
                    >
                      {year === "All Years" ? "All" : year}
                    </button>
                  ))}
                </div>
              </div>

              <select
                value={selectedSuburb}
                onChange={(e) => setSelectedSuburb(e.target.value)}
                className="bg-cream/50 border-2 border-transparent rounded-xl px-4 py-3 text-sm text-navy/70 outline-none focus:border-orange/30 focus:bg-white cursor-pointer transition-all duration-300 hover:bg-cream"
              >
                {SUBURBS.map((suburb) => (
                  <option key={suburb}>{suburb}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange to-yellow rounded-full" />
              <p className="text-sm text-navy/60">
                Showing <span className="font-bold text-navy text-base">{filteredListings.length}</span> of {soldListings.length} sold properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT HIGHLIGHTS ================= */}
      {highlightedListings.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
              </svg>
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-navy">
                Recent Highlights
              </h2>
            </div>
            <span className="flex-1 h-px bg-gradient-to-r from-orange/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {highlightedListings.map((item, index) => (
              <div key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                <SoldCardLarge {...item} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= ALL SOLD LISTINGS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {regularListings.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-navy">
                  All Sold Properties
                </h2>
              </div>
              <span className="flex-1 h-px bg-gradient-to-r from-navy/20 to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {regularListings.map((item, index) => (
                <div key={item.id} data-aos="fade-up" data-aos-delay={(index % 4) * 100}>
                  <SoldCard {...item} />
                </div>
              ))}
            </div>
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
            <h3 className="font-display text-2xl text-navy mb-3">No Sold Properties Found</h3>
            <p className="text-navy/50 mb-8 max-w-md mx-auto">We couldn't find any sold properties matching your criteria. Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("All Years");
                setSelectedSuburb("All Suburbs");
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

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="relative bg-cream/50 py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow to-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-yellow/20" data-aos="zoom-in">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-navy mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            "The team's expertise and dedication resulted in a sale price that exceeded our expectations. Their knowledge of the local market is unmatched."
          </blockquote>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow to-orange mx-auto mb-4" />
            <p className="font-semibold text-navy text-lg">Michael & Sarah Thompson</p>
            <p className="text-sm text-navy/50 mt-1">Sold in Eltham, November 2024</p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/95 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6" data-aos="fade-up">
            <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs uppercase tracking-wider text-white/70">Get Started Today</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Thinking of Selling?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="150">
            Get a complimentary property appraisal and discover what your home is worth in today's competitive market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="group inline-flex items-center gap-3 bg-orange text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-bold rounded-xl hover:bg-yellow hover:text-navy hover:shadow-xl hover:shadow-yellow/20 transition-all duration-300">
              Request Appraisal
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sold;

/* ================= SOLD CARD LARGE ================= */

const SoldCardLarge = ({
  title,
  suburb,
  price,
  soldDate,
  beds,
  baths,
  cars,
  size,
  img,
}: {
  title: string;
  suburb: string;
  price: string;
  soldDate: string;
  beds: number;
  baths: number;
  cars: number;
  size: string;
  img: string;
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

        {/* Sold Badge - Refined */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange to-orange/90 text-white px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-lg shadow-orange/25">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sold
          </span>
          <span className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-3 py-2 text-[10px] uppercase tracking-[0.15em] rounded-full border border-white/20">
            {soldDate}
          </span>
        </div>

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
          <span className="text-[10px] text-white bg-orange/80 px-3 py-1.5 rounded-full uppercase tracking-wider font-medium">Sold</span>
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

/* ================= SOLD CARD (GRID) ================= */

const SoldCard = ({
  title,
  suburb,
  price,
  soldDate,
  beds,
  baths,
  cars,
  img,
}: {
  title: string;
  suburb: string;
  price: string;
  soldDate: string;
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

        {/* Sold Badge - Refined */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange to-orange/90 text-white px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] font-bold rounded-full shadow-lg shadow-orange/25">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sold
          </span>
        </div>

        {/* Price Badge - Refined with glass effect */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-end justify-between">
            <span className="bg-white/95 backdrop-blur-sm text-navy px-4 py-2 font-display text-lg rounded-lg shadow-lg">
              {price}
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
          <p className="text-[10px] text-orange font-semibold uppercase tracking-wider">{soldDate}</p>
        </div>
      </div>
    </div>
  );
};
