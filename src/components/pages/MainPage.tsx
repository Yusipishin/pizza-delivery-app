import SectionNovelty from "../SectionNovelty/SectionNovelty";
import SectionMenu from "../Menu/SectionPizzas/SectionPizzas";
import SectionStocks from "../SectionActions/SectionActions";
import SectionMap from "../SectionMap/SectionMap";
import SectionHero from "../SectionHero/SectionHero";

import { memo, useEffect } from "react";

const MainPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SectionHero />
      <SectionNovelty />
      <SectionMenu />
      <SectionStocks />
      <SectionMap />
    </>
  );
});

export default MainPage;
