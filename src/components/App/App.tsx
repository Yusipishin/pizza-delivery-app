import {lazy, useRef, Suspense} from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import CartHeader from "../CartHeader/CartHeader";
import AppFooter from "../AppFooter/AppFooter";

import "../../styles/style.css";

const Page404 = lazy(() => import('../pages/404.tsx'));
const ContactPage = lazy(() => import('../pages/ContactPage.tsx'));
const MainPage = lazy(() => import('../pages/MainPage.tsx'));
const ActionsPage = lazy(() => import('../pages/ActionsPage.tsx'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage.tsx'));
const Cart = lazy(() => import('../pages/Cart'));

import {Loader} from "../UI/Loader/Loader.tsx";

const App = () => {
  const mainRef = useRef(null);
  const isCart = useLocation().pathname.startsWith('/cart')
  return (
    <>
      {isCart ? <CartHeader/> : <AppHeader mainRef={mainRef} />} 
      <main ref={mainRef}>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart/*" element={<Cart />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
      <AppFooter />
    </>
  );
};

export default App;
