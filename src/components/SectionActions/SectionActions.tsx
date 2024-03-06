/* eslint-disable react-refresh/only-export-components */
import ActionBlockSkeleton from "../UI/Skeletons/ActionBlockSkeleton";
import styles from "./style.module.scss";
import { withBaseRequest } from "../../hocs/withBaseRequest";
import { Link } from "react-router-dom";
import { HocBaseProps, Stock } from "../../interfaces/interfaces";

const SectionStocks = ({
  checkLoading,
  list,
  loadingStatus
}: HocBaseProps) => {

  const renderItems = () => {
    return list.map((item: Stock, i: number) => {
      return (
        <li className={i === 0 ? "row-span-2" : ""} key={item.id}>
          <article>
            <a href="#">
              <img
                src={item.img.url}
                alt={item.name}
                className={i !== 0 ? "rounded-[20px]" : ""}
              />
            </a>
          </article>
        </li>
      );
    });
  };

  const linkStyle =
  loadingStatus === "loading" || loadingStatus === "error"
      ? "none"
      : "block";

  return (
    <section className="relative">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-5xl">
            Наши <span className="text-yel">акции</span>
          </h2>
          {checkLoading()}
          <ul className={styles.list}>{renderItems()}</ul>
          <Link
            to="/actions"
            style={{ display: linkStyle }}
            className={styles.link}
          >
            Все акции
          </Link>
        </div>
      </div>
      <div className={styles.bgImg}></div>
    </section>
  );
};

export default withBaseRequest(
  SectionStocks,
  ActionBlockSkeleton,
  1,
  "stocks"
);
