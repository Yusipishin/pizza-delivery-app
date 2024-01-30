import addIngredients from "../../static/addIngredients";
import Modal from "../UI/modal/Modal";
import { Pizza } from "../../intefaces/interfaces";
import styles from "./style.module.scss";

interface Props {
  modalActive: boolean;
  setModalActive: (arg: boolean) => void;
  selectedPizza: Pizza | undefined;
  currentWidth: number;
  currentWeight: number;
  selectedDough: string;
  setDifferenceOfSale: (arg: number) => void;
  setCurrentWidth: (arg: number) => void;
  currentSaleIngr: number;
  setCurrentSale: (arg: number) => void;
  setCurrentWeight: (arg: number) => void;
  selectedIngredients: string[];
  setSelectedIngredients: (arg: string[]) => void;
  setCurrentSaleIngr: (arg: number) => void;
  currentSale: number;
  selectedSize: string;
  setSelectedSize: (arg: string) => void;
  setSelectedDough: (arg: string) => void;
  differenceOfSale: number;
}

const ModalForm = ({
  modalActive,
  setModalActive,
  selectedPizza,
  currentWidth,
  currentWeight,
  selectedDough,
  setDifferenceOfSale,
  setCurrentWidth,
  currentSaleIngr,
  setCurrentSale,
  setCurrentWeight,
  selectedIngredients,
  setSelectedIngredients,
  setCurrentSaleIngr,
  currentSale,
  selectedSize,
  differenceOfSale,
  setSelectedDough,
  setSelectedSize,
}: Props) => {
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
      return "bg-[#F7D22D] text-[#231F20]";
    } else if (selectedDough === "Тонкое") {
      return styles.btnBlock;
    } else {
      return "bg-[#F3F3F7] text-[#828792]";
    }
  };

  const styleThinBtn = () => {
    if (selectedSize === "Маленькая") {
      return styles.btnBlock;
    } else if (selectedDough === "Тонкое") {
      return "bg-[#F7D22D] text-[#231F20]";
    } else {
      return "bg-[#F3F3F7] text-[#828792]";
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
                        ? "bg-[#F7D22D] text-[#231F20]"
                        : "bg-[#F3F3F7] text-[#828792]"
                    }
                  >
                    Средняя
                  </button>
                  <button
                    className={
                      selectedSize === "Большая"
                        ? "bg-[#F7D22D] text-[#231F20]"
                        : "bg-[#F3F3F7] text-[#828792]"
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
                        ? "bg-[#F7D22D] text-[#231F20]"
                        : "bg-[#F3F3F7] text-[#828792]"
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
                  data-name={item.name}
                  data-sale={item.sale}
                  className={`${styles.ingrBtn} ${
                    selectedIngredients.indexOf(item.name) === -1
                      ? `border-[#E2E2E9]`
                      : `border-[#fff562]`
                  }`}
                  key={i}
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 mb-1"
                      src={item.path}
                      alt={item.name}
                    />
                    <span className={styles.ingrName}>
                      {item.name}
                    </span>
                  </div>
                  <span className={styles.ingrSale}>
                    от {item.sale + differenceOfSale} ₽
                  </span>
                </button>
              ))}
              <div className="h-8 w-1"></div>
            </div>
          </div>
          <button
            className="w-full bg-[#F7D22D] py-4"
            style={{ boxShadow: "0 -37px 30px 10px #fff" }}
          >
            Добавить в корзину <span>{currentSale}</span> ₽
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForm;
