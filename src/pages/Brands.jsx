import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const brands = [
  {
    name: "OMINS",
    description: "Leading manufacturer of premium pool tables.",
    logo: "omins", // Replace with actual image URL
  },
  {
    name: "Wiraka",
    description: "High-quality billiard accessories and sticks.",
    logo: "wiraka", // Replace with actual image URL
  },
  {
    name: "Sharma Billiard Cue",
    description: "Innovative designs for modern pool tables.",
    logo: "brand_c_logo_url", // Replace with actual image URL
  },
];

const Brands = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Brands</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="flip-left"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{brand.name}</h2>
                <p className="text-gray-600">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
