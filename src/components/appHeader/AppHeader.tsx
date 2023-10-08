import './appHeader.scss'

import logo from '../../resources/img/logo.svg'

const AppHeader = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className='header__box'>
          <div className='wrapper header__wrapper'>
            <div className='wrapper header__inner'>
              <a href='#' className='logo'>
                <img className='logo__img' src={logo} alt="Логотип Fibo Pasta Bar" />
              </a>
              <div className="header__info">
                <div className='header__title-wrapper'>
                  <h1 className="header__title">
                    Доставка пасты
                  </h1>
                  <span className="header__city">
                    Москва
                  </span>
                </div>
                <div className="header__info-box">
                  <div className="wrapper header__food">
                    <span className='header__food-yandex'/>
                    <span className='header__food-txt'>Яндекс еда</span>
                    <span className='header__food-num'>4.8</span>
                    <span className="header__food-star"/>
                  </div>
                  <div className="wrapper header__food">
                    <span className='header__food-txt'>Время доставки</span>
                    <span className='header__food-num'>от 31 мин</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='wrapper'>
              <button className='call-btn header__call-btn'>Заказать звонок</button> 
              <a href='tel:+84993918449' className="phone header__phone">
                8 499 391-84-49
              </a>
            </div>
          </div>
          <div className="wrapper header__menu">
            <nav className='header__nav'>
              <ul className="wrapper header__list">
                <li className="header__item">
                  <a className='header__link' href='#'>Пицца</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Паста</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Супы</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Салаты</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Напитки</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Десерты</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Бакалея</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Антипасти</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Акции</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Комбо</a>
                </li>
                <li className="header__item">
                  <a className='header__link' href='#'>Контакты</a>
                </li>
              </ul>
            </nav>
            <div className='wrapper header__menu-inner'>
              <button className="header__login-btn">
                Войти
              </button>
              <button className="wrapper header__cart-btn">
                <span className="header__cart-txt">
                  Корзина
                </span>
                <span className="header__cart-count">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;