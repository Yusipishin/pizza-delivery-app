import { useHttp } from "../../../hooks/http.hook";
import ItemSkeleton from "../../UI/Skeletons/ItemSkeleton";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

import styles from "./style.module.scss";

import ModalForm from "./ModalForm";

import { useEffect, useState, memo } from "react";

import { Pizza, PizzaDough, PizzaSize } from "../../../interfaces/interfaces";

const SectionMenu = memo(() => {
  const [menu, setMenu] = useState<Pizza[]>([]);
  const [menuLoadingStatus, setMenuLoadingStatus] = useState<string>("idle");
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const [menuEnded, setMenuEnded] = useState(false);

  const [selectedPizza, setSelectedPizza] = useState<Pizza | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string>("average");
  const [selectedDough, setSelectedDough] = useState<string>("traditional");

  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [currentSale, setCurrentSale] = useState<number>(0);

  const { request } = useHttp();

  const onRequest = () => {
    setMenuLoadingStatus("loading");
    request("http://localhost:3001/menu")
      .then((data: Pizza[]) => {
        const newItems = data.slice(offset, offset + 8);
        setMenuEnded(newItems.length < 8 ? true : false);
        setOffset((offset) => offset + newItems.length);
        setMenu((state) => [...state, ...newItems]);
        setMenuLoadingStatus("idle");
      })
      .catch(() => setMenuLoadingStatus("error"));
  }

  useEffect(() => onRequest, []);

  const checkLoading = () => {
    if (menuLoadingStatus === "loading") {
      return [...Array(4)].map((item, i) => {return <ItemSkeleton key={i}/>})
    } else if (menuLoadingStatus === "error") {
      return <ErrorMessage />;
    }
  };

  const openModal = (event: React.MouseEvent<HTMLElement>) => {
    const elem = event.target as HTMLElement;
    if (elem.tagName === "BUTTON") {
      const pizzaId = elem.parentElement?.parentElement?.getAttribute("data-pizza-id");
      const pizza = menu.find((item) => item.id === pizzaId) as Pizza;
      setCurrentWeight(pizza.weight[selectedDough as keyof PizzaDough][selectedSize as keyof PizzaSize]);
      setCurrentSale(pizza.sale[selectedSize as keyof PizzaSize]);
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
    setSelectedPizza
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
        <h2 className={styles.title} id="menu-pizza">Пицца</h2>
        <ul className={styles.list} onClick={openModal}>
          {renderItems()}
          {checkLoading()}
        </ul>
        <button
          onClick={() => onRequest()}
          aria-label="Посмотреть ещё варианты пицц"
          style={{ display: menuEnded || menuLoadingStatus !== "idle" ? "none" : "block" }}
          className={styles.btnLoad}
        >
          Посмотреть ещё
        </button>
      </div>
      <ModalForm {...modalFormProps} />
    </section>
  );
});

export default SectionMenu;