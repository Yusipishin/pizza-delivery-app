import { useHttp } from "../hooks/http.hook"
import ErrorMessage from "./UI/ErrorMessage/MessageError";
import LoadingMessage from "./UI/LoadingMessage/MessageLoading";
import { useEffect, useState } from "react"

import { Novelty } from "../intefaces/interfaces";

const SectionNovelty = () => {
  const [novelty, setNovelty] = useState<Novelty[]>([])
  const [noveltyLoadingStatus, setNoveltyLoadingStatus] = useState<string>('')

  const {request} = useHttp();

  useEffect(() => {
    setNoveltyLoadingStatus('loading')
    request('http://localhost:3001/novelty')
      .then((data: Novelty[]) => {
        setNovelty(data)
        setNoveltyLoadingStatus('idle')
    })
      .catch(() => setNoveltyLoadingStatus('error'))
  }, [])

  const checkLoading = () => {
    if (noveltyLoadingStatus === 'loading') {
      return <LoadingMessage/>
    } else if (noveltyLoadingStatus === 'error') {
      return <ErrorMessage/>
    }
  }

  const renderItems = () => {
    return (
      novelty.map((item: Novelty) => {
        return (
          <li className='rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]' key={item.id}>
            <a href='#'>
              <article className='wrapper gap-6 py-4 pr-9 pl-4'>
                <img className='
                    w-[71px] 
                    h-[71px] 
                    rounded-[50%]
                    bg-[#fcdc4f]
                  ' 
                src={item.img.url}
                alt="Пицца"/>
                <div>
                  <span className="
                      leading-6 
                      inline-block
                      text-black
                      text-[18px]
                      mb-1
                  ">
                  {item.name}</span>
                  <span className="
                      leading-6 
                      inline-block
                      font-extrabold
                      text-[16px]
                      text-[#F7D22D]
                  ">
                  от {item.sale} ₽</span>
                </div>
              </article>
            </a>
          </li>
        )
      })
    )
  }

  return (
    <section className="mb-12 relative">
      <div className='container'>
        <h2 className="
            text-[24px]
            text-[#231F20]
            mb-8
        ">
          Новинки
        </h2>
        {checkLoading()}
        <ul className='wrapper gap-8'>
          {renderItems()}
        </ul>
      </div>
      <div className="
          top-[-10%]
          w-60
          h-[460px]
          absolute
          bg-no-repeat
          bg-[url('/src/assets/img/main-bg-img.png')]
          ">
      </div>
    </section>
  )
}

export default SectionNovelty;