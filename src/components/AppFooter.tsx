import logo from "../assets/img/logo.svg";
import paySystems from "../static/paySystems";
import messengers from "../static/messengers";
import socialNetworks from "../static/socialNetworks";

import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer className="footer my-16 relative">
      <div className="container">
        <div className="flex justify-between items-end gap-16">
          <div className="leading-7">
            <Link to="/" className="logo inline-block mb-9">
              <img
                src={logo}
                alt="Логотип Fibo Pasta Bar"
              />
            </Link>
            <div className="text-[16px] mb-9 max-w-[545px]">
              <div className="mb-6">
                <a href="#">Калорийность и состав</a>
                <a className="ml-14" href="#">Правовая информация</a>
              </div>
              <span className="inline-block mb-5">Мы в соцсетях</span>
              <address className="wrapper font-semibold gap-[90px]">
                <ul className="columns-2 gap-[90px]">
                  {socialNetworks.map((name, i) => {
                    return (
                      <li className={i % 2 === 0 ? 'mb-2': ''} key={i}>
                        <a href="#">
                          {name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <span>
                  <span className="mb-2 inline-block">Москва ул. Проспект</span>
                  <span>Вернадского 86В</span>
                </span>
              </address>
            </div>
            <div className="wrapper font-semibold">
              <p>YaBao Все права защищены © 2023</p>
              <div className="wrapper gap-6">
                {paySystems.map(({img, name}, i) => {
                  return (
                    <img src={img} alt={name} key={i}/>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            <span className="mb-8 inline-block uppercase">Остались вопросы? А мы всегда на связи:</span>
            <address className="grid gap-4 grid-cols-4 grid-rows-2 mb-12">
              {messengers.map(({img, name}, i) => {
                return (
                  <a key={i} className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                    <img src={img} alt={name} />
                  </a>
                )
              })}
              <a className="flex items-center justify-center py-3 px-9 rounded-xl border-[#E3ECF5] border-2 col-span-2" href="#">
                Написать нам
              </a>
            </address>
            <div className="flex flex-col">
              <address className="mb-7">
                <a href="tel:+84993918449" className="phone">
                  8 499 391-84-49
                </a>
              </address>
              <button className="call-btn py-2 px-7" aria-label="Заказать звонок">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 -z-10">
        <img src="src/assets/img/bg-footer.png"/>
      </div>
    </footer>
  )
}

export default AppFooter;