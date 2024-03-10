import { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import closeGreyIc from "../../../../assets/img/icons/close-grey-ic.svg";
import napkins from "../../../../assets/img/optional/napkins.png";
import PromocodeForm from "../../../UI/PromocodeForm/PromocodeForm";

import store from "../../../../store/store";
import * as actions from "../../../../actions/actions";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./style.module.css";
import ItemSkeleton from "../../../UI/Skeletons/ItemSkeleton";

const CartMain = memo(() => {
  const cart = useSelector((state) => state.cart);
  const { dispatch } = store;
  const { removeItem } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = () => {
    return cart.reduce((sum, item) => {
      return sum + item.sale;
    }, 0);
  };

  const sliders = [
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
    {
      src: `${napkins}`,
    },
  ];

  const saucesList = [
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Ранч",
    },
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Малиновое варенье",
    },
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Ранч",
    },
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Ранч",
    },
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Ранч",
    },
    {
      url: "https://dodopizza-a.akamaihd.net/static/Img/Products/d5e1787652a445b8ab4a57e912e79a3d_1875x1875.webp",
      name: "Ранч",
    },
  ];

  return (
    <section className="mt-8 cart-main">
      <div className="mx-auto my-0 px-4 py-0 max-w-[830px]">
        <h1 className="font-bold text-4xl text-yel">Корзина</h1>
        <div className="my-10">
          {cart.map((item) => {
            return (
              <div className={styles.pizzas} key={item.id}>
                <img src={item.img} className="max-w-[80px]" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-[19px] mb-4">{item.name}</h3>
                  <span className={styles.pizzaDescription}>
                    {item.composition}. 
                    {item.weight} г
                  </span>
                </div>
                <div className="wrapper gap-8">
                  <span className="font-bold text-2xl text-yel">{item.sale} ₽</span>
                  <div className="wrapper gap-4">
                    <div className="wrapper gap-4 bg-whBtn rounded-lg  py-2">
                      <button className="px-3">+</button>
                      <div>1</div>
                      <button className="px-3">-</button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-[28px]"
                  aria-label="Удалить пиццу"
                >
                  <img src={closeGreyIc} />
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <span className="font-bold text-2xl text-yel block mb-9">
            Добавить к заказу?
          </span>
          <Swiper
            speed={700}
            initialSlide={0}
            slidesPerView={3}
            spaceBetween={15}
            modules={[Navigation]}
            navigation={{
              nextEl: ".cart-main__slider-next",
              prevEl: ".cart-main__slider-prev",
            }}
          >
            <button
              className="cart-main__slider-prev"
              aria-label="Показать предыдущий слайд"
            />
            <button
              className="cart-main__slider-next"
              aria-label="Показать следующий слайд"
            />
            {sliders.map((item, i) => (
              <SwiperSlide key={i}>
                <button className={styles.optional}>
                  <img src={item.src} alt="Салфетки" />
                  <div className="flex flex-col justify-between gap-1">
                    <h4 className="text-sm">Молочный коктель с аро...</h4>
                    <span className="block text-pink">от 120 ₽</span>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-11">
          <span className="font-bold text-2xl text-yel block mb-9">
            Соусы к бортикам и закускам
          </span>
          <ul className="flex justify-between gap-6">
            {saucesList.map((item, i) => (
              <li className="flex grow flex-1" key={i}>
                <button className={styles.sauces}>
                  <img
                    src={item.url}
                    alt="Соусы"
                    className="max-w-[65px] mb-3"
                  />
                  <div className="flex flex-col justify-between h-full">
                    <h4 className="text-sm max-w-[85px] mb-2">{item.name}</h4>
                    <span className="text-pink">от 120 ₽</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span className={styles.promoTxt}>Промокод</span>
        <div className="flex flex-col gap-14">
          <div className="wrapper">
            <PromocodeForm />
            <p className="text-2xl font-semibold">
              Сумма заказа: <span className={styles.orderPrice}>{totalPrice()} ₽</span>
            </p>
          </div>
          <div className="wrapper">
            <NavLink end to="/" className={styles.backMenu}>
              <div className={styles.arrowBack}></div>
              <p>Вернуться в магазин</p>
            </NavLink>
            <NavLink
              end
              to="/cart/order"
              className={styles.checkout}
            >
              Оформить заказ
              <div className={styles.arrowNext}></div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CartMain;
