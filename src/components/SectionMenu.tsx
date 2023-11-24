import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "./UI/ErrorMessage/MessageError";
import LoadingMessage from "./UI/LoadingMessage/MessageLoading";
import { useEffect, useState } from "react";

import { ApiResponse } from "../intefaces/interfaces";

const SectionMenu = () => {
  const [menu, setMenu] = useState<ApiResponse[]>([])
  const [menuLoadingStatus, setMenuLoadingStatus] = useState<string>('')

  const [offset, setOffset] = useState(0)
  const [menuEnded, setMenuEnded] = useState(false)
  const { request } = useHttp();

  const onRequest = () => {
    setMenuLoadingStatus('loading')
    request("http://localhost:3001/menu")
    .then(data => {
      const newItems = data.slice(offset, offset + 8)
      setMenuEnded(newItems.length < 8 ? true : false)
      setOffset(offset + newItems.length)
      setMenu(state => [...state, ...newItems])
      setMenuLoadingStatus('idle')
    })
    .catch(() => setMenuLoadingStatus('error'))
  }

  useEffect(() => onRequest, [])

  const checkLoading = () => {
    if (menuLoadingStatus === 'loading') {
      return <LoadingMessage/>
    } else if (menuLoadingStatus === 'error') {
      return <ErrorMessage/>
    }
  }

  const renderItems = () => {
    return (
      menu.map((item: ApiResponse, i: number) => {
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
      })
    )
  }

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
          {renderItems()}
          {checkLoading()}
        </ul>
        <button onClick={() => onRequest()}
              aria-label="Посмотреть ещё варианты пицц"
              style={{'display': menuEnded || menuLoadingStatus === 'loading' 
                                            || menuLoadingStatus === 'error' ? 'none' : 'block'}}
              className="mx-auto 
                        block 
                        mb-14 
                        bg-[#F3F3F7] 
                        rounded-lg 
                        py-4 
                        px-7 
                        text-lg
        ">Посмотреть ещё</button>
      </div>
    </section>
  );
};

export default SectionMenu;