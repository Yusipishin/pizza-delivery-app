import logo from "../../assets/img/logo.png";
import headerLinks from "../../static/headerList";
import styles from "./style.module.css";

import ModalForm from "./ModalForm/ModalForm";
import CartPanel from "./CartPanel/CartPanel";

import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { memo, useEffect, useState } from "react";

import {useAppSelector} from "../../hooks/getRedux.hook.ts";

interface Props {
  mainRef: React.RefObject<HTMLElement>;
}

const AppHeader = memo(({ mainRef }: Props) => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [panelActive, setPanelActive] = useState<boolean>(false);

  const cart = useAppSelector((state) => state.cart);
  
  mainRef.current?.classList.toggle("mt-[38px]", headerScroll);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setHeaderScroll(scrollTop > 14)
      const links = document.querySelectorAll('.header-list li')
      document.querySelectorAll('.menu-title').forEach((item, i) => {
        if ((item as HTMLElement).offsetTop - 5 <= scrollTop && scrollTop <= (item.parentElement as HTMLElement).clientHeight + (item as HTMLElement).offsetTop) {
          links[i].querySelector('a')?.classList.add('text-yel')
        } 
        else links[i].querySelector('a')?.classList.remove('text-yel')
      })
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const renderLinks = () => {
    return headerLinks.map(({ name, path, id }, i) => (
      <li key={i}>
        {
          !id ? 
          <NavLink
            end
            to={path}
            style={({ isActive }) => ({ color: isActive ? "#F7D22D" : "inherit" })}
            >
            {name}
          </NavLink> :
          <HashLink to={`${path}#${id}`}>
            {name}
          </HashLink>
        }
      </li>
    ));
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
              <div className="text-bl ml-[52px]">
                <div className="text-[17px] flex mb-4">
                  <h1>Доставка пасты</h1>
                  <address className="text-yel ml-2" tabIndex={0}>
                    Москва
                  </address>
                </div>
                <div className="gap-5 flex">
                  <div className="wrapper relative">
                    <span className={styles.yandexIc} />
                    <span>Яндекс еда</span>
                    <span className={styles.dot}>4.8</span>
                    <span className={styles.starIc} />
                  </div>
                  <div className="wrapper relative">
                    <span>Время доставки</span>
                    <span className={styles.dot}>от 31 мин</span>
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
          <div className="wrapper">
            <Link
              to="/"
              className={`logo w-[72px] h-[53px] ${headerScroll ? "" : "hidden"}`}
            >
              <img src={logo} alt="Логотип Fibo Pasta Bar" />
            </Link>
            <nav className={headerScroll ? "ml-[20px] mr-[30px]" : ""}>
              <ul
                className={`header-list wrapper gap-4 font-semibold text-lsr ${headerScroll ? "gap-4" : "gap-5"}`}>
                {renderLinks()}
              </ul>
            </nav>
            <div className="wrapper">
              <button
                onClick={() => setModalActive(true)}
                aria-label="Авторизоваться"
                className={`text-[#696F7A] mx-8 text-sr ${headerScroll ? "hidden" : ""}`}>
                Войти
              </button>
              <button
                onClick={() => setPanelActive(true)}
                aria-label="Открыть корзину"
                className={styles.btnCart}
              >
                <span className={styles.txtCart}>Корзина</span>
                <span>{cart.length}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm modalActive={modalActive} setModalActive={setModalActive}/>
      <CartPanel panelActive={panelActive} setPanelActive={setPanelActive}/>
    </header>
  );
});

export default AppHeader;
