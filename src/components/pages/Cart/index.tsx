import { Route, Routes } from "react-router-dom";
import {lazy} from "react";

const CartMain = lazy(() => import('./CartMain/CartMain'));
const CartOrder = lazy(() => import('./CartOrder/CartOrder'));
const CartAccept = lazy(() => import('./CartAccept/CartAccept'));

const Cart = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartMain />} />
        <Route path="/order" element={<CartOrder />} />
        <Route path="/accept" element={<CartAccept />} />
      </Routes>
    </>
  );
};

export default Cart;
