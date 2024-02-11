import { memo, useEffect } from "react";

const CartPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="container">
        
      </div>
    </section>
  );
});

export default CartPage;
