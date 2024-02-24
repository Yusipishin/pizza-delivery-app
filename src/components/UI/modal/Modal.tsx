import Portal from "../Portal/Portal";
import closeIcon from "../../../assets/img/icons/close-ic.svg";
import { memo } from "react";

interface Props {
  active: boolean;
  children: React.ReactNode;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  type: "Modal" | "SidePanel";
}

const Modal = memo(({ active, children, setActive, type }: Props) => {
  const renderItems = () => {
    const getScrollWidth = () => {
      const testElement = document.createElement("div");
      testElement.style.visibility = "hidden";
      testElement.style.overflow = "scroll";
      testElement.style.height = "100px";
      testElement.style.width = "100px";
      document.body.appendChild(testElement);
      const scrollbarWidth = testElement.offsetWidth - testElement.clientWidth;
      document.body.removeChild(testElement);
      return scrollbarWidth;
    };
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${getScrollWidth()}px`;

    const locationStyle = () => {
      if (type === "Modal") {
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-6xl";
      } else if (type === "SidePanel") {
        return "top-0 right-0 max-w-2xl h-100vh";
      }
    };

    return (
      <Portal>
        <div
          style={{
            background:
              "linear-gradient(0deg,rgba(247, 210, 45, 0.4) 0%,rgba(247, 210, 45, 0.4) 100%),rgba(33, 49, 52, 0.2)",
          }}
          onClick={() => setActive(false)}
          className="
              fixed 
              top-0 
              bottom-0 
              left-0 
              right-0 
              z-10
              overflow-y-scroll
              scroll__off
            "
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={"absolute bg-white py-8 px-16 " + locationStyle()}
          >
            <div className="leading-7">
              <button
                onClick={() => setActive(false)}
                aria-label="Закрыть модальное окно"
                className="absolute right-3 top-3"
              >
                <img src={closeIcon} alt="Закрытие модального окна" />
              </button>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  };

  if (active) {
    return renderItems();
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
});

export default Modal;
