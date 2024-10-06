import { Route, Routes } from "react-router-dom";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Product from "../pages/productPage/Product";
import Brands from "../pages/Brands";
import ProductDetail from "../components/ProductDetail";
import PoolTable from "../components/PoolTable";
import Balls from "../components/Balls";
import Stick from "../components/Stick";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pool-table" element={<PoolTable />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/pool-table/:productId" element={<ProductDetail />} />

        <Route path="/billiard-balls" element={<Balls />} />
        <Route path="/billiard-cue" element={<Stick />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
