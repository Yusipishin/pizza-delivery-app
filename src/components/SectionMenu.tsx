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

  const [selectedPizza, setSelectedPizza] = useState<Pizza>()
  const [selectedSize, setSelectedSize] = useState<string>('Средняя')
  const [selectedDough, setSelectedDough] = useState<string>('Традиционное')
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  const [currentWidth, setCurrentWidth] = useState<number>(30)
  const [currentWeight, setCurrentWeight] = useState<number>()
  const [currentSale, setCurrentSale] = useState<number>(0)
  const [currentSaleIngr, setCurrentSaleIngr] = useState<number>(0)

  const [differenceOfSale, setDifferenceOfSale] = useState<number>(0)

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
      const pizza = menu.find((item) => item.id === pizzaId) as Pizza;
      setSelectedPizza(pizza);
      setCurrentWeight(pizza.weight.traditional.average)
      setCurrentSale(pizza.sale.average)
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
                  ">
                  {item.name}
                </h3>
                <p
                  className="
                  text-[#686466] 
                    mb-6
                    leading-5
                    font-medium
                  ">
                  {composition[0].toUpperCase() + composition.slice(1)}
                </p>
              </div>
              <div className="wrapper">
                <span
                  className="
                    text-[#231F20]
                    text-2xl
                    leading-7
                  ">
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
                  ">
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
    let composition = selectedPizza ? [...selectedPizza.composition.basic, ...selectedPizza.composition.optional].join(', ') : null
    return composition ? composition[0].toUpperCase() + composition.slice(1): null
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>, updateFunction: (value: string) => void) => {
    const elem = event.target as HTMLElement
    if (elem.tagName === 'BUTTON') {
      const name = elem.textContent as string
      const pizzaWeight = (selectedPizza as Pizza).weight
      const pizzaSale = (selectedPizza as Pizza).sale
      updateFunction(name as string)
      switch (name) {
        case "Маленькая":
          setDifferenceOfSale(-10)
          setCurrentWidth(25)
          setCurrentSale(pizzaSale.small + currentSaleIngr)
          if (selectedDough === 'Традиционное') {
            setCurrentWeight(pizzaWeight.traditional.small)
          }
          break
        case "Средняя":
          setDifferenceOfSale(0)
          setCurrentWidth(30)
          setCurrentSale(pizzaSale.average + currentSaleIngr)
          if (selectedDough === 'Традиционное') {
            setCurrentWeight(pizzaWeight.traditional.average)
          } else if (selectedDough === 'Тонкое') {
            setCurrentWeight(pizzaWeight.thin.average)
          }
          break
        case "Большая":
          setDifferenceOfSale(20)
          setCurrentWidth(35)
          setCurrentSale(pizzaSale.big + currentSaleIngr)
          if (selectedDough === 'Традиционное') {
            setCurrentWeight(pizzaWeight.traditional.big)
          } else if (selectedDough === 'Тонкое') {
            setCurrentWeight(pizzaWeight.thin.big)
          }
          break
        case "Традиционное":
          if (currentWidth === 25) {
            setCurrentWeight(pizzaWeight.traditional.small)
          } else if (currentWidth === 30) {
            setCurrentWeight(pizzaWeight.traditional.average)
          } else if (currentWidth === 35) {
            setCurrentWeight(pizzaWeight.traditional.big)
          }
          break
        case "Тонкое":
          if (currentWidth === 30) {
            setCurrentWeight(pizzaWeight.thin.average)
          } else if (currentWidth === 35) {
            setCurrentWeight(pizzaWeight.thin.big)
          }
          break
      }
    }
  }

  const handleClickIngr = (event: React.MouseEvent<HTMLElement>) => {
    const name = (event.target as HTMLElement).getAttribute('data-name')
    const sale = Number((event.target as HTMLElement).getAttribute('data-sale'))
    if (name && sale) {
      if (selectedIngredients.indexOf(name) === -1) {
        setSelectedIngredients([...selectedIngredients, name])
        setCurrentSaleIngr(currentSaleIngr + sale)
        setCurrentSale(currentSale + sale)
      } else {
        setSelectedIngredients(selectedIngredients.filter(item => item !== name))
        setCurrentSaleIngr(currentSaleIngr - sale)
        setCurrentSale(currentSale - sale)
      }
      
    }
  }

  const styleSmallBtn = () => {
    if (selectedSize === 'Маленькая') {
      return 'bg-[#F7D22D] text-[#231F20]'
    } else if (selectedDough === 'Тонкое') {
      return 'bg-[#F3F3F7] text-[#828792] opacity-50 cursor-not-allowed'
    } else {
      return 'bg-[#F3F3F7] text-[#828792]'
    }
  }

  const styleThinBtn = () => {
    if (selectedSize === 'Маленькая') {
      return  'bg-[#F3F3F7] text-[#828792] opacity-50 cursor-not-allowed'
    } else if (selectedDough === 'Тонкое') {
      return 'bg-[#F7D22D] text-[#231F20]'
    } else {
      return 'bg-[#F3F3F7] text-[#828792]'
    }
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
          ">
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
          <img className="mx-16" src={selectedPizza?.img.url} alt={selectedPizza?.name} />
          <div className="[&_button]:rounded-lg">
            <div className="scroll__off overflow-y-scroll">
              <div>
                <span className="block text-[20px] font-extrabold">
                  {selectedPizza?.name}
                </span>
                <span className="block text-[#686466] font-semibold my-1">
                  {currentWidth} см, {selectedDough.toLowerCase()} тесто, {currentWeight} г
                </span>
                <p className="text-[#686466] opacity-60 text-[12px] leading-5 mb-5">
                  {renderComposition()}
                </p>
                <div className="
                      mb-5
                      text-[#828792]
                      text-[11px]
                      font-semibold
                      [&_button]:py-2
                      [&_button]:text-center
                  ">
                  <div onClick={(event) => handleClick(event, setSelectedSize)}  
                        className="
                            flex
                            gap-3
                            mb-2
                            [&_button]:w-1/3
                        "
                    >
                    <button disabled={selectedDough === 'Тонкое'} className={styleSmallBtn()}>Маленькая</button>
                    <button className={selectedSize === 'Средняя' ? 
                                              'bg-[#F7D22D] text-[#231F20]' : 
                                              'bg-[#F3F3F7] text-[#828792]'}>
                                                Средняя</button>
                    <button className={selectedSize === 'Большая' ? 
                                              'bg-[#F7D22D] text-[#231F20]' : 
                                              'bg-[#F3F3F7] text-[#828792]'}>
                                                Большая</button>
                  </div>
                  
                  <div onClick={(event) => handleClick(event, setSelectedDough)} 
                        className="
                          flex
                          gap-3
                          [&_button]:w-1/2
                        "
                    >
                    <button className={selectedDough === 'Традиционное' ? 
                                              'bg-[#F7D22D] text-[#231F20]' : 
                                              'bg-[#F3F3F7] text-[#828792]'}>
                                                Традиционное</button>
                    <button disabled={currentWidth === 25} className={styleThinBtn()}>Тонкое</button>
                  </div>
                </div>
              </div>
              <div onClick={(event) => handleClickIngr(event)}
                  className="
                      flex
                      justify-between
                      gap-3
                      flex-wrap
                      h-80
                ">
                {addIngredients.map((item, i) => (
                  <button data-name={item.name} data-sale={item.sale} className={`flex w-[31%] border-[1.5px] border-solid flex-col justify-between items-center p-3 hover:border-[#fff562] ${selectedIngredients.indexOf(item.name) === -1 ? `border-[#E2E2E9]` : `border-[#fff562]`}`} key={i}>
                    <div className="flex flex-col items-center">
                      <img className="w-20 mb-1" src={item.path} alt={item.name} />
                      <span className="leading-4 mb-3 text-[13px] font-semibold ">{item.name}</span>
                    </div>
                    <span className="text-[#F7D22D] font-extrabold">от {item.sale + differenceOfSale} ₽</span>
                  </button>
                ))}
                <div className="h-8 w-1"></div>
              </div>
            </div>
            <button className="w-full bg-[#F7D22D] py-4" style={{boxShadow: '0 -37px 30px 10px #fff'}}>
              Добавить в корзину <span>{currentSale}</span> ₽
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
});

export default SectionMenu;