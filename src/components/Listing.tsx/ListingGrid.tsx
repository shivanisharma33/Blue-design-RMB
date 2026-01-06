const listings = [
  { title: "80 Elizabeth Place, Eden Park", size: "20.36 acres (approx)" },
  { title: "7 & 8 Cordell Court, Whittlesea", size: "6431m² approx" },
  { title: "63 Ford Drive, Mansfield" },
  { title: "31 Baden Drive, Wandong" },
  { title: "224 Edenvale Crescent, Kinglake West" },
  { title: "253 Hidden Valley Boulevard, Hidden Valley" },
  { title: "37 Baden Drive, Wandong" },
  { title: "88 King Street, Wallan" },
  { title: "1 Nez Avenue, Eltham" },
  { title: "15 Thornbill Drive, Plenty" },
  { title: "120 Dolomite Rise, Hidden Valley" },
  { title: "11 The Heights, Hidden Valley" },
  { title: "645 Glenburnie Road, Whittlesea" },
];

const ListingGrid = () => {
  return (
    <section className="px-8 py-12">
      <div className="grid grid-cols-3 gap-6">

        {listings.map((item, i) => (
          <div
            key={i}
            className={`relative bg-navy/10 overflow-hidden ${
              i < 3 ? "col-span-3 h-[420px]" : "h-[240px]"
            }`}
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="absolute inset-0 bg-navy/50" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-4 left-4">
              <p className="text-xs uppercase tracking-wider">
                {item.title}
              </p>
              {item.size && (
                <p className="text-[11px] text-yellow/90 mt-1">
                  {item.size}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ListingGrid;
