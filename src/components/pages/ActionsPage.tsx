import { useState, useEffect, memo } from "react";
import { Action } from "../../intefaces/interfaces";
import { useHttp } from "../../hooks/http.hook";

import LoadingMessage from "../UI/LoadingMessage/MessageLoading";
import ErrorMessage from "../UI/ErrorMessage/MessageError";

const ActionsPage = memo(() => {
  const [actions, setActions] = useState<Action[]>([]);
  const [actionsLoadingStatus, setActionsLoadingStatus] = useState<string>("");

  const { request } = useHttp();

  useEffect(() => {
    setActionsLoadingStatus("loading");
    request("http://localhost:3001/actions")
      .then((data: Action[]) => {
        setActions(data);
        setActionsLoadingStatus("idle");
      })
      .catch(() => setActionsLoadingStatus("error"));
  }, []);

  const checkLoading = () => {
    if (actionsLoadingStatus === "loading") {
      return <LoadingMessage />;
    } else if (actionsLoadingStatus === "error") {
      return <ErrorMessage />;
    }
  };

  const renderItems = () => {
    return actions.map((item: Action) => {
      return (
        <li
          className="rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] flex"
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
              <button className="text-[#473E43] py-4 px-8 bg-[#F7D22D] rounded-lg mb-5 ml-5">
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
        <h1 className="text-[#F7D22D] text-4xl mb-6">Акции</h1>
        {checkLoading()}
        <ul className="flex flex-wrap gap-7">{renderItems()}</ul>
      </div>
    </section>
  );
});

export default ActionsPage;
