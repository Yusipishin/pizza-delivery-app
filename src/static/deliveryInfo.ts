import img1 from '../assets/img/map/map-1.svg';
import img2 from '../assets/img/map/map-2.svg';
import img3 from '../assets/img/map/map-3.svg';
import img4 from '../assets/img/map/map-4.svg';

type deliveryObj = {img: string, descr: string}

const deliveryInfo: deliveryObj[] = [
  {
    img: img1, 
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    img: img2, 
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    img: img3, 
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    img: img4, 
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

export default deliveryInfo;