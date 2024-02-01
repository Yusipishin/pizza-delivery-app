import deliveryInfo from "../../static/deliveryInfo";
import styles from "./style.module.scss";

import { memo } from "react";

const SectionMap = memo(() => {
  const renderDeliveryInfo = () => {
    return deliveryInfo.map(({ img, descr }, i) => {
      return (
        <div className="relative flex" key={i}>
          <div className={styles.description}>{descr}</div>
          <div className={styles.img}>
            <img src={img} />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="bg-wh py-16">
      <div className="container">
        <h2 className={styles.mapTitle}>Оплата и доставка</h2>
        <div className="flex justify-between mb-8">{renderDeliveryInfo()}</div>
        <iframe
          className="w-full h-96 rounded-2xl"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae346d3b29954bada9def805fb08e1ce6b2e3a27de6522f83b54422ae9dd3b80&amp;source=constructor"
        ></iframe>
      </div>
    </section>
  );
});

export default SectionMap;
