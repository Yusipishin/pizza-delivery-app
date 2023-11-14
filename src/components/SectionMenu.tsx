import { useHttp } from "../hooks/http.hook";
import { useCallback, useState } from "react";

type dataObj = {
  name: string;
  description: string;
  sale: number;
  img: { url: string };
};

const SectionMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuLoadingStatus, setMenuLoadingStatus] = useState("loading");
  const [offset, setOffset] = useState(0)
  const [ended, setEnded] = useState(false)
  const { request } = useHttp();

  const dataMenu = useCallback(() => {
    request("pizza.json")
      .then((data) => {
        const newItems = data.menu.slice(offset, offset + 8)
        setEnded(newItems.length < 8 ? true : false)
        setMenuItems([...menuItems, ...newItems])
      })
      .then(() => setMenuLoadingStatus("loaded"))
      .then(() => setOffset(offset + 8))
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
        <ul className="flex flex-wrap gap-8 mb-5">
          {menuItems.map((item: dataObj, i: number) => {
            return (
              <li className="max-w-[255px] mb-7" key={i}>
                <article>
                  <img className="mb-3" src={item.img.url} alt={item.name} />
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
                      aria-label="Добавить в корзину"
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
              </li>
            );
          })}
        </ul>
        {
          ended === true ? null :
          <button onClick={dataMenu}
                disabled={menuLoadingStatus === "loading" ? true : false}
                aria-label="Посмотреть ещё варианты пицц"
                className="mx-auto 
                          block 
                          mb-14 
                          bg-[#F3F3F7] 
                          rounded-lg 
                          py-4 
                          px-7 
                          text-lg
          ">Посмотреть ещё</button>
        }
      </div>
    </section>
  );
};

export default SectionMenu;
