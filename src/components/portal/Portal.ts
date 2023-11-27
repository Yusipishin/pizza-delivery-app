import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({children}: {children: ReactNode}) => {

  const node = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(node)
    return (() => {
      document.body.removeChild(node);
    })
  })

  return (
    ReactDOM.createPortal(children, node)
  )
}

export default Portal;