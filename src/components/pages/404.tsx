import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { memo } from "react";

const Page404 = memo(() => {
  return (
    <div className="flex justify-center items-center gap-6">
      <ErrorMessage />
      <div>
        <p className="text-3xl mb-4">404! Страница не найдена...</p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
});

export default Page404;
