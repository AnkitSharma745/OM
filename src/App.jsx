import Aos from "aos";
import "aos/dist/aos.css";
import AllRoutes from "./AllRoutes/AllRoutes";
function App() {
  Aos.init({
    duration: 1000,
    once: true,
  });

  return (
    <>
      <AllRoutes />
    </>
  );
}
export default App;
