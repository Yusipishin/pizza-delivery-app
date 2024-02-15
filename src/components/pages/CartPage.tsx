import { memo, useEffect } from "react";

const CartPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="container">
        <h1>Корзина</h1>
      </div>
    </section>
  );
});

export default CartPage;
