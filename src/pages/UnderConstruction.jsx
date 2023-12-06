import Navbar from '../components/Navbar.jsx'
import ConstructionLogo from '../assets/2.png'
import SignupForm from '../components/SignupForm.jsx'
import React from 'react'

const UnderConstruction = () => {
	return (
		<div className="w-[100vw] h-[100vh] bg-gradient-to-br from-green-700 to-yellow-400 relative bg-cover">
			{/* bg-gradient-to-br from-green-700 to-yellow-400 */}
			<Navbar />

			<div className="relative flex flex-col justify-center items-center text-center">
				<div className="">
					<h2 className="font-beau text-5xl ">New Website</h2>
					<h1 className="font-russo text-7xl text-yellow-400">
						Under Construction
					</h1>
				</div>
				<img src={ConstructionLogo} alt="" className="w-[18%]" />
				<p className="w-[70%] font-prata text-lg">
					Our website is currently under construction as we're working hard to
					bring you an amazing online experience. We can't wait to share it with
					you! In the meantime, sign up below to stay in the loop and be the
					first to know about our updates. Thank you for your patience and
					enthusiasm!
				</p>

				<div className="w-[60%] flex items-center justify-center mt-9 ">
					<button className="bg-red-500 border-none text-white rounded-md py-[10px] px-[25px] hover:bg-yellow-400 hover:text-black">
						Notify Me!
					</button>
				</div>

        {/* <SignupForm /> */}

				{/* notify button */}
			</div>
		</div>
	)
}

export default UnderConstruction
