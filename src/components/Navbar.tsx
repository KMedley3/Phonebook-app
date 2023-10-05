import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isVisble, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisble)
    }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500' p-6>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Digit</Link>
        </div>
        <div className='block'>
            <button 
                onClick={dropDown}
                className='flex items-center px-3 py-2 text-teal-200
                border rounded border-teal-400 hover:text-white hover:border-white'>

            

                <i className='fas fa-bars'></i>
            </button>
        </div>
        { isVisble ? (<div>It is visible</div>) : (<div>It is not visible</div>)}
    </nav>
  )
}

export default Navbar
