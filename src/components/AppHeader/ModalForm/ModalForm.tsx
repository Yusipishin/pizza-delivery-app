import Modal from "../../UI/Modal/Modal";
import InputMask from "react-input-mask";
import styles from "./style.module.scss";
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
        </div>
        <div className="wrapper gap-6">
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
