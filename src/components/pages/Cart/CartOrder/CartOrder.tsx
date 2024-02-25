import { memo, useEffect } from "react";

import styles from './style.module.scss'

const CartOrder = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="container">
        <h1>Оформление заказа</h1>
      </div>
    </section>
  );
});

export default CartOrder;
