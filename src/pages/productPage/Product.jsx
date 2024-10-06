import AOS from "aos";
import "aos/dist/aos.css";
import PoolTable from "../../components/PoolTable";
import Balls from "../../components/Balls";
import Stick from "../../components/Stick";
import MoreProduct from "../../components/MoreProduct";

AOS.init();

const Product = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <PoolTable />
        <Balls />
        <Stick />
        <MoreProduct />
      </div>
    </div>
  );
};

export default Product;
