import { useHttp } from "../hooks/http.hook"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { noveltyFetching, noveltyFetched, noveltyFetchingError} from "../actions/actions";

type dataObj = {name: string, sale: number, img: {url: string}}

const SectionNovelty = () => {
  const {novelty, noveltyLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttp();

  useEffect(() => {
    dispatch(noveltyFetching())
    request('pizza.json')
      .then(data => dispatch(noveltyFetched(data.novelty)))
      .catch(() => dispatch(noveltyFetchingError()))
  }, [])

  const checkLoading = () => {
    if (noveltyLoadingStatus === 'loading') {
      return <p className="font-black mb-5">Загрузка...</p>
    } else if (noveltyLoadingStatus === 'error') {
      return <p className="font-black mb-5">Ошибка...</p>
    }
  }

  const renderItems = () => {
    return (
      novelty.map((item: dataObj, i: number) => {
        return (
          <li className='rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]' key={i}>
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
        <ul className='wrapper gap-8'>
          {checkLoading()}
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