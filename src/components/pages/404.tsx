import ErrorMessage from '../UI/ErrorMessage/MessageError'
import {Link} from 'react-router-dom'
import { memo } from 'react'

const Page404 = memo(() => {
  return (
    <div>
        <ErrorMessage/>
        <p style={{'fontSize': '24px'}}>
          404! Page not found...
        </p>
        <Link to="/">
            Back to main page
        </Link>
    </div>
  )
})

export default Page404