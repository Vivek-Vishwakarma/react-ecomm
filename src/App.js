import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
        <Router>
          <Mynavbar />
          <Routes>
            <Route exact="true" path="/react-ecomm-frontend" element={<Home />} />
            <Route exact="true" path="/cart" element={<Cart />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;