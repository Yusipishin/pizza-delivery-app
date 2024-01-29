import spinner from "./spinner.gif";

const LoadingMessage = () => {
  return <img src={spinner} alt="Сообщение о загрузке" className="my-8" />;
};

export default LoadingMessage;
