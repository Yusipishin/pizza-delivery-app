import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

import "../../styles/style.scss";
import { MainPage, Page404, ContactPage, ActionsPage, CartPage } from "../pages";

const App = () => {
  const mainRef = useRef(null);
  return (
    <>
      <AppHeader mainRef={mainRef} />
      <main ref={mainRef}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
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
