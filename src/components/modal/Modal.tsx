import Portal from '../portal/Portal'
import closeIcon from '../../assets/img/icons/close-ic.svg'
import { memo } from 'react'

interface Props {
  active: boolean,
  setActive: Function,
  children: React.ReactNode,
}

const Modal = memo(({active, setActive, children} : Props) => {

  const renderItems = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '23px'
    return (
      <Portal>
        <div style={{background: 'linear-gradient(0deg,rgba(247, 210, 45, 0.4) 0%,rgba(247, 210, 45, 0.4) 100%),rgba(33, 49, 52, 0.2)'}}
          onClick={() => setActive(false)}
          className="
              fixed 
              top-0 
              bottom-0 
              left-0 
              right-0 
              z-10
            ">
          <div 
            onClick={(event) => event.stopPropagation()}
            className="
                absolute
                top-1/2 
                left-1/2 
                -translate-x-1/2 
                -translate-y-1/2
                bg-white
                py-8
                px-16
                rounded-xl
                max-w-6xl
            ">
            <div className='leading-7'>
              <button 
                  onClick={() => setActive(false)} 
                  aria-label='Закрыть модальное окно' 
                  className='absolute right-3 top-3'
                >
                <img src={closeIcon} alt="Закрытие модального окна" />
              </button>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  }

  if (active) {
    return renderItems()
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
})

export default Modal