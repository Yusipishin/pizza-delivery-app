import { useHttp } from "../hooks/http.hook"
import { useCallback, useState } from "react"

const SectionNovelty = () => {
  
  type dataObj = {name: string, sale: number, img: {url: string}}

  const [noveltyItems, setNoveltyItems] = useState([])
  const [noveltyLoadingStatus, setNoveltyLoadingStatus] = useState("loading")
  const {request} = useHttp();

  const dataNovelty = useCallback(() => {
    request('pizza.json')
      .then(data => setNoveltyItems(data.novelty))
      .then(() => setNoveltyLoadingStatus("loaded"))
      .then(data => console.log(data))
  }, [request])

  noveltyLoadingStatus === "loading" ? dataNovelty() : null

  return (
    <section className="mb-12 relative">
      <div className="
          top-[-10%]
          w-60
          h-[364px]
          absolute
          bg-no-repeat
          bg-[url('/src/assets/img/main-bg-img.webp')]
          ">
      </div>
      <div className='container'>
        <h2 className="
            text-[24px]
            text-[#231F20]
            mb-8
        ">
          Новинки
        </h2>
        <ul className='wrapper gap-8'>
          {noveltyItems.map((item: dataObj, i: number) => {
            return (
              <li className='rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]' key={i}>
                <a href='#'>
                  <article className='wrapper gap-6 py-4 pr-9 pl-4'>
                    <div className='img-wrapper'>
                      <img className='
                          w-[71px] 
                          h-[71px] 
                          rounded-[50%]
                          bg-[#fcdc4f]
                      ' 
                      src={item.img.url}
                      alt="Пицца"/>
                    </div>
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
          })}
        </ul>
      </div>
    </section>
  )
}

export default SectionNovelty;