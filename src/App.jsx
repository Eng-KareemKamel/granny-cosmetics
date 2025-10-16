import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import ProductsList from "./Pages/ProductsList";
import Overview from "./Pages/Overview";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="overview/:id" element={<Overview />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
