import { Route, Routes } from "react-router-dom";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Product from "../pages/productPage/Product";
import Brands from "../pages/Brands";
import ProductDetail from "../components/ProductDetail";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
