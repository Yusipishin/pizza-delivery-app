import { useHttp } from "../hooks/http.hook";
import { useCallback, useState } from "react";

const SectionStocks = () => {
  type dataObj = { name: string; img: { url: string } };
  type stockProps = { arg: string };

  const [stocksItems, setStocksItems] = useState([]);
  const [stocksLoadingStatus, setStocksLoadingStatus] = useState("loading");
  const { request } = useHttp();

  const dataStocks = useCallback(() => {
    request("pizza.json")
      .then((data) => setStocksItems(data.stocks))
      .then(() => setStocksLoadingStatus("loaded"));
  }, [request]);

  stocksLoadingStatus === "loading" ? dataStocks() : null;

  const Stock = ({ arg }: stockProps) => {
    const items = stocksItems.map((item: dataObj, i: number) => {
      if (arg === "main" && i === 1) {
        return (
          <article className="img-wrapper" key={i}>
            <a href="#">
              <img src={item.img.url} alt={item.name} />
            </a>
          </article>
        );
      } else if (arg === "others" && i !== 1) {
        return (
          <article className="max-w-[255px]" key={i}>
            <a href="#">
              <img
                src={item.img.url}
                alt={item.name}
                key={i}
                className="rounded-[20px]"
              />
            </a>
          </article>
        );
      }
    });
    return items;
  };

  return (
    <section className="relative">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2
            className="
              font-extrabold
              text-5xl
            "
          >
            Наши <span className="text-[#F7D22D]">акции</span>
          </h2>
          <div
            className="my-12
              grid 
              gap-[28px] 
              grid-cols-[541px_253px_253px] 
              grid-rows-2 
              items-end
            "
          >
            {stocksItems.map((item: dataObj, i: number) => {
              return (
                <article className={i === 0 ? "row-span-2" : ""} key={i}>
                  <a href="#">
                    <img
                      src={item.img.url}
                      alt={item.name}
                      className={i !== 0 ? "rounded-[20px]" : ""}
                    />
                  </a>
                </article>
              );
            })}
          </div>
          <button
            className="
              py-[10px]
              px-10
              rounded-3xl
              text-[#fff]
              bg-[#F7D22D]
              leading-7
              mb-16
            "
          >
            Все акции
          </button>
        </div>
      </div>
      <div
        className="
          -bottom-36
          right-0
          w-60
          h-[460px]
          absolute
          bg-no-repeat
          bg-[url('/src/assets/img/bg-stocks.png')]
          "
      ></div>
    </section>
  );
};

export default SectionStocks;
