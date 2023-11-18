import viber from "../assets/img/messengers/viber-ic.svg"
import skype from "../assets/img/messengers/skype-ic.svg"
import fbm from "../assets/img/messengers/fbm-ic.svg"
import tg from "../assets/img/messengers/tg-ic.svg"
import fb from "../assets/img/messengers/fb-ic.svg"
import vk from "../assets/img/messengers/vk-ic.svg"

type MessengerInfo = {
  img: string, 
  name: string
} 

const messengers: MessengerInfo[] = [
  {img: viber, name: 'Viber'}, 
  {img: skype, name: 'Skype'}, 
  {img: fbm, name: 'Facebook Messenger'}, 
  {img: tg, name: 'Telegram'}, 
  {img: fb, name: 'Facebook'},
  {img: vk, name: 'ВКонтакте'}
]

export default messengers;