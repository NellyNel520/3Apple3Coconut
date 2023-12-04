import React from 'react'
import Logo2 from '../assets/fullLogo-foodTruck-gray.png'

const Navbar = () => {
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between  text-red-600 py-4 px-2">
        <div 	className="font-bold text-2xl cursor-pointer flex items-center font-ari">
        <span className="w-[6.5rem] mr-2">
						<img
							src={Logo2}
							alt="logo"
						/>
					</span>
						<span className='mt-12'>3 Apple 3 Coconut</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar