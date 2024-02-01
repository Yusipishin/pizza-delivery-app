import { useHttp } from "../../hooks/http.hook";
import ErrorMessage from "../UI/ErrorMessage/MessageError";
import LoadingMessage from "../UI/LoadingMessage/MessageLoading";
import styles from "./style.module.scss";

import ModalForm from "./ModalForm";

import { useEffect, useState, memo } from "react";

import { Pizza } from "../../intefaces/interfaces";

const SectionMenu = memo(() => {
  const [menu, setMenu] = useState<Pizza[]>([]);
  const [menuLoadingStatus, setMenuLoadingStatus] = useState<string>("");
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const [menuEnded, setMenuEnded] = useState(false);

  const [selectedPizza, setSelectedPizza] = useState<Pizza>();

  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [currentSale, setCurrentSale] = useState<number>(0);

  const { request } = useHttp();

  const onRequest = () => {
    setMenuLoadingStatus("loading");
    request("http://localhost:3001/menu")
      .then((data: Pizza[]) => {
        const newItems = data.slice(offset, offset + 8);
        setMenuEnded(newItems.length < 8 ? true : false);
        setOffset(offset + newItems.length);
        setMenu((state) => [...state, ...newItems]);
        setMenuLoadingStatus("idle");
      })
      .catch(() => setMenuLoadingStatus("error"));
  };

  useEffect(() => onRequest, []);

  const openModal = (event: React.MouseEvent<HTMLElement>) => {
    const elem = event.target as HTMLElement;
    if (elem.tagName === "BUTTON") {
      const pizzaId =
        elem.parentElement?.parentElement?.getAttribute("data-pizza-id");
      const pizza = menu.find((item) => item.id === pizzaId) as Pizza;
      setSelectedPizza(pizza);
      setCurrentWeight(pizza.weight.traditional.average);
      setCurrentSale(pizza.sale.average);
      setModalActive(true);
    }
  };

  const checkLoading = () => {
    if (menuLoadingStatus === "loading") {
      return <LoadingMessage />;
    } else if (menuLoadingStatus === "error") {
      return <ErrorMessage />;
    }
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

  const btnStyle =
    menuEnded ||
    menuLoadingStatus === "loading" ||
    menuLoadingStatus === "error"
      ? "none"
      : "block";

  const modalFormProps = {
    modalActive,
    setModalActive,
    selectedPizza,
    currentWeight,
    setCurrentSale,
    setCurrentWeight,
    currentSale,
  };

  return (
    <section className="menu">
      <div className="container">
        <h2 className={styles.title}>Пицца</h2>
        {checkLoading()}
        <ul className={styles.list} onClick={openModal}>
          {renderItems()}
        </ul>
        <button
          onClick={() => onRequest()}
          aria-label="Посмотреть ещё варианты пицц"
          style={{ display: btnStyle }}
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
