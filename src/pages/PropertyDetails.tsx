import { useLocation, useNavigate } from "react-router-dom";

type Property = {
  title: string;
  suburb: string;
  img: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
};

const PropertyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const property = location.state?.property as Property | undefined;

  if (!property) {
    return (
      <div className="p-20 text-center">
        <p>Property not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-orange-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 mb-6"
      >
        ← Back to Listings
      </button>

      <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-500 mb-8">{property.suburb}, VIC</p>

      <img
        src={property.img}
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-xl mb-10"
      />

      <div className="grid grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-gray-100 p-6 rounded-xl">
          🛏 {property.beds}
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          🛁 {property.baths}
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          🚗 {property.cars}
        </div>
      </div>

      <p className="text-3xl font-bold">{property.price}</p>
    </div>
  );
};

export default PropertyDetails;
