import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import CartHeader from "../CartHeader/CartHeader";
import AppFooter from "../AppFooter/AppFooter";

import "../../styles/style.scss";
import { MainPage, Page404, ContactPage, ActionsPage } from "../pages";
import Cart from "../pages/Cart";

const App = () => {
  const mainRef = useRef(null);
  const isCart = useLocation().pathname.startsWith('/cart')
  return (
    <>
      {isCart ? <CartHeader/> : <AppHeader mainRef={mainRef} />} 
      <main ref={mainRef}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/actions" element={<ActionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  );
};

export default App;
