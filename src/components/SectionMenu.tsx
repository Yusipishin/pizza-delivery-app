import { useHttp } from "../hooks/http.hook";
import addIngredients from "../static/addIngredients";
import ErrorMessage from "./UI/ErrorMessage/MessageError";
import LoadingMessage from "./UI/LoadingMessage/MessageLoading";

import Modal from "./modal/Modal";

import { useEffect, useState, memo } from "react";

import { Pizza } from "../intefaces/interfaces";

const SectionMenu = memo(() => {
  const [menu, setMenu] = useState<Pizza[]>([])
  const [menuLoadingStatus, setMenuLoadingStatus] = useState<string>('')
  const [modalActive, setModalActive] = useState<boolean>(false)

  const [currentPizza, setCurrentPizza] = useState<Pizza>()

  const [offset, setOffset] = useState(0)
  const [menuEnded, setMenuEnded] = useState(false)
  const { request } = useHttp();

  const onRequest = () => {
    setMenuLoadingStatus('loading')
    request("http://localhost:3001/menu")
    .then((data: Pizza[]) => {
      const newItems = data.slice(offset, offset + 8)
      setMenuEnded(newItems.length < 8 ? true : false)
      setOffset(offset + newItems.length)
      setMenu(state => [...state, ...newItems])
      setMenuLoadingStatus('idle')
    })
    .catch(() => setMenuLoadingStatus('error'))
  }

  useEffect(() => onRequest, [])

  const openModal = (event: React.MouseEvent<HTMLElement>) => {
    const elem = event.target as HTMLElement
    if (elem.tagName === 'BUTTON') {
      const pizzaId = elem.parentElement?.parentElement?.getAttribute('data-pizza-id');
      const pizza = menu.find((item) => item.id === pizzaId);
      setCurrentPizza(pizza);
      setModalActive(true)
    }
  }

  const checkLoading = () => {
    if (menuLoadingStatus === 'loading') {
      return <LoadingMessage/>
    } else if (menuLoadingStatus === 'error') {
      return <ErrorMessage/>
    }
  }

  const renderItems = () => {
    return (
      menu.map((item: Pizza) => {
        const composition = [...item.composition.basic, ...item.composition.optional].join(', ')
        return (
          <li className="max-w-[255px] mb-7 flex" key={item.id}>
            <article data-pizza-id={item.id} className="flex flex-col justify-between">
              <div>
                <img className="mb-3" src={item.img.url} alt={item.name} />
                <h3
                  className="
                  text-[#797979] 
                    mb-4 
                    text-[22px] 
                    font-extrabold
                    leading-7
                  "
                >
                  {item.name}
                </h3>
                <p
                  className="
                  text-[#686466] 
                    mb-6
                    leading-5
                    font-medium
                  "
                >
                  {composition[0].toUpperCase() + composition.slice(1)}
                </p>
              </div>
              <div className="wrapper">
                <span
                  className="
                    text-[#231F20]
                    text-2xl
                    leading-7
                  "
                >
                  от {item.sale.small} ₽
                </span>
                <button
                  aria-label="Добавить в корзину"
                  className="
                    text-[#fff]
                    py-2
                    px-7
                    rounded-lg
                    leading-7
                    bg-[#F7D22D]
                  "
                >
                  В корзину
                </button>
              </div>
            </article>
          </li>
        );
      })
    )
  }

  const btnStyle = menuEnded || menuLoadingStatus === 'loading' || menuLoadingStatus === 'error' ? 'none' : 'block'

  const renderComposition = () => {
    let composition = currentPizza ? [...currentPizza.composition.basic, ...currentPizza.composition.optional].join(', ') : null
    return composition ? composition[0].toUpperCase() + composition.slice(1): null
  }

  return (
    <section className="menu">
      <div className="container">
        <h2
          className="
          text-[32px]
          font-extrabold
          leading-10
          text-[#F7D22D]
          mb-7
        "
        >
          Пицца
        </h2>
        {checkLoading()}
        <ul className="flex flex-wrap gap-8 mb-5" onClick={openModal}>
          {renderItems()}
        </ul>
        <button onClick={() => onRequest()}
              aria-label="Посмотреть ещё варианты пицц"
              style={{display: btnStyle}}
              className="mx-auto 
                        block 
                        mb-14 
                        bg-[#F3F3F7] 
                        rounded-lg 
                        py-4 
                        px-7 
                        text-lg
        ">Посмотреть ещё</button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="wrapper">
          <img className="mx-24" src={currentPizza?.img.url} alt={currentPizza?.name} />
          <div className="max-w-sm [&_label]:rounded-lg [&_button]:rounded-lg">
            <div>
              <span className="text-[20px] font-extrabold block">
                {currentPizza?.name}
              </span>
              <span className="block text-[#686466] font-semibold my-1">
                {/* НОВЫЕ СОСТОЯНИЯ */}
                25 см, традиционное тесто, 360 г
              </span>
              <p className="text-[#686466] opacity-60 text-[12px] leading-5 mb-5">
                {renderComposition()}
              </p>
              <div className="
                mb-5
                text-[#828792]
                text-[11px]
                font-semibold
                [&_input]:hidden
                [&_label]:bg-[#F3F3F7]
                [&_label]:py-2
                [&_label]:text-center
                [&_label]:cursor-pointer
              ">
                <div className="
                    flex
                    gap-3
                    mb-2
                    [&_label]:w-1/3
                ">
                  <input type="radio" id="874aacee-c5d2-47a9-833c-ca29d3f7cab0" name="pizza_size"/>
                  <label htmlFor="874aacee-c5d2-47a9-833c-ca29d3f7cab0">
                    Маленькая
                  </label>
                  <input type="radio" id="49275a6e-9471-4521-b95d-e0d3555dd8cb" name="pizza_size"/>
                  <label htmlFor="49275a6e-9471-4521-b95d-e0d3555dd8cb">
                    Средняя
                  </label>
                  <input type="radio" id="a60f612f-b729-4d25-bdb0-1f4666251c79" name="pizza_size"/>
                  <label htmlFor="a60f612f-b729-4d25-bdb0-1f4666251c79">
                    Большая
                  </label>
                </div>
                
                <div className="
                    flex
                    gap-3
                    [&_label]:w-1/2
                ">
                  <input type="radio" id="9ec1f8a9-e426-4524-9285-e31634eb273f" name="pizza_dough"/>
                  <label htmlFor="9ec1f8a9-e426-4524-9285-e31634eb273f">
                    Традиционное
                  </label>
                  <input type="radio" id="a43a852d-1d88-4246-ac4d-86a649a6c69f" name="pizza_dough"/>
                  <label htmlFor="a43a852d-1d88-4246-ac4d-86a649a6c69f">
                    Тонкое
                  </label>
                </div>
              </div>
            </div>
            <div className="
                flex
                justify-between
                gap-3
                flex-wrap
                [&_button]:w-[31%]
                [&_button]:border-[1.5px]
                [&_button]:border-[#E2E2E9]
                [&_button]:border-solid
            ">
              {addIngredients.map(item => (
                <button className="flex flex-col justify-between items-center" data-selected="false">
                  <div>
                    <img src={item.path} alt={item.name} />
                    <span className="block">{item.name}</span>
                  </div>
                  <span className="block text-[#F7D22D]">от {item.sale} ₽</span>
                </button>
              ))}
            </div>
            <button className="w-full bg-[#F7D22D] py-4">
              Добавить в корзину <span>1000</span> ₽
            </button>
          </div>
        </div>
      </Modal>

    </section>
  );
});

export default SectionMenu;