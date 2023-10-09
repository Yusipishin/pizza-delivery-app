import './sectionNovelty.scss'

const SectionNovelty = () => {
  
  type dataObj = {name: string, sale: number, img: {url: string}}
  type dataType = dataObj[]
  
  const data: dataType = [
    {name: "Карбонара", sale: 120, img: {url: "https://img.freepik.com/premium-photo/pepperoni-pizza-cheese-pizza-food-pizza-pizza-pepperoni-mozzarella-mozzarella-cheese-cheese_812450-5.jpg?w=740"}},
    {name: "Карбонара", sale: 145, img: {url: "https://img.freepik.com/premium-photo/pepperoni-pizza-cheese-pizza-food-pizza-pizza-pepperoni-mozzarella-mozzarella-cheese-cheese_812450-5.jpg?w=740"}},
    {name: "Карбонара", sale: 100, img: {url: "https://img.freepik.com/premium-photo/pepperoni-pizza-cheese-pizza-food-pizza-pizza-pepperoni-mozzarella-mozzarella-cheese-cheese_812450-5.jpg?w=740"}},
    {name: "Карбонара", sale: 65, img: {url: "https://img.freepik.com/premium-photo/pepperoni-pizza-cheese-pizza-food-pizza-pizza-pepperoni-mozzarella-mozzarella-cheese-cheese_812450-5.jpg?w=740"}},
  ]

  return (
    <section className="novelty">
      <div className='container'>
        <h2 className="novelty__title">
          Новинки
        </h2>
        <ul className='novelty__list wrapper'>
          {data.map((item: dataObj, i: number) => {
            return (
              <li className='novelty__list-item' key={i}>
                <a className='novelty__list-box' href='#'>
                  <article className='novelty__list-inner wrapper'>
                    <div className='img-wrapper'>
                      <img className='novelty__list-img' src={item.img.url} alt="Пицца"/>
                    </div>
                    <div className='novelty__list-info'>
                      <span className="novelty__list-name">{item.name}</span>
                      <span className="novelty__list-sale">от {item.sale} ₽</span>
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