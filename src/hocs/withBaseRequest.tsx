import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "../components/UI/ErrorMessage/ErrorMessage";
import { useEffect, useState, ComponentType } from "react";
import { HocBaseProps } from "../interfaces/interfaces";

export function withBaseRequest(
  Component: ComponentType<HocBaseProps>,
  Skeleton: ComponentType,
  countSkeleton: number,
  url: string,
) {
  return function (props: HocBaseProps) {
    const [list, setList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState<string>("");

    const { request } = useHttp();

    const _apiBase = "https://db4cff85a63e04f3.mokky.dev/";

    useEffect(() => {
      setLoadingStatus("loading");
      request(_apiBase + url)
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

    return <Component {...props} checkLoading={checkLoading} list={list} loadingStatus={loadingStatus} />;
  };
}