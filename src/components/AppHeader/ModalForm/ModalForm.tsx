import Modal from "../../UI/Modal/Modal";
import InputMask from "react-input-mask";
import styles from "./style.module.scss";
// import warningIcon from "../../../assets/img/icons/warning-ic.svg"
import { ChangeEvent, memo, useState } from "react";


interface Props {
  modalActive: boolean,
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalForm = memo(({modalActive, setModalActive}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  return (
    <Modal active={modalActive} setActive={setModalActive} type="Modal">
      <h2 className="text-yel text-4xl font-extrabold">
        Вход на сайт
      </h2>
      <form action="#" method="post">
        <div className={styles.inputTel}>
          <label className="text-[#686466] font-semibold" htmlFor="post-tel">
            Номер телефона
          </label>
          <InputMask
            type="tel"
            id="post-tel"
            name="telephone"
            value={inputValue}
            onChange={onValueChange} 
            className={styles.tel}
            mask="+7 (999) 999-99-99"
            placeholder="+7 (999) 999-99-99"
          />
          <button className={styles.change}>Изменить</button>
        </div>

        {/* <div className="my-9">
          <span className="text-[#686466] font-semibold mr-20">Код из СМС</span>
          <div className="inline-block relative">
            <input type="text" maxLength={4} className={styles.inputCode}/>
            <div className={styles.warningMsg}>
              <img src={warningIcon} alt="Ошибка" className="w-[20px] h-[20px]" />
              <span className="text-xs text-white">Неверный код</span>
            </div>
          </div>
          <button className={styles.change}>Получить новый код</button>
        </div> */}

        <div className="wrapper gap-6 mt-20">
          <button
            name="submit"
            type="submit"
            className={`bg-yel ${styles.sendCode}`}
          >
            Выслать код
          </button>
          <p className={styles.continue}>
            Продолжая, вы соглашаетесь&nbsp;
            <a href="#" className="underline">
              со сбором и обработкой персональных данных и пользовательским
              соглашением
            </a>
          </p>
        </div>
      </form>
    </Modal>
  );
});

export default ModalForm;
