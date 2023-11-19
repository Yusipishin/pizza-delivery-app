import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "./ErrorMessage/MessageError";
import LoadingMessage from "./LoadingMessage/MessageLoading";
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { stocksFetching, stocksFetched, stocksFetchingError} from "../actions/actions";

import { StockInfo } from "../intefaces/interfaces";
import { MainState } from "../intefaces/interfaces";

const SectionStocks = () => {
  const {stocks, stocksLoadingStatus} = useSelector((state: MainState) => state)
  const dispatch = useDispatch()
  const { request } = useHttp();

  useEffect(() => {
    dispatch(stocksFetching())
    request("pizza.json")
      .then(data => dispatch(stocksFetched(data.stocks)))
      .catch(() => dispatch(stocksFetchingError()));
  }, [])

  const checkLoading = () => {
    if (stocksLoadingStatus === 'loading') {
      return <LoadingMessage/>
    } else if (stocksLoadingStatus === 'error') {
      return <ErrorMessage/>
    }
  }

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
          {checkLoading()}
          <ul
            className="
              my-12
              grid 
              gap-[28px] 
              grid-cols-[541px_253px_253px] 
              grid-rows-2 
              items-end
            "
          >
            {stocks.map((item: StockInfo, i: number) => {
              return (
                <li className={i === 0 ? "row-span-2" : ""} key={i}>
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
            })}
          </ul>
          <button
            aria-label="Посмотреть все акции"
            style={{'display': stocksLoadingStatus === 'loading' || 'error' ? 'none' : 'block'}}
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
          -z-10
          bg-no-repeat
          bg-[url('/src/assets/img/bg-stocks.png')]
          "
      ></div>
    </section>
  );
};

export default SectionStocks;
