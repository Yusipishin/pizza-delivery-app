import styles from "./style.module.scss";
import { memo } from "react";
import closeGreyIc from '../../../assets/img/icons/close-grey-ic.svg'
import sauces from '../../../assets/img/optional/sauces.png'
import napkins from '../../../assets/img/optional/napkins.png'

import Modal from "../../UI/Modal/Modal";

interface Props {
  modalActive: boolean,
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const CartPanel = memo(({modalActive, setModalActive}: Props) => {
  const pizzas = [
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: 'С креветками и трюфелями',
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: 'С креветками и трюфелями',
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: 'С креветками и трюфелями',
      width: 30,
      weight: 350,
      sale: 600,
    },
    {
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp",
      name: 'С креветками и трюфелями',
      width: 30,
      weight: 350,
      sale: 600,
    },
  ]
  return (
    <Modal active={modalActive} setActive={setModalActive} type="SidePanel">
      <div className="flex flex-col items-center">
        <h2 className="text-yel text-4xl font-extrabold mb-4">Корзина</h2>
        <span className="font-medium text-2xl">4 товара на 2400 ₽</span>
        <div className="flex flex-col gap-4 my-8">
          {pizzas.map((item, i) => {
            return (
              <div
                className={styles.ingrBtn + " relative gap-2 min-w-[500px]"}
                key={i}
              >
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
                  aria-label="Удалить ингредиент"
                >
                  <img src={closeGreyIc} />
                </button>
              </div>
            );
          })}
        </div>
        <span className="font-medium text-2xl">Добавить к заказу?</span>
        <ul className={styles.listScroller}>
          <li>
            <button className={styles.ingrBtn + " flex-col"}>
              <img src={sauces} alt="" />
              <h4 className="text-[13px] font-normal">Соусы</h4>
            </button>
          </li>
          <li>
            <button className={"wrapper gap-2 min-w-[230px] " + styles.ingrBtn}>
              <img src={napkins} alt="" />
              <div>
                <h4 className="text-[13px] font-normal">
                  Молочный коктель с приятным аро...
                </h4>
                <span className="text-[14px] font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
          <li>
            <button className={"wrapper gap-2 min-w-[230px] " + styles.ingrBtn}>
              <img src={napkins} alt="" />
              <div>
                <h4 className="text-[13px] font-normal">
                  Молочный коктель с приятным аро...
                </h4>
                <span className="text-[14px] font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
          <li>
            <button className={"wrapper gap-2 min-w-[230px] " + styles.ingrBtn}>
              <img src={napkins} alt="" />
              <div>
                <h4 className="text-[13px] font-normal">
                  Молочный коктель с приятным аро...
                </h4>
                <span className="text-[14px] font-medium">от 120 ₽</span>
              </div>
            </button>
          </li>
        </ul>
        <form className={styles.ingrBtn + " p-0"}>
          <input
            className="px-6"
            type="text"
            placeholder="Введите промокод"
            name="promocode"
          />
          <button className="bg-yel py-2 px-7">Применить</button>
        </form>
        <p className="my-6 text-2xl font-semibold">
          Сумма заказа: <span className="text-yel text-3xl">2400 ₽</span>
        </p>
        <button className="w-full bg-yel text-2xl font-medium py-4 rounded-xl">Оформить заказ {">"}</button>
      </div>
    </Modal>
  );
});

export default CartPanel;
