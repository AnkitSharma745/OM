import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderNowModal from "./OrderFormModal";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  margin-right: 1rem;
`;

const ProductInfo = styled(motion.div)`
  flex: 1;
  position: sticky;
  top: 20px;
`;

// const FloatingButton = styled.button`
//   position: fixed;
//   bottom: 10px;
//   right: 10px;
//   background-color: #ff5757;
//   color: white;
//   padding: 1rem 2rem;
//   border-radius: 30px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   display: block;
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

const ProductDetail = () => {
  const { state } = useLocation();
  const details = state?.details;
  const [selectedSize, setSelectedSize] = useState(details.size[0]);
  const price = details.price.current;
  const discount = details.discount;

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!details) {
    return <div>Product details not found</div>;
  }

  return (
    <Container>
      {/* Left side: Image Gallery */}
      <ImageWrapper
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-right"
      >
        <ImageGallery
          items={details.images} // Dynamically use product images
          showThumbnails
          showFullscreenButton
          showPlayButton={false}
        />
      </ImageWrapper>

      {/* Right side: Product Info */}
      <ProductInfo
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-left"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {details.title} ({selectedSize})
        </h1>
        <motion.div
          key={price}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-red-500"
        >
          Rs. {price.toLocaleString()}
          <span className="text-xl text-gray-500 line-through ml-4">
            Rs. {details.price.original.toLocaleString()}
          </span>
        </motion.div>
        <div className="text-md text-green-500 mt-2">
          You Save Rs. {discount.toLocaleString()}
        </div>

        {/* Size Selector */}
        <div className="mt-4">
          <label className="block text-gray-700 font-bold mb-2">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => handleSizeChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {details.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Add to Cart */}
        <div className="m-auto mt-4 ml-6 ">
          <OrderNowModal />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Product Information</h3>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {details.information.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>

        {/* <FloatingButton>Add to Cart</FloatingButton> */}
      </ProductInfo>
    </Container>
  );
};

export default ProductDetail;
