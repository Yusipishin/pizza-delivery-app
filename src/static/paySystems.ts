import visa from "../assets/img/icons/visa-ic.svg"
import paypal from "../assets/img/icons/paypal-ic.svg"
import mastercard from "../assets/img/icons/mastercard-ic.svg"

type paySystem = {img: string, name: string}

const paySystems: paySystem[] = [
  {img: visa, name: 'Visa'},
  {img: paypal, name: 'PayPal'},
  {img: mastercard, name: 'Mastercard'},
]

export default paySystems;