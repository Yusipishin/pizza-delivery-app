import { useHttp } from "../../hooks/http.hook";
import ErrorMessage from "../UI/ErrorMessage/MessageError";
import LoadingMessage from "../UI/LoadingMessage/MessageLoading";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { Novelty } from "../../intefaces/interfaces";

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
      return <LoadingMessage />;
    } else if (noveltyLoadingStatus === "error") {
      return <ErrorMessage />;
    }
  };

  const renderItems = () => {
    return novelty.map((item: Novelty) => {
      return (
        <li className={styles.item} key={item.id}>
          <a href="#">
            <article className={`wrapper ${styles.card}`}>
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
    <section className="mb-12 relative">
      <div className="container">
        <h2 className={styles.title}>Новинки</h2>
        {checkLoading()}
        <ul className="wrapper gap-8">{renderItems()}</ul>
      </div>
      <div className={styles.bgImg}></div>
    </section>
  );
};

export default SectionNovelty;
