import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "../components/UI/ErrorMessage/ErrorMessage";
import {useEffect, useState, FC} from "react";

export interface HocBaseProps<TCheckLoading, TList> {
  checkLoading?: () => TCheckLoading,
  list?: TList[],
  loadingStatus?: string
}

export function withBaseRequest<TCheckLoading, TList>(
  Component: FC<HocBaseProps<TCheckLoading, TList>>,
  Skeleton: FC,
  countSkeleton: number,
  url: string,
) {
  return function (props: HocBaseProps<TCheckLoading, TList>) {
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
        return [...Array(countSkeleton)].map((_item, i) => {
          return <Skeleton key={i} />;
        }) as TCheckLoading;
      } else if (loadingStatus === 'error') {
        return <ErrorMessage /> as TCheckLoading;
      }
      return undefined as TCheckLoading
    };

    return <Component {...props}
                      checkLoading={checkLoading}
                      list={list}
                      loadingStatus={loadingStatus} />;
  };
}