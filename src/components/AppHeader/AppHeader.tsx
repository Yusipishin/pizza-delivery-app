import logo from "../../assets/img/logo.png";
import headerLinks from "../../static/headerList";
import styles from "./style.module.scss";

import ModalForm from "./ModalForm";

import { Link, NavLink } from "react-router-dom";
import { memo, useEffect, useState } from "react";

interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const AppHeader = memo(({ mainRef }: Props) => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [modalActive, setModalActive] = useState<boolean>(false);
  
  mainRef.current?.classList.toggle("mt-40", headerScroll);
  
  useEffect(() => {
    const handleScroll = () => setHeaderScroll(window.scrollY > 14 ? true : false);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const renderLinks = () => {
    return headerLinks.map(({ name, path }, i) => (
      <li className="header__item" key={i}>
        <NavLink className="header__link" end to={path}>
          {name}
        </NavLink>
      </li>
    ))
  }
  
  return (
    <header className={headerScroll ? styles.headerFixed : "mb-7"}>
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
                  <address className="text-[#F7D22D] ml-2" tabIndex={0}>
                    Москва
                  </address>
                </div>
                <div className="gap-5 flex">
                  <div className="wrapper relative">
                    <span className={styles.yandexIc} />
                    <span>Яндекс еда</span>
                    <span className={styles.rating}>4.8</span>
                    <span className={styles.starIc} />
                  </div>
                  <div className="wrapper relative">
                    <span>Время доставки</span>
                    <span className={styles.time}>от 31 мин</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <button
                className="call-btn py-2 px-7"
                aria-label="Заказать звонок"
              >
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
            <Link
              to="/"
              className={`logo w-[72px] h-[53px] ${headerScroll ? "" : "hidden"}`}
            >
              <img src={logo} alt="Логотип Fibo Pasta Bar" />
            </Link>
            <nav className={headerScroll ? "ml-[20px] mr-[30px]" : ""}>
              <ul
                className={`wrapper gap-4 font-semibold text-[15px] ${headerScroll ? "gap-4" : "gap-5"}`}>
                {renderLinks()}
              </ul>
            </nav>
            <div className="wrapper header__menu-inner">
              <button
                onClick={() => setModalActive(true)}
                aria-label="Авторизоваться"
                className={`text-[#696F7A] mx-8 text-[16px] ${headerScroll ? "hidden" : ""}`}>
                Войти
              </button>
              <button
                aria-label="Открыть корзину"
                className={`wrapper ${styles.btnCart}`}
              >
                <span className={styles.txtCart}>Корзина</span>
                <span>1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm modalActive={modalActive} setModalActive={setModalActive}/>
    </header>
  );
});

export default AppHeader;
