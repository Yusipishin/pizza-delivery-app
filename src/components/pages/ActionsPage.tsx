/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { Action, HocBaseProps } from "../../interfaces/interfaces";

import { withBaseRequest } from "../../hocs/withBaseRequest";
import ActionItemSkeleton from "../UI/Skeletons/ActionItemSkeleton";

const ActionsPage = ({checkLoading,list}: HocBaseProps) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const renderItems = () => {
    return list.map((item: Action) => {
      return (
        <li
          className="rounded-xl shadow-shad flex"
          key={item.id}
        >
          <article className="max-w-[350px] flex flex-col justify-between">
            <div>
              <img className="block" src={item.img.url} alt={item.name} />
              <div className="mt-3 mr-2 mb-5 ml-5">
                <h3 className="mb-2 text-2xl">{item.name}</h3>
                <p className="mb-5 text-[#797979] text-[13px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
            <div>
              <button className="text-[#473E43] py-4 px-8 bg-yel rounded-lg mb-5 ml-5">
                Посмотреть
              </button>
            </div>
          </article>
        </li>
      );
    });
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-yel text-4xl mb-6">Акции</h1>
        <ul className="flex flex-wrap gap-7">
          {renderItems()}
          {checkLoading()}
        </ul>
      </div>
    </section>
  )
}

export default withBaseRequest(
  ActionsPage,
  ActionItemSkeleton,
  3,
  "actions"
);