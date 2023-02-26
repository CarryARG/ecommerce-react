import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ProductCard title={"Producto 1"} price={200} stock={true} />
      <ProductCard title={"Producto 2"} price={500} stock={false} />
      <ProductCard title={"Producto 3"} price={1000} stock={true} />
      <ProductCard title={"Producto 4"} stock={true} />
      <Footer />
    </div>
  );
}

export default App;
