import { useHttp } from "../hooks/http.hook";
import { useCallback, useState } from "react";

const SectionMenu = () => {
  type dataObj = {
    name: string;
    description: string;
    sale: number;
    img: { url: string };
  };

  const [menuItems, setMenuItems] = useState([]);
  const [menuLoadingStatus, setMenuLoadingStatus] = useState("loading");
  const { request } = useHttp();

  const dataMenu = useCallback(() => {
    request("pizza.json")
      .then((data) => setMenuItems(data.menu))
      .then(() => setMenuLoadingStatus("loaded"))
  }, [request]);

  menuLoadingStatus === "loading" ? dataMenu() : null;

  return (
    <section className="menu">
      <div className="container">
        <h2
          className="
          text-[32px]
          font-extrabold
          leading-10
          text-[#F7D22D]
          mb-7
        "
        >
          Паста
        </h2>
        <div className="flex flex-wrap gap-8 mb-9">
          {menuItems.map((item: dataObj, i: number) => {
            return (
              <article className="max-w-[255px] mb-7" key={i}>
                <div className="img-wrapper mb-3">
                  <img src={item.img.url} alt={item.name} />
                </div>
                <h3
                  className="
                  text-[#797979] 
                    mb-4 
                    text-[24px] 
                    font-extrabold
                    leading-7
                  "
                >
                  {item.name}
                </h3>
                <p
                  className="
                  text-[#686466] 
                    mb-6
                    leading-5
                    font-medium
                  "
                >
                  {item.description}
                </p>
                <div className="wrapper">
                  <span
                    className="
                      text-[#231F20]
                      text-2xl
                      leading-7
                    "
                  >
                    от {item.sale} ₽
                  </span>
                  <button
                    className="
                      text-[#fff]
                      py-2
                      px-7
                      rounded-lg
                      leading-7
                      bg-[#F7D22D]
                    "
                  >
                    В корзину
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionMenu;
