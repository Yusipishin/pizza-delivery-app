import logo from "../resources/img/logo.svg";

const AppHeader = () => {
  const arrLinks = [
    "Пицца",
    "Паста",
    "Супы",
    "Салаты",
    "Напитки",
    "Десерты",
    "Бакалея",
    "Антипасти",
    "Акции",
    "Комбо",
    "Контакты",
  ];
  return (
    <header className="mb-8">
      <div className="container">
        <div className="header__box">
          <div className="wrapper mt-4">
            <div className="wrapper header__inner">
              <a href="#" className="logo">
                <img
                  className="logo__img"
                  src={logo}
                  alt="Логотип Fibo Pasta Bar"
                />
              </a>
              <div className="text-[#231F20] ml-[52px]">
                <div className="text-[17px] flex">
                  <h1 className="header__title">Доставка пасты</h1>
                  <span className="text-[#F7D22D] ml-2">Москва</span>
                </div>
                <div className="gap-5 flex mt-3">
                  <div className="wrapper relative">
                    <span
                      className='
                        w-[18px] 
                        h-[18px] 
                        mr-2
                        bg-[url("/src/resources/img/icons/yandex-food-ic.svg")]
                    '
                    />
                    <span className="header__food-txt">Яндекс еда</span>
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
                        bg-[url('/src/resources/img/icons/star-ic.svg')]
                    "
                    />
                  </div>
                  <div className="wrapper relative">
                    <span className="header__food-txt">Время доставки</span>
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
              <button className="call-btn py-2 px-7">Заказать звонок</button>
              <a href="tel:+84993918449" className="phone ml-7">
                8 499 391-84-49
              </a>
            </div>
          </div>
          <div className="wrapper header__menu mt-3">
            <nav className="header__nav">
              <ul className="wrapper gap-5 font-semibold text-[15px]">
                {arrLinks.map((item) => (
                  <li className="header__item" key={item}>
                    <a className="header__link" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="wrapper header__menu-inner">
              <button className="text-[#696F7A] mx-8 text-[16px]">Войти</button>
              <button
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
