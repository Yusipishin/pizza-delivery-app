import SectionNovelty from "../SectionNovelty/SectionNovelty";
import SectionPizzas from "../Menu/SectionPizzas/SectionPizzas";
import SectionStocks from "../SectionActions/SectionActions";
import SectionMap from "../SectionMap/SectionMap";
import SectionHero from "../SectionHero/SectionHero";

import { memo, useEffect } from "react";

const MainPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      document.querySelectorAll('.header-list a').forEach((el) => el.classList.remove('text-yel'))
    }
  }, [])
  return (
    <>
      <SectionHero />
      <SectionNovelty />
      <SectionPizzas />
      <SectionStocks />
      <SectionMap />
    </>
  );
});

export default MainPage;
