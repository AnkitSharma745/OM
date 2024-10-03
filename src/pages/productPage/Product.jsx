import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PoolTable from "../../Data/poolTable";
// import { foosballTables } from "../../Data/data";
import { cueSticks } from "../../Data/data";
import { poolTableBalls } from "../../Data/data";
import OrderFormModal from "../../components/OrderFormModal";
import { useState } from "react";

AOS.init();

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleViewDetails = (details) => {
    navigate(`/product/${details.title}`, { state: { details } });
  };

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

        {/* Section for Tables */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tables</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle m-auto">
            {PoolTable.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={product.details.images[0].original} // Displaying the first image
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{`₹${product.details.price.current}`}</span>
                    <button
                      onClick={() => handleViewDetails(product.details)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pool Table Balls Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Our Products
            </h1>

            {/* Section for Tables */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Tables</h2>
              <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle m-auto">
                {PoolTable.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={`${index * 100}`}
                  >
                    <img
                      src={product.details.images[0].original}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{`₹${product.details.price.current}`}</span>
                        <button
                          onClick={() => handleOrderNow(product.details)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pool Table Balls Section */}
            <h2 className="text-3xl font-semibold mb-6">Pool Table Balls</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {poolTableBalls.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{`₹${product.price.toLocaleString()}`}</span>
                      <button
                        onClick={() => handleOrderNow(product)} // Open modal on "Order Now"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cue Sticks Section */}
            <h2 className="text-3xl font-semibold mt-12 mb-6">Cue Sticks</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {cueSticks.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{`₹${product.price.toLocaleString()}`}</span>
                      <button
                        onClick={() => handleOrderNow(product)} // Open modal on "Order Now"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for Order Form */}
            {isModalOpen && (
              <OrderFormModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            )}
          </div>
        </div>

        {/* Foosball Tables Section */}
        {/* <h2 className="text-3xl font-semibold mt-12 mb-6">Foosball Tables</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {foosballTables.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{`₹${product.price.toLocaleString()}`}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Product;
