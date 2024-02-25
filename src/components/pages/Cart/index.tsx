import { Route, Routes } from "react-router-dom";

import CartMain from "./CartMain/CartMain";
import CartOrder from "./CartOrder/CartOrder";
import CartAccept from "./CartAccept/CartAccept";

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
