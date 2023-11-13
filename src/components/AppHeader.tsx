import logo from "../assets/img/logo.svg";
import headerLinks from "../static/headerList";

const AppHeader = () => {
  return (
    <header className="mb-8">
      <div className="container">
        <div>
          <div className="wrapper mt-4">
            <div className="wrapper">
              <a href="#" className="logo">
                <img src={logo} alt="Логотип Fibo Pasta Bar" />
              </a>
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
              <button className="call-btn py-2 px-7" aria-label="Заказать звонок">Заказать звонок</button>
              <address>
                <a href="tel:+84993918449" className="phone ml-7">
                  8 499 391-84-49
                </a>
              </address>
            </div>
          </div>
          <div className="wrapper header__menu mt-3">
            <nav className="header__nav">
              <ul className="wrapper gap-5 font-semibold text-[15px]">
                {headerLinks.map((item, i) => (
                  <li className="header__item" key={i}>
                    <a className="header__link" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="wrapper header__menu-inner">
              <button className="text-[#696F7A] mx-8 text-[16px]" aria-label="Авторизоваться">Войти</button>
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
    </header>
  );
};

export default AppHeader;
