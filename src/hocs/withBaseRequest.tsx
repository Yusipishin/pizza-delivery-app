import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "../components/UI/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import { Action, Stock, Novelty } from "../interfaces/interfaces";

interface PropsComponent {
  checkLoading: () => JSX.Element | JSX.Element[] | undefined;
  list: Action[] | Stock[] | Novelty[];
  loadingStatus?: string;
}

export function withBaseRequest(
  Component: React.ComponentType<PropsComponent>,
  Skeleton: React.ComponentType,
  countSkeleton: number,
  url: string,
) {
  return function () {
    const [list, setList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState<string>("");

    const { request } = useHttp();

    useEffect(() => {
      setLoadingStatus("loading");
      request(url)
        .then((data) => {
          setList(data);
          setLoadingStatus("idle");
        })
        .catch(() => setLoadingStatus("error"));
    }, []);

    const checkLoading = () => {
      if (loadingStatus === "loading") {
        return [...Array(countSkeleton)].map((item, i) => {
          return <Skeleton key={i} />;
        });
      } else if (loadingStatus === "error") {
        return <ErrorMessage />;
      }
    };

    return <Component checkLoading={checkLoading} list={list} loadingStatus={loadingStatus} />;
  };
}