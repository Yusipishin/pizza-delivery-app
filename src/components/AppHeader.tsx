import logo from "../assets/img/logo.png";
import headerLinks from "../static/headerList";
import Modal from "./modal/Modal";

//https://github.com/sanniassin/react-input-mask
import InputMask from "react-input-mask";

import { Link, NavLink } from "react-router-dom";
import { memo, useEffect, useState } from "react";

interface Props {
  mainRef: React.RefObject<HTMLElement>
}

const AppHeader = memo(({mainRef} : Props ) => {
  const [headerScroll, setHeaderScroll] = useState(false)
  const [modalActive, setModalActive] = useState<boolean>(false)

  headerScroll ? mainRef.current?.classList.add('mt-40') 
                : mainRef.current?.classList.remove('mt-40')

  useEffect(() => {
    const handleScroll = () => setHeaderScroll(window.scrollY > 14 ? true : false)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={headerScroll ? 'fixed top-0 left-0 right-0 z-10 bg-white py-5' : 'mb-7'}>
      <div className="container">
        <div>
          <div className={`mb-3 mt-4 ${headerScroll ? "hidden" : "wrapper"}`}>
            <div className="wrapper">
              <Link to="/" className="logo">
                <img src={logo} alt="Логотип Fibo Pasta Bar" />
              </Link>
              <div className="text-[#231F20] ml-[52px]">
                <div className="text-[17px] flex mb-4">
                  <h1>Доставка пасты</h1>
                  <address className="text-[#F7D22D] ml-2" tabIndex={0}>Москва</address>
                </div>
                <div className="gap-5 flex">
                  <div className="wrapper relative">
                    <span
                      className='
                        w-[18px] 
                        h-[18px] 
                        mr-2
                        bg-[url("/src/assets/img/icons/yandex-food-ic.svg")]
                      '
                    />
                    <span>Яндекс еда</span>
                    <span
                      className="
                        ml-5
                        before:content-['']
                        before:-ml-2
                        before:bg-[#FF2E65]
                        before:-translate-x-1/2
                        before:-translate-y-1/2
                        before:absolute
                        before:top-1/2
                        before:w-1
                        before:h-1
                        before:rounded-full
                      "
                    >
                      4.8
                    </span>
                    <span
                      className="
                        w-[13px]
                        h-[13px]
                        mt-[-3px]
                        ml-1
                        bg-[url('/src/assets/img/icons/star-ic.svg')]
                      "
                    />
                  </div>
                  <div className="wrapper relative">
                    <span>Время доставки</span>
                    <span
                      className="
                        ml-5
                        before:content-['']
                        before:-ml-2
                        before:bg-[#FF2E65]
                        before:-translate-x-1/2
                        before:-translate-y-1/2
                        before:absolute
                        before:top-1/2
                        before:w-1
                        before:h-1
                        before:rounded-full
                      "
                    >
                      от 31 мин
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <button className="call-btn py-2 px-7" aria-label="Заказать звонок">
                Заказать звонок
              </button>
              <address>
                <a href="tel:+84993918449" className="phone ml-7">
                  8 499 391-84-49
                </a>
              </address>
            </div>
          </div>
          <div className="wrapper header__menu">
            <Link to="/" className={`logo w-[72px] h-[53px] ${headerScroll ? "" : "hidden"}`}>
              <img src={logo} alt="Логотип Fibo Pasta Bar" />
            </Link>
            <nav className={headerScroll ? "ml-[20px] mr-[30px]" : ""}>
              <ul className={`wrapper gap-4 font-semibold text-[15px] ${headerScroll ? "gap-4" : "gap-5"}`}>
                {headerLinks.map(({name, path}, i) => (
                  <li className="header__item" key={i}>
                    <NavLink className="header__link" end to={path}>
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="wrapper header__menu-inner">
              <button onClick={() => setModalActive(true)} 
                      aria-label="Авторизоваться"
                      className={`text-[#696F7A] mx-8 text-[16px] 
                              ${headerScroll ? "hidden" : ""}`}>
                Войти
              </button>
              <button
                aria-label="Открыть корзину"
                className="
                  wrapper
                  gap-8 
                  rounded-lg 
                  relative 
                  py-2 
                  px-7
                  text-[16px]
                  text-[#231F20]
                  leading-8
                  bg-[#F7D22D]
              "
              >
                <span
                  className="
                    after:content-['']
                    after:left-[72%]
                    after:top-1/2
                    after:w-0.5
                    after:h-6
                    after:block
                    after:absolute
                    after:rounded-md
                    after:bg-[#231F20]
                    after:-translate-x-1/2
                    after:-translate-y-1/2
                "
                >
                  Корзина
                </span>
                <span>1</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <span className="text-[#F7D22D] text-4xl font-extrabold">
          Вход на сайт
        </span>
        <form action="#" method="post">
          <div className="mt-10 mb-20 flex items-center gap-8">
            <label className="text-[#686466] font-semibold" htmlFor="post-tel">
              Номер телефона
            </label>
            <InputMask 
                id="post-tel"
                name="user_telephone"
                mask="+7 (999) 999-99-99"
                type="tel" 
                placeholder="+7 (999) 999-99-99"
                className="
                  py-4
                  px-5
                  text-[#231F20]
                  text-[15px]
                  rounded-lg
                  border-[1.5px]
                  border-[solid]
                border-[#E2E2E9]
                "
            />
          </div>
          <div className="wrapper gap-6">
            <button 
              name="submit"
              type="submit"
              className="
                text-white
                text-[15px]
                rounded-lg
                bg-[#F7D22D]
                font-extrabold
                py-5
                px-14
            ">
              Выслать код
            </button>
            <p className="
                text-[#9D9D9B]
                font-semibold
                text-[13px]
                leading-5
                max-w-[330px]
            ">
              Продолжая, вы соглашаетесь&nbsp;
              <a href="#" className="underline">
                со сбором и обработкой персональных данных и пользовательским соглашением
              </a>
            </p>
          </div>
        </form>
      </Modal>
    </header>
  );
});

export default AppHeader;
