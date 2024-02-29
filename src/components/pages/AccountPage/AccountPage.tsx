import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import NoBonus from "../../../assets/img/bonuses/no-bonus.png";

import InputMask from "react-input-mask";

const AccountPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="mb-14">
        <div className="bg-[#E3ECF5] py-11">
          <div className="container">
            <h2 className="text-yel font-extrabold text-4xl">Мои бонусы</h2>
            <article className="bg-white rounded-lg p-10 my-9 max-w-[255px] min-h-[340px] text-center flex flex-col items-center gap-9">
              <img src={NoBonus} alt="Бонусы отсутствуют" />
              <span className="max-w-[180px]  text-[#686466]">
                Бонусы появятся здесь после заказа
              </span>
            </article>
            <Link to="/actions">
              <span className="dashed-txt leading-relaxed inline-block">Все наши акции</span>
            </Link>
          </div>
        </div>
        <div className="container"></div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-yel font-extrabold text-3xl mb-6">Личные данные</h2>
          <form className="flex flex-col gap-3">
            <div>
              <label htmlFor="name">Имя</label>
              <input name="name" type="text" placeholder="Ваше имя..." id="name"/>
            </div>
            <div>
              <label htmlFor="post-tel">
                Номер телефона
              </label>
              <InputMask
                type="tel"
                id="post-tel"
                name="telephone"
                // value={inputValue}
                // onChange={onValueChange} 
                mask="+7 (999) 999-99-99"
                placeholder="+7 (999) 999-99-99"
              />
            </div>
            <div>
              <label htmlFor="name">День рождения</label>
              <input name="name" type="text" placeholder="Ваше имя..." id="name"/>
            </div>
            <div>
              <label htmlFor="name">Эл. почта</label>
              <input name="name" type="text" placeholder="Ваше имя..." id="name"/>
            </div>
            <h2 className="text-yel font-extrabold text-2xl mt-8">Подписки</h2>
            <div className="flex items-center gap-4">
              <input type="checkbox" name="check_receiveSms" id="check_receiveSms" />
              <label className="text-[#656263] cursor-pointer" htmlFor="check_receiveSms">Сообщать о бонусах, акциях и новых продуктах</label>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="13" fill="#F1F2F5" />
                <text x="11" y="18" fill="#656263">i</text>
              </svg>
            </div>
          </form>
          <button className="py-3 px-10 text-[#696f7a] bg-[#e3ecf5] rounded-lg text-sr">Выйти</button>
        </div>
      </section>
    </>
  );
});

export default AccountPage;
