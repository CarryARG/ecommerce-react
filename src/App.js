import Footer from "./components/Footer/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer />
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;
