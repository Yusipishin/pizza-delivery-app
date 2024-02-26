import styles from "./style.module.scss";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import closeGreyIc from "../../../assets/img/icons/close-grey-ic.svg";
import sauces from "../../../assets/img/optional/sauces.png";
import napkins from "../../../assets/img/optional/napkins.png";
import PromocodeForm from "../../UI/PromocodeForm/PromocodeForm";
// import emptyСart from './empty-cart.png'

import Modal from "../../UI/Modal/Modal";

interface Props {
  panelActive: boolean;
  setPanelActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartPanel = memo(({ panelActive, setPanelActive }: Props) => {
  const pizzas = [
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: "С креветками и трюфелями",
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: "С креветками и трюфелями",
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: "С креветками и трюфелями",
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: "С креветками и трюфелями",
      width: 30,
      weight: 350,
      sale: 600,
    },
  ];
  return (
    <Modal active={panelActive} setActive={setPanelActive} type="SidePanel">
      <div className="flex flex-col items-center">
        <h2 className="text-yel text-4xl font-extrabold mb-4">Корзина</h2>
        {/* <div className="flex flex-col items-center text-center">
          <img src={emptyСart} alt="" />
          <span className="font-medium text-2xl my-3">Ой, пусто!</span>
          <p className="font-normal text-lg">Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар.</p>
        </div> */}
        <span className="font-medium text-2xl">4 товара на 2400 ₽</span>
        <div className="flex flex-col gap-4 my-8">
          {pizzas.map((item, i) => {
            return (
              <div className={styles.pizzas} key={i}>
                <img src={item.img} className="max-w-[120px]" />
                <div className="flex flex-col">
                  <h3 className="text-xl">{item.name}</h3>
                  <span className={styles.pizzaDescription}>
                    30 см, традиционное тесто, 350 г
                    {/* {currentWidth} см, 
                    {selectedDough === "thin" ? "тонкое" : "традиционное"} тесто,{" "}
                    {currentWeight} г */}
                  </span>
                  <div className="wrapper">
                    <div className="wrapper gap-4">
                      <div className="wrapper gap-4 bg-whBtn rounded-lg  py-1">
                        <button className="px-3">+</button>
                        <div>1</div>
                        <button className="px-3">-</button>
                      </div>
                      <button className="font-semibold">Изменить</button>
                    </div>
                    <span className="font-bold text-lg text-yel">600 ₽</span>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4"
                  aria-label="Удалить пиццу"
                >
                  <img src={closeGreyIc} />
                </button>
              </div>
            );
          })}
        </div>
        <span className="font-medium text-2xl">Добавить к заказу?</span>
        <ul className={styles.listScroller}>
          <li className="flex">
            <button className={styles.sauces}>
              <img src={sauces} alt="Соусы" />
              <h4 className="text-[13px] font-normal">Соусы</h4>
            </button>
          </li>
          <li className="flex">
            <button className={styles.optional}>
              <img src={napkins} alt="Салфетки" />
              <div className="flex flex-col justify-between gap-1">
                <h4 className="text-sm font-normal">
                  Молочный коктель с аро...
                </h4>
                <span className="text-base block font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
          <li className="flex">
            <button className={styles.optional}>
              <img src={napkins} alt="Салфетки" />
              <div className="flex flex-col justify-between gap-1">
                <h4 className="text-sm font-normal">
                  Молочный коктель с приятным аро...
                </h4>
                <span className="text-base block font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
          <li className="flex">
            <button className={styles.optional}>
              <img src={napkins} alt="Салфетки" />
              <div className="flex flex-col justify-between gap-1">
                <h4 className="text-sm font-normal">
                  Молочный коктель с приятным аро...
                </h4>
                <span className="text-base block font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
        </ul>
        <PromocodeForm/>
        <p className="my-6 text-2xl font-semibold">
          Сумма заказа: <span className="text-yel text-3xl">2400 ₽</span>
        </p>
        <NavLink
          end
          to="/cart"
          onClick={() => setPanelActive(false)}
          className="w-full bg-yel text-2xl font-medium py-4 rounded-xl text-center"
          >
          Оформить заказ {">"}
        </NavLink>
      </div>
    </Modal>
  );
});

export default CartPanel;