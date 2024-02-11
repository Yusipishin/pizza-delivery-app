import SectionNovelty from "../SectionNovelty/SectionNovelty";
import SectionMenu from "../SectionMenu/SectionMenu";
import SectionStocks from "../SectionActions/SectionActions";
import SectionMap from "../SectionMap/SectionMap";

const MainPage = () => {
  return (
    <>
      <SectionNovelty />
      <SectionMenu />
      <SectionStocks />
      <SectionMap />
    </>
  );
};

export default MainPage;
