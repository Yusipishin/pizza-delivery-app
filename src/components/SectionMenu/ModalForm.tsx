import addIngredients from "../../static/addIngredients";
import Modal from "../UI/modal/Modal";
import { Pizza } from "../../intefaces/interfaces";
import styles from "./style.module.scss";
import { useState, memo } from "react";

interface Props {
  modalActive: boolean;
  setModalActive: (arg: boolean) => void;
  selectedPizza: Pizza | undefined;
  currentWeight: number;
  setCurrentSale: (arg: number) => void;
  setCurrentWeight: (arg: number) => void;
  currentSale: number;
}

const ModalForm = memo(({
  modalActive,
  setModalActive,
  selectedPizza,
  currentWeight,
  setCurrentSale,
  setCurrentWeight,
  currentSale,
}: Props) => {

  const [selectedSize, setSelectedSize] = useState<string>("Средняя");
  const [selectedDough, setSelectedDough] = useState<string>("Традиционное");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const [currentWidth, setCurrentWidth] = useState<number>(30);
  const [currentSaleIngr, setCurrentSaleIngr] = useState<number>(0);

  const [differenceOfSale, setDifferenceOfSale] = useState<number>(0);

  const handleClickOption = (
    event: React.MouseEvent<HTMLElement>,
    updateFunction: (value: string) => void
  ) => {
    const elem = event.target as HTMLElement;
    if (elem.tagName === "BUTTON") {
      const name = elem.textContent as string;
      const pizzaWeight = (selectedPizza as Pizza).weight;
      const pizzaSale = (selectedPizza as Pizza).sale;
      updateFunction(name as string);
      switch (name) {
        case "Маленькая":
          setDifferenceOfSale(-10);
          setCurrentWidth(25);
          setCurrentSale(pizzaSale.small + currentSaleIngr);
          if (selectedDough === "Традиционное") {
            setCurrentWeight(pizzaWeight.traditional.small);
          }
          break;
        case "Средняя":
          setDifferenceOfSale(0);
          setCurrentWidth(30);
          setCurrentSale(pizzaSale.average + currentSaleIngr);
          if (selectedDough === "Традиционное") {
            setCurrentWeight(pizzaWeight.traditional.average);
          } else if (selectedDough === "Тонкое") {
            setCurrentWeight(pizzaWeight.thin.average);
          }
          break;
        case "Большая":
          setDifferenceOfSale(20);
          setCurrentWidth(35);
          setCurrentSale(pizzaSale.big + currentSaleIngr);
          if (selectedDough === "Традиционное") {
            setCurrentWeight(pizzaWeight.traditional.big);
          } else if (selectedDough === "Тонкое") {
            setCurrentWeight(pizzaWeight.thin.big);
          }
          break;
        case "Традиционное":
          if (currentWidth === 25) {
            setCurrentWeight(pizzaWeight.traditional.small);
          } else if (currentWidth === 30) {
            setCurrentWeight(pizzaWeight.traditional.average);
          } else if (currentWidth === 35) {
            setCurrentWeight(pizzaWeight.traditional.big);
          }
          break;
        case "Тонкое":
          if (currentWidth === 30) {
            setCurrentWeight(pizzaWeight.thin.average);
          } else if (currentWidth === 35) {
            setCurrentWeight(pizzaWeight.thin.big);
          }
          break;
      }
    }
  };

  const handleClickIngr = (event: React.MouseEvent<HTMLElement>) => {
    const name = (event.target as HTMLElement).getAttribute("data-name");
    const sale = Number(
      (event.target as HTMLElement).getAttribute("data-sale")
    );
    if (name && sale) {
      if (selectedIngredients.indexOf(name) === -1) {
        setSelectedIngredients([...selectedIngredients, name]);
        setCurrentSaleIngr(currentSaleIngr + sale);
        setCurrentSale(currentSale + sale);
      } else {
        setSelectedIngredients(
          selectedIngredients.filter((item: string) => item !== name)
        );
        setCurrentSaleIngr(currentSaleIngr - sale);
        setCurrentSale(currentSale - sale);
      }
    }
  };

  const styleSmallBtn = () => {
    if (selectedSize === "Маленькая") {
      return "bg-yel text-bl";
    } else if (selectedDough === "Тонкое") {
      return styles.btnBlock;
    } else {
      return "bg-whBtn text-gr";
    }
  };

  const styleThinBtn = () => {
    if (selectedSize === "Маленькая") {
      return styles.btnBlock;
    } else if (selectedDough === "Тонкое") {
      return "bg-yel text-bl";
    } else {
      return "bg-whBtn text-gr";
    }
  };

  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <div className="wrapper">
        <img
          className="mx-16"
          src={selectedPizza?.img.url}
          alt={selectedPizza?.name}
        />
        <div className="[&_button]:rounded-lg">
          <div className="scroll__off overflow-y-scroll">
            <div>
              <span className="block text-[20px] font-extrabold">
                {selectedPizza?.name}
              </span>
              <span className={styles.pizzaDescription}>
                {currentWidth} см, {selectedDough.toLowerCase()} тесто,{" "}
                {currentWeight} г
              </span>
              <p className="text-[#A4A2A3] text-[12px] leading-5 mb-5">
                {selectedPizza?.composition.basic.map(
                  (item: string, i: number) => {
                    return (
                      <span key={i}>
                        {i === 0 ? item[0].toUpperCase() + item.slice(1) : item}
                        ,{" "}
                      </span>
                    );
                  }
                )}
                {selectedPizza?.composition.optional.map(
                  (item: string, i: number) => {
                    return (
                      <span key={i}>
                        <span className={styles.optionalIngr}>{item}</span>
                        <button aria-label="Убрать ингредиент">
                          <svg
                            className="inline ml-1"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="6.6"
                              stroke="#737272"
                              strokeWidth="0.8"
                            ></circle>
                            <path
                              d="M5 5L9 9"
                              stroke="#737272"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M9 5L5 9"
                              stroke="#737272"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                        {i !== selectedPizza?.composition.optional.length - 1
                          ? ", "
                          : null}
                      </span>
                    );
                  }
                )}
              </p>
              <div className={styles.btnsWrapper}>
                <div
                  onClick={(event) => handleClickOption(event, setSelectedSize)}
                  className={styles.btnsSizeWrap}
                >
                  <button
                    disabled={selectedDough === "Тонкое"}
                    className={styleSmallBtn()}
                  >
                    Маленькая
                  </button>
                  <button
                    className={
                      selectedSize === "Средняя"
                        ? "bg-yel text-bl"
                        : "bg-whBtn text-gr"
                    }
                  >
                    Средняя
                  </button>
                  <button
                    className={
                      selectedSize === "Большая"
                        ? "bg-yel text-bl"
                        : "bg-whBtn text-gr"
                    }
                  >
                    Большая
                  </button>
                </div>

                <div
                  onClick={(event) =>
                    handleClickOption(event, setSelectedDough)
                  }
                  className={styles.btnsDoughWrap}
                >
                  <button
                    className={
                      selectedDough === "Традиционное"
                        ? "bg-yel text-bl"
                        : "bg-whBtn text-gr"
                    }
                  >
                    Традиционное
                  </button>
                  <button
                    disabled={currentWidth === 25}
                    className={styleThinBtn()}
                  >
                    Тонкое
                  </button>
                </div>
              </div>
            </div>
            <div
              onClick={(event) => handleClickIngr(event)}
              className={styles.ingrWrap}
            >
              {addIngredients.map((item, i) => (
                <button
                  key={i}
                  data-name={item.name}
                  data-sale={item.sale}
                  className={`${styles.ingrBtn} ${
                    selectedIngredients.indexOf(item.name) === -1
                      ? `border-[#E2E2E9]`
                      : `border-[#fff562]`
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 mb-1"
                      src={item.path}
                      alt={item.name}
                    />
                    <span className={styles.ingrName}>{item.name}</span>
                  </div>
                  <span className={styles.ingrSale}>
                    от {item.sale + differenceOfSale} ₽
                  </span>
                </button>
              ))}
              <div className="h-8 w-1"></div>
            </div>
          </div>
          <button className="w-full bg-yel py-4">
            Добавить в корзину <span>{currentSale}</span> ₽
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default ModalForm;
