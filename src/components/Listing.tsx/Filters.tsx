const filters = [
  "Search for a listing",
  "Min Price",
  "Max Price",
  "Bed",
  "Bath",
  "Car",
];

const Filters = () => {
  return (
    <div className="px-8 py-6 border-b border-navy/20">
      <div className="grid grid-cols-6 gap-4">
        {filters.map((label, i) => (
          <div
            key={i}
            className="bg-navy/10 px-4 py-2 text-xs text-navy/80"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
