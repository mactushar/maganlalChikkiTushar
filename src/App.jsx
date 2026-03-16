import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import Shop from "./component/pages/Shop";
import SingleDetailProduct from "./component/SingleDetailProduct";
import Fav from "./component/Fav";
import Cart from "./component/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="fav" element={<Fav />} />
          <Route path="product/:catid/:id" element={<SingleDetailProduct />} />

          <Route />
        </Route>
      </Routes>
    </>
  );
};

export default App;
