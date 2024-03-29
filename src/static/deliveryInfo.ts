import img1 from "../assets/img/map/map-1.svg";
import img2 from "../assets/img/map/map-2.svg";
import img3 from "../assets/img/map/map-3.svg";
import img4 from "../assets/img/map/map-4.svg";

type DeliveryObj = {
  img: string;
  descr: string;
};

const deliveryInfo: DeliveryObj[] = [
  {
    img: img1,
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit psum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: img2,
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: img3,
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: img4,
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default deliveryInfo;
