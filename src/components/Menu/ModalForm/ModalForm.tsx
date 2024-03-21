import addIngredients from "../../../static/addIngredients";
import Modal from "../../UI/Modal/Modal";
import styles from "./style.module.css";
import {Dispatch, memo, MouseEvent, SetStateAction, useEffect, useState} from "react";

import store from "../../../store/store";
import * as actions from "../../../actions/actions";
import {bindActionCreators} from "redux";

import {Dough, Pizza, Size, Sale, Weight, WeightTraditional, WeightThin} from "../../../interfaces/interfaces";

interface ModalFormProps {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
  currentWeight: number;
  setCurrentWeight: Dispatch<SetStateAction<number>>;
  currentSale: number;
  setCurrentSale: Dispatch<SetStateAction<number>>;
  selectedSize: Size;
  setSelectedSize: Dispatch<SetStateAction<Size>>;
  selectedDough: Dough;
  setSelectedDough: Dispatch<SetStateAction<Dough>>;
  selectedPizza: Pizza | undefined;
  setSelectedPizza: Dispatch<SetStateAction<Pizza | undefined>>;
}

const ModalForm = memo(({
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
    }: ModalFormProps) => {


    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    const [currentWidth, setCurrentWidth] = useState(30);
    const [currentSaleIngr, setCurrentSaleIngr] = useState(0);

    const [differenceOfSale, setDifferenceOfSale] = useState(0);

    const { dispatch } = store;
    const { addItem } = bindActionCreators(actions, dispatch);

    useEffect(() => {
      if (!modalActive) {
        setDifferenceOfSale(0);
        setCurrentSaleIngr(0);
        setCurrentWidth(30);
        setSelectedIngredients([]);
        setSelectedPizza(undefined);
        setSelectedSize(Size.AVERAGE);
        setSelectedDough(Dough.TRADITIONAL);
        setCurrentWeight(0);
        setCurrentSale(0);
      }
    }, [modalActive]);

    const changeOption = (
      newDifferenceOfSale: number,
      newCurrentWidth: number,
      name: string
    ) => {
      setDifferenceOfSale(newDifferenceOfSale);
      setCurrentWidth(newCurrentWidth);
      if (selectedPizza) {
        setCurrentSale((selectedPizza as Pizza).sale[name as keyof Sale] + currentSaleIngr);
        setCurrentWeight((selectedPizza as Pizza).weight[selectedDough as keyof Weight][name as keyof (WeightTraditional | WeightThin)]);
      }
    };

    const handleClickOption = (
      event: MouseEvent<HTMLElement>,
      updateFunction: typeof setSelectedSize | typeof setSelectedDough
    ) => {

      const elem = event.target as HTMLElement;
      if (elem.tagName === "BUTTON") {
        const name = elem.getAttribute("data-name");
        updateFunction === setSelectedSize ? setSelectedSize(name as Size) : setSelectedDough(name as Dough)
        const pizzaWeight = (selectedPizza as Pizza).weight;
        if (name === Size.SMALL) changeOption(-10, 25, name);
        else if (name === Size.AVERAGE) changeOption(0, 30, name);
        else if (name === Size.BIG) changeOption(20, 35, name);
        else if (name === Dough.TRADITIONAL) setCurrentWeight(pizzaWeight.traditional[selectedSize as keyof WeightTraditional]);
        else if (name === Dough.THIN) setCurrentWeight(pizzaWeight.thin[selectedSize as keyof WeightThin])}
    };

    const handleClickIngr = (event: React.MouseEvent<HTMLElement>) => {
      const elem = (event.target as HTMLElement).closest(".btn-ingr");
      if (elem) {
        const name = elem.getAttribute("data-name");
        const sale = Number(elem.getAttribute("data-sale"));
        if (name && sale) {
          const arrContain =
            selectedIngredients.indexOf(name) === -1;
          setSelectedIngredients((selectedIngredients) =>
            arrContain
              ? [...selectedIngredients, name]
              : selectedIngredients.filter((item) => item !== name)
          );
          setCurrentSaleIngr((currentSaleIngr) => currentSaleIngr + (arrContain ? sale : -sale));
          setCurrentSale((currentSale) => currentSale + (arrContain ? sale : -sale));
        }
      }
    };

    const getStyleBtn = (styleSmall: string, styleThin: string) => {
      if (selectedSize === Size.SMALL) {
        return styleSmall;
      } else if (selectedDough === Dough.THIN) {
        return styleThin;
      } else {
        return "bg-whBtn text-gr";
      }
    };

    const renderIngredients = () => {
      return addIngredients.map((item, i) => (
        <button
          key={i}
          data-name={item.name}
          data-sale={item.sale}
          className={`btn-ingr ${styles.ingrBtn} ${
            selectedIngredients.indexOf(item.name) === -1
              ? `border-[#E2E2E9]`
              : `border-[#fff562]`
          }`}
        >
          <span className="flex flex-col items-center">
            <img className="w-20 mb-1" src={item.path} alt={item.name} />
            <span className={styles.ingrName}>{item.name}</span>
          </span>
          <span className={styles.ingrSale}>
            от {item.sale + differenceOfSale} ₽
          </span>
        </button>
      ));
    };

    const onClickAddPizza = () => {
      if (selectedPizza) {
        addItem({
          id: selectedPizza.id,
          img: selectedPizza.img.url,
          name: selectedPizza.name,
          width: currentWidth,
          weight: currentWeight,
          sale: currentSale,
          dough: selectedDough,
          composition: selectedIngredients.join(', ')
        });
      }
      setModalActive(false);
    };

    return (
      <Modal active={modalActive} setActive={setModalActive} type="Modal">
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
                  {currentWidth} см,
                  {selectedDough === "thin"
                    ? "тонкое"
                    : "традиционное"} тесто, {currentWeight} г
                </span>
                <p className="text-[#A4A2A3] text-[12px] leading-5 mb-5">
                  {selectedPizza?.composition.basic.map(
                    (item: string, i: number) => {
                      return (
                        <span key={i}>
                          {i === 0
                            ? item[0].toUpperCase() + item.slice(1)
                            : item}
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
                    onClick={(event) =>
                      handleClickOption(event, setSelectedSize)
                    }
                    className={styles.btnsSizeWrap}
                  >
                    <button
                      data-name="small"
                      disabled={selectedDough === "thin"}
                      className={getStyleBtn(
                        "bg-yel text-bl",
                        styles.btnUnclick
                      )}
                    >
                      Маленькая
                    </button>
                    <button
                      data-name="average"
                      className={
                        selectedSize === "average"
                          ? "bg-yel text-bl"
                          : "bg-whBtn text-gr"
                      }
                    >
                      Средняя
                    </button>
                    <button
                      data-name="big"
                      className={
                        selectedSize === "big"
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
                      data-name="traditional"
                      className={
                        selectedDough === "traditional"
                          ? "bg-yel text-bl"
                          : "bg-whBtn text-gr"
                      }
                    >
                      Традиционное
                    </button>
                    <button
                      data-name="thin"
                      disabled={currentWidth === 25}
                      className={getStyleBtn(
                        styles.btnUnclick,
                        "bg-yel text-bl"
                      )}
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
                {renderIngredients()}
                <div className="h-8 w-1"></div>
              </div>
            </div>
            <button
              onClick={() => onClickAddPizza()}
              className="w-full bg-yel py-4"
              style={{ boxShadow: "0 -37px 30px 10px #fff" }}
            >
              Добавить в корзину <span>{currentSale}</span> ₽
            </button>
          </div>
        </div>
      </Modal>
    );
  }
);

export default ModalForm;
