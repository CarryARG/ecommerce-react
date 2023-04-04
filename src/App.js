import ConsumiendoApis from "./components/ConsumiendoApis/ConsumiendoApis.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Login from "./components/Login/Login.jsx";
import Form from "./components/Form/Form.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ProductsBack from "./components/ProductsBack/ProductsBack.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <Footer>
                  <ItemListContainer />
                  <ConsumiendoApis />
                </Footer>
              }
            />
            <Route
              path="/productsBack"
              element={
                <Footer>
                  <ProductsBack />
                </Footer>
              }
            />
            <Route
              path="/category/:CategoryName"
              element={
                <Footer>
                  <ItemListContainer />
                  <ConsumiendoApis />
                </Footer>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/formulario" element={<Form />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Navbar>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
