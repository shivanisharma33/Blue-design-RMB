import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-bg.jpg";

/* ================= LEASE DATA ================= */

const leaseListings = [
  {
    title: "6 Sankuru Road",
    suburb: "Truganina VIC 3029",
    price: 550,
    priceLabel: "$550 per week",
    availability: "Available Now",
    beds: 4,
    baths: 2,
    cars: 2,
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    description:
      "Sparkling beautiful family home offering four generous bedrooms including a master with ensuite, open-plan living and dining, modern kitchen, and secure double garage. Located close to schools, parks, and transport.",
  },
];

/* ================= FILTER OPTIONS ================= */

const BED_FILTERS = ["All", "2+", "3+", "4+"];
const PRICE_FILTERS = ["All", "Under $500", "$500 – $600", "$600+"];

/* ================= PAGE ================= */

const Lease = () => {
  const [search, setSearch] = useState("");
  const [bedsFilter, setBedsFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  /* ================= FILTER LOGIC ================= */

  const filteredListings = useMemo(() => {
    return leaseListings.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.suburb.toLowerCase().includes(search.toLowerCase());

      const matchesBeds =
        bedsFilter === "All" ||
        (bedsFilter === "2+" && item.beds >= 2) ||
        (bedsFilter === "3+" && item.beds >= 3) ||
        (bedsFilter === "4+" && item.beds >= 4);

      const matchesPrice =
        priceFilter === "All" ||
        (priceFilter === "Under $500" && item.price < 500) ||
        (priceFilter === "$500 – $600" &&
          item.price >= 500 &&
          item.price <= 600) ||
        (priceFilter === "$600+" && item.price > 600);

      return matchesSearch && matchesBeds && matchesPrice;
    });
  }, [search, bedsFilter, priceFilter]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/90" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="inline-block mb-5 bg-orange/20 px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] text-orange font-semibold">
            For Lease
          </span>
          <h1 className="font-display text-4xl md:text-6xl mb-4">
            Lease Properties
          </h1>
          <p className="text-orange text-lg">
            Find your next rental home
          </p>
        </div>
      </section>

      {/* ================= FILTER BAR (SOLD STYLE) ================= */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-navy/5 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row gap-4 justify-between items-center">

          {/* SEARCH */}
          <div className="relative w-full lg:w-72">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search address or suburb..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-cream/60
                         border-2 border-transparent outline-none
                         focus:bg-white focus:border-orange/30
                         transition-all text-sm"
            />
          </div>

          {/* BED FILTER */}
          <div className="flex gap-1 bg-cream/60 p-1 rounded-xl">
            {BED_FILTERS.map((bed) => (
              <button
                key={bed}
                onClick={() => setBedsFilter(bed)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all
                  ${
                    bedsFilter === bed
                      ? "bg-navy text-white shadow-md"
                      : "text-navy/60 hover:bg-white"
                  }`}
              >
                {bed}
              </button>
            ))}
          </div>

          {/* PRICE FILTER */}
          <div className="flex gap-1 bg-cream/60 p-1 rounded-xl">
            {PRICE_FILTERS.map((price) => (
              <button
                key={price}
                onClick={() => setPriceFilter(price)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all
                  ${
                    priceFilter === price
                      ? "bg-navy text-white shadow-md"
                      : "text-navy/60 hover:bg-white"
                  }`}
              >
                {price}
              </button>
            ))}
          </div>

          {/* RESULT COUNT */}
          <p className="text-sm text-navy/50">
            Showing{" "}
            <span className="font-bold text-navy">
              {filteredListings.length}
            </span>{" "}
            property
          </p>
        </div>
      </section>

      {/* ================= PROPERTY CARD ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {filteredListings.map((item) => (
          <LeaseCard key={item.title} {...item} />
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default Lease;

/* ================= LEASE CARD ================= */

const LeaseCard = ({
  title,
  suburb,
  priceLabel,
  availability,
  beds,
  baths,
  cars,
  img,
}: any) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <p className="text-orange text-xs uppercase tracking-[0.2em] mb-2">
            Rent
          </p>
          <p className="font-display text-4xl text-white">{priceLabel}</p>
        </div>

        <div className="absolute top-6 right-6 bg-orange text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg">
          {availability}
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-display text-2xl text-navy mb-2">{title}</h3>
        <p className="text-navy/50 mb-6">{suburb}</p>

        <div className="flex gap-8 border-t pt-6 text-navy/70">
          <div>🛏 <span className="font-semibold">{beds}</span> Beds</div>
          <div>🛁 <span className="font-semibold">{baths}</span> Baths</div>
          <div>🚗 <span className="font-semibold">{cars}</span> Cars</div>

          <button className="ml-auto text-orange font-semibold uppercase tracking-wide hover:text-navy transition">
            Enquire →
          </button>
        </div>
      </div>
    </div>
  );
};
