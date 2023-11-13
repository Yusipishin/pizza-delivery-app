const SectionMap = () => {
  return (
    <section className="bg-[#E3ECF5] py-16">
      <div className="container">
        <h2
          className="
            text-[#F7D22D] 
            text-center 
            font-extrabold 
            text-[30px]
            mb-16
            leading-normal
          "
        >
          Оплата и доставка
        </h2>
        <div className="wrapper mb-8">
          <div className="relative">
            <div
              className="
                rounded-[14px] 
                bg-white 
                max-w-[255px] 
                text-[#473E43]
                pt-14
                pb-4
                px-5
                leading-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div
              className="
                absolute
                w-[77px]
                h-[77px]
                rounded-full
                bg-white
                -top-7
                left-1/2
                -translate-x-1/2
                flex
                items-center
                justify-center
              "
            >
              <img src="src/assets/img/map/map-1.svg"/>
            </div>
          </div>
          <div className="relative">
            <div
              className="
                rounded-[14px] 
                bg-white 
                max-w-[255px] 
                text-[#473E43]
                pt-14
                pb-4
                px-5
                leading-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div
              className="
                absolute
                w-[77px]
                h-[77px]
                rounded-full
                bg-white
                -top-7
                left-1/2
                -translate-x-1/2
                flex
                items-center
                justify-center
              "
            >
              <img src="src/assets/img/map/map-2.svg"/>
            </div>
          </div>
          <div className="relative">
            <div
              className="
                rounded-[14px] 
                bg-white 
                max-w-[255px] 
                text-[#473E43]
                pt-14
                pb-4
                px-5
                leading-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div
              className="
                absolute
                w-[77px]
                h-[77px]
                rounded-full
                bg-white
                -top-7
                left-1/2
                -translate-x-1/2
                flex
                items-center
                justify-center
              "
            >
              <img src="src/assets/img/map/map-3.svg"/>
            </div>
          </div>
          <div className="relative">
            <div
              className="
                rounded-[14px] 
                bg-white 
                max-w-[255px] 
                text-[#473E43]
                pt-14
                pb-4
                px-5
                leading-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div
              className="
                absolute
                w-[77px]
                h-[77px]
                rounded-full
                bg-white
                -top-7
                left-1/2
                -translate-x-1/2
                flex
                items-center
                justify-center
              "
            >
              <img src="src/assets/img/map/map-4.svg"/>
            </div>
          </div>
        </div>
        <iframe className="w-full h-96 rounded-2xl" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae346d3b29954bada9def805fb08e1ce6b2e3a27de6522f83b54422ae9dd3b80&amp;source=constructor" cl="true"></iframe>
      </div>
    </section>
  );
};

export default SectionMap;