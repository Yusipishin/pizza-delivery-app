import {useEffect} from "react";
import {Action} from "../../interfaces/interfaces";

import {withBaseRequest} from "../../hocs/withBaseRequest";
import ActionItemSkeleton from "../UI/Skeletons/ActionItemSkeleton";

const ActionsPage = withBaseRequest<JSX.Element[], Action>(({checkLoading, list}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  if (list && checkLoading) {
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
},
    ActionItemSkeleton,
    3,
    "actions"
);

export default ActionsPage