import { useHttp } from "../hooks/http.hook";
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
          <img src={currentPizza?.img.url} alt={currentPizza?.name} />
          <div>
            <div>
              <span>{currentPizza?.name}</span>
              <span>
                {/* НОВЫЕ СОСТОЯНИЯ */}
                25 см, традиционное тесто, 360 г
              </span>
              <span>
                {/* ... */}
              </span>
              <div>
                <button>
                  Маленькая
                </button>
                <button>
                  Средняя
                </button>
                <button>
                  Большая
                </button>
              </div>
              <div>
                <button>
                  Традиционное
                </button>
                <button>
                  Тонкое
                </button>
              </div>
            </div>
            <div>
              <button>
                Острый халапенью
                от 120 ₽
              </button>
            </div>
          </div>
        </div>
      </Modal>

    </section>
  );
});

export default SectionMenu;