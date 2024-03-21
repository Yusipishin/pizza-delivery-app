import {useHttp} from "../../../hooks/http.hook";
import ItemSkeleton from "../../UI/Skeletons/ItemSkeleton";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

import styles from "./style.module.css";

import ModalForm from "../ModalForm/ModalForm";

import {memo, useEffect, useState} from "react";

import {Dough, LoadingStatus, Pizza, Size} from "../../../interfaces/interfaces";

const SectionPizzas = memo(() => {
  const [menu, setMenu] = useState<Pizza[]>([]);
  const [menuLoadingStatus, setMenuLoadingStatus] = useState<LoadingStatus>(LoadingStatus.IDLE);
  const [modalActive, setModalActive] = useState(false);
  const [offset, setOffset] = useState(8);
  const [menuEnded, setMenuEnded] = useState(false);

  const [selectedPizza, setSelectedPizza] = useState<Pizza | undefined>();
  const [selectedSize, setSelectedSize] = useState<Size>(Size.AVERAGE);
  const [selectedDough, setSelectedDough] = useState<Dough>(Dough.TRADITIONAL);

  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [currentSale, setCurrentSale] = useState<number>(0);

  const { request } = useHttp();

  const onRequest = () => {
    setMenuLoadingStatus(LoadingStatus.LOADING);
    request(
      `https://db4cff85a63e04f3.mokky.dev/pizzas?page=${offset / 8}&limit=8`
    )
      .then((data) => {
        const newItems: Pizza[] = data.items;
        setMenuEnded(newItems.length < 8);
        setOffset((offset) => offset + newItems.length);
        setMenu((state) => [...state, ...newItems]);
        setMenuLoadingStatus(LoadingStatus.IDLE);
      })
      .catch(() => setMenuLoadingStatus(LoadingStatus.ERROR));
  };

  useEffect(() => onRequest, []);

  const checkLoading = () => {
    if (menuLoadingStatus === "loading") {
      return [...Array(4)].map((_item: undefined, i) => {
        return <ItemSkeleton key={i} />;
      });
    } else if (menuLoadingStatus === "error") {
      return <ErrorMessage />;
    }
  };

  const openModal = async (event: React.MouseEvent<HTMLElement>) => {
    const elem = event.target as HTMLElement;
    if (elem.tagName === "BUTTON") {
      const pizzaId =
        elem.parentElement?.parentElement?.getAttribute("data-pizza-id");
      const pizza = await request(
        `https://db4cff85a63e04f3.mokky.dev/pizzas/${pizzaId}`
      );
      setCurrentWeight(
        pizza.weight[selectedDough][selectedSize]
      );
      setCurrentSale(pizza.sale[selectedSize]);
      setModalActive(true);
      setSelectedPizza(pizza);
    }
  };

  const modalFormProps = {
    modalActive,
    setModalActive,
    currentWeight,
    setCurrentWeight,
    currentSale,
    setCurrentSale,
    selectedSize,
    setSelectedSize,
    selectedDough,
    setSelectedDough,
    selectedPizza,
    setSelectedPizza,
  };

  const renderItems = () => {
    return menu.map((item: Pizza) => {
      const composition = [
        ...item.composition.basic,
        ...item.composition.optional,
      ].join(", ");
      return (
        <li className="max-w-[255px] mb-7 flex" key={item.id}>
          <article
            data-pizza-id={item.id}
            className="flex flex-col justify-between"
          >
            <div>
              <img className="mb-3" src={item.img.url} alt={item.name} />
              <h3 className={styles.subtitle}>{item.name}</h3>
              <p className={styles.composition}>
                {composition[0].toUpperCase() + composition.slice(1)}
              </p>
            </div>
            <div className="wrapper">
              <span className={styles.sale}>от {item.sale.small} ₽</span>
              <button
                aria-label="Добавить в корзину"
                className={styles.btnCart}
              >
                В корзину
              </button>
            </div>
          </article>
        </li>
      );
    });
  };

  return (
      <section className="py-14">
        <div className="container">
          <h2 className={"menu-title relative " + styles.title} id="menu-pizza">
            Пицца
          </h2>
          <ul className={styles.list} onClick={openModal}>
            {renderItems()}
            {checkLoading()}
          </ul>
          <button
            onClick={() => onRequest()}
            aria-label="Посмотреть ещё варианты пицц"
            style={{
              display:
                menuEnded || menuLoadingStatus !== LoadingStatus.IDLE ? "none" : "block",
            }}
            className={styles.btnLoad}
          >
            Посмотреть ещё
          </button>
        </div>
        <ModalForm {...modalFormProps} />
      </section>
  );
});

export default SectionPizzas;