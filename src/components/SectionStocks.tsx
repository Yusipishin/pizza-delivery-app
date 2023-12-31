import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "./UI/ErrorMessage/MessageError";
import LoadingMessage from "./UI/LoadingMessage/MessageLoading";
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";

import { Stock } from "../intefaces/interfaces";

const SectionStocks = () => {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [stocksLoadingStatus, setStocksLoadingStatus] = useState<string>('')
  const { request } = useHttp();

  useEffect(() => {
    setStocksLoadingStatus('loading')
    request('http://localhost:3001/stocks')
      .then((data: Stock[]) => {
        setStocks(data)
        setStocksLoadingStatus('idle')
    })
      .catch(() => setStocksLoadingStatus('error'))
  }, [])

  const checkLoading = () => {
    if (stocksLoadingStatus === 'loading') {
      return <LoadingMessage/>
    } else if (stocksLoadingStatus === 'error') {
      return <ErrorMessage/>
    }
  }

  const renderItems = () => {
    return (
      stocks.map((item: Stock, i: number) => {
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
      })
    )
  }

  const linkStyle = stocksLoadingStatus === 'loading' || stocksLoadingStatus === 'error' ? 'none' : 'block'

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
            {renderItems()}
          </ul>
          <Link
            to="/actions"
            style={{display: linkStyle}}
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
          </Link>
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
