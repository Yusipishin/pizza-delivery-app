const ContactPage = () => {
  return (
    <section className="">
      <div className="container">
        <iframe className="w-full h-96 rounded-2xl" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae346d3b29954bada9def805fb08e1ce6b2e3a27de6522f83b54422ae9dd3b80&amp;source=constructor"></iframe>
        <address className="mt-11">
          <a href="tel:+84993918449" className="
              text-[38px] 
              text-[#F7D22D]
            ">
            8 800 333-36-62
          </a>
          <span className="block text-[26px] mt-7 mb-5">ул. Проспект Вернадского 86В</span>
          <span className="block text-[15px] font-semibold">Доставка и самовывоз 10:00 — 23:00</span>
        </address>
      </div>
    </section>
  )
}

export default ContactPage