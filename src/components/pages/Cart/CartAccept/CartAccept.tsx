import { memo, useEffect } from "react";

const CartAccept = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="container">
        <h1>Заказ принят!</h1>
      </div>
    </section>
  );
});

export default CartAccept;
