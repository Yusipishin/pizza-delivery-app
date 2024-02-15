import { useHttp } from "../../hooks/http.hook";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import NoveltySkeleton from "../UI/Skeletons/NoveltySkeleton";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { Novelty } from "../../interfaces/interfaces";

const SectionNovelty = () => {
  const [novelty, setNovelty] = useState<Novelty[]>([]);
  const [noveltyLoadingStatus, setNoveltyLoadingStatus] = useState<string>("");

  const { request } = useHttp();

  useEffect(() => {
    setNoveltyLoadingStatus("loading");
    request("http://localhost:3001/novelty")
      .then((data: Novelty[]) => {
        setNovelty(data);
        setNoveltyLoadingStatus("idle");
      })
      .catch(() => setNoveltyLoadingStatus("error"));
  }, []);

  const checkLoading = () => {
    if (noveltyLoadingStatus === "loading") {
      return [...Array(4)].map((item, i) => {return <NoveltySkeleton key={i}/>})
    } else if (noveltyLoadingStatus === "error") {
      return <ErrorMessage />;
    }
  };

  const renderItems = () => {
    return novelty.map((item: Novelty) => {
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
    <section className="relative">
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

export default SectionNovelty;
