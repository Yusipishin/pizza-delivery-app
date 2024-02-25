import logo from "../../assets/img/logo.png";
import styles from "./style.module.scss";

import { Link } from "react-router-dom";
import { memo } from "react";

const CartHeader = memo(() => {
  return (
    <header className={styles.headerFixed}>
      <div className="container">
        <div>
          <div className="mb-3 mt-4">
            <div className="wrapper">
              <Link to="/" className="logo">
                <img src={logo} alt="Логотип Fibo Pasta Bar" />
              </Link>
              <div className="wrapper gap-20">
                <div className={styles.wrapperPhase}>
                  <div className={"bg-yel " + styles.phaseNum}>
                    1
                  </div>
                  <span className={styles.phaseName + " text-[rgba(14_12_13_0.8)]"}>Корзина</span>
                </div>
                <div className={styles.wrapperPhase}>
                  <div className={styles.phaseNum + " text-yel border-2 border-yel " + styles.sticks}>
                    2
                  </div>
                  <span className={styles.phaseName + " text-[rgba(105_111_122_0.95)]"}>Оформление заказа</span>
                </div>
                <div className={styles.wrapperPhase}>
                  <div className={"text-yel border-2 border-yel " + styles.phaseNum}>
                    3
                  </div>
                  <span className={styles.phaseName + " text-[rgba(105_111_122_0.95)]"}>Заказ принят</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default CartHeader;