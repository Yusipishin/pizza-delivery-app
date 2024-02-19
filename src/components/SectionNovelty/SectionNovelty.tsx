import NoveltySkeleton from "../UI/Skeletons/NoveltySkeleton";
import styles from "./style.module.scss";

import { withBaseRequest } from "../../hocs/withBaseRequest";

import { Novelty } from "../../interfaces/interfaces";

interface Props {
  checkLoading: () => JSX.Element | JSX.Element[];
  list: Novelty[];
}

const SectionNovelty = ({ checkLoading, list }: Props) => {
  const renderItems = () => {
    return list.map((item: Novelty) => {
      return (
        <li className={styles.item} key={item.id}>
          <a href="#">
            <article className={styles.card}>
              <img
                className={styles.pizzaImg}
                src={item.img.url}
                alt={item.name}
              />
              <div>
                <span className={styles.pizzaName}>{item.name}</span>
                <span className={styles.pizzaSale}>от {item.sale} ₽</span>
              </div>
            </article>
          </a>
        </li>
      );
    });
  };

  return (
    <section className="relative z-[1]">
      <div className="container">
        <h2 className={styles.title}>Новинки</h2>
        <ul className="wrapper gap-8">
          {renderItems()}
          {checkLoading()}
        </ul>
      </div>
      <div className={styles.bgImg}></div>
    </section>
  );
};

export default withBaseRequest(
  SectionNovelty,
  NoveltySkeleton,
  4,
  "http://localhost:3001/novelty"
);
