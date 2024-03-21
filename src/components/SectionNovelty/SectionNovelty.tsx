import NoveltySkeleton from "../UI/Skeletons/NoveltySkeleton";
import styles from "./style.module.css";

import {withBaseRequest} from "../../hocs/withBaseRequest";

import {Pizza} from "../../interfaces/interfaces";

const SectionNovelty = withBaseRequest<JSX.Element, Pizza>(({checkLoading, list})  => {
  if (list && checkLoading) {
    const renderItems = () => {
      return list.map((item: Pizza, i) => {
        if (i > 3) return null;
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
                    <span className={styles.pizzaSale}>от {item.sale.small} ₽</span>
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
  }
},
    NoveltySkeleton,
    4,
    "pizzas"
);

export default SectionNovelty