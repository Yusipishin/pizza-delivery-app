import { useHttp } from "../hooks/http.hook";
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { stocksFetching, stocksFetched, stocksFetchingError} from "../actions/actions";

type dataObj = { name: string; img: { url: string } };

const SectionStocks = () => {
  const {stocks, stocksLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const { request } = useHttp();

  useEffect(() => {
    dispatch(stocksFetching())
    request("pizza.json")
      .then((data) => dispatch(stocksFetched(data.stocks)))
      .catch(() => dispatch(stocksFetchingError()));
  }, [])

  const checkLoading = () => {
    if (stocksLoadingStatus === 'loading') {
      return <p className="font-black mb-5">Загрузка...</p>
    } else if (stocksLoadingStatus === 'error') {
      return <p className="font-black mb-5">Ошибка...</p>
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
            {checkLoading()}
            {stocks.map((item: dataObj, i: number) => {
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
