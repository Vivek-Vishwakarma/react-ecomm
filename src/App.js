import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
function App() {
  return (
    <>
      <CartContext>
        <Router>
          <Mynavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContext>
    </>
  );
}

export default App;
