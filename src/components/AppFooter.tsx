import logo from "../assets/img/logo.svg";
import visa from "../assets/img/icons/visa-ic.svg"
import paypal from "../assets/img/icons/paypal-ic.svg"
import mastercard from "../assets/img/icons/mastercard-ic.svg"
import viber from "../assets/img/messengers/viber-ic.svg"
import skype from "../assets/img/messengers/skype-ic.svg"
import fbm from "../assets/img/messengers/fbm-ic.svg"
import tg from "../assets/img/messengers/tg-ic.svg"
import fb from "../assets/img/messengers/fb-ic.svg"
import vk from "../assets/img/messengers/vk-ic.svg"

const AppFooter = () => {
  return (
    <footer className="footer py-16 relative">
      <div className="container">
        <div className="flex justify-between items-end gap-16">
          <div className="leading-7">
            <a href="#" className="logo inline-block mb-9">
              <img
                className="logo__img"
                src={logo}
                alt="Логотип Fibo Pasta Bar"
              />
            </a>
            <div className="text-[16px] mb-9 max-w-[545px]">
              <div className="mb-6">
                <a href="#">Калорийность и состав</a>
                <a className="ml-14" href="#">Правовая информация</a>
              </div>
              <span className="inline-block mb-5">Мы в соцсетях</span>
              <div className="wrapper font-semibold gap-[90px]">
                <ul className="columns-2 gap-[90px]">
                  <li className="mb-2"><a href="#">YouTube</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li className="mb-2"><a href="#">Facebook</a></li>
                  <li><a href="#">ВКонтакте</a></li>
                </ul>
                <a href="#"><span className="mb-2 inline-block">Москва ул. Проспект</span> <span>Вернадского 86В</span></a>
              </div>
            </div>
            <div className="wrapper font-semibold">
              <p>YaBao Все права защищены © 2023</p>
              <div className="wrapper gap-6">
                <img src={visa} alt="Виза" />
                <img src={paypal} alt="Пейпал" />
                <img src={mastercard} alt="Мастеркард" />
              </div>
            </div>
          </div>
          <div>
            <span className="mb-8 inline-block">Остались вопросы? А мы всегда на связи:</span>
            <div className="grid gap-4 grid-cols-4 grid-rows-2 mb-12">
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={viber} alt="Логотип Вайбер" />
              </a>
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={skype} alt="Логотип Скайп" />
              </a>
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={fbm} alt="Логотип Фейсбук Мессенджер" />
              </a>
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={tg} alt="Логотип Телеграмм" />
              </a>
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={fb} alt="Логотип Фейсбук" />
              </a>
              <a className="py-3 px-9 rounded-xl border-[#E3ECF5] border-2" href="#">
                <img src={vk} alt="Логотип Вконтакте" />
              </a>
              <a className="flex items-center justify-center py-3 px-9 rounded-xl border-[#E3ECF5] border-2 col-span-2" href="#">
                Написать нам
              </a>
            </div>
            <div className="flex flex-col">
              <a href="tel:+84993918449" className="phone mb-7">
                8 499 391-84-49
              </a>
              <button className="call-btn py-2 px-7">Заказать звонок</button>
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