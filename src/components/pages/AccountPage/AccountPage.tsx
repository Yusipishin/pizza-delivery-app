import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import NoBonus from "../../../assets/img/bonuses/no-bonus.png";
import styles from "./style.module.scss";

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
            <article className={styles.card}>
              <img src={NoBonus} alt="Бонусы отсутствуют" />
              <span className="max-w-[180px]  text-[#686466]">
                Бонусы появятся здесь после заказа
              </span>
            </article>
            <Link to="/actions">
              <span className="dashed-txt leading-relaxed inline-block">
                Все наши акции
              </span>
            </Link>
          </div>
        </div>
        <div className="container"></div>
      </section>
      <section>
        <div className="container">
          <h2 className={styles.userTitle}>
            Личные данные
          </h2>
          <form className="flex flex-col gap-3">
            <label className={styles.wrapperInput}>
              Имя
              <input
                className={styles.input}
                name="name"
                type="text"
                placeholder="Ваше имя..."
              />
            </label>
            <label className={styles.wrapperInput} htmlFor="post-tel">
              Номер телефона
              <InputMask
                disabled
                type="tel"
                id="post-tel"
                name="telephone"
                className={styles.input}
                // value={inputValue}
                // onChange={onValueChange}
                mask="+7 (999) 999-99-99"
                placeholder="+7 (999) 999-99-99"
              />
            </label>
            <label className={styles.wrapperInput} htmlFor="birthday">
              День рождения
              <div className="flex">
                <div className={styles.wrapperDate}>День</div>
                <div className={styles.wrapperDate}>Месяц</div>
                <div className={styles.wrapperDate}>Год</div>
              </div>
            </label>
            <label className={styles.wrapperInput} htmlFor="email">
              Эл. почта
              <input
                className={styles.input}
                name="email"
                type="text"
                placeholder="Ваша почта..."
                id="email"
              />
            </label>
            <h2 className={styles.subs}>Подписки</h2>
            <div className={styles.subsWrapper}>
              <label className={styles.subsLabel}>
                <input
                  className={styles.realCheckbox}
                  type="checkbox"
                  name="check_receiveSms"
                />
                <span className={styles.customCheckbox}></span>
                Сообщать о бонусах, акциях и новых продуктах
              </label>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="13" r="13" fill="#F1F2F5" />
                <text x="11" y="18" fill="#656263">
                  i
                </text>
              </svg>
            </div>
          </form>
          <button className={styles.btnExit}>Выйти</button>
        </div>
      </section>
    </>
  );
});

export default AccountPage;
