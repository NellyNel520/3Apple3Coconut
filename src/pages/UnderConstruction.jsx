import Navbar from '../components/Navbar.jsx'
import ConstructionLogo from '../assets/2.png'
import Logo from '../assets/fullLogo-foodTruck-white.png'
import SignupForm from '../components/SignupForm.jsx'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	return (
		<div className="h-[100%] bg-gradient-to-br from-green-700 to-yellow-400 relative bg-cover min-w-fit min-h-screen min-w-full">
			{/* bg-gradient-to-br from-green-700 to-yellow-400 */}
			<Navbar />

			<div className="relative flex flex-col justify-center items-center text-center ">
				<div className="">
					<h2 className="font-beau text-4xl ">New Website</h2>

					<h1 className="font-russo sm:text-md md:text-5xl text-5xl text-yellow-400">
						Under Construction
					</h1>
				</div>

				{/* <img src={ConstructionLogo} alt="" className="w-[15%]" /> */}
				<img src={Logo} alt="" className="w-[23%] mb-4" />

				<p className="w-[60%] font-prata text-lg">
					{/* Our website is currently under construction as we're working hard to
					bring you an amazing online experience. We can't wait to share it with
					you! In the meantime, sign up below to stay in the loop and be the
					first to know about our updates. We Thank you for your patience! */}
					Our website is currently under construction. We can't wait to share it with
					you! In the meantime, Sign up now for exclusive updates and discounts. Stay tuned! 
				</p>

				<div className="w-[60%] flex items-center justify-center mt-9 ">
					{!isFormOpen ? (
						<button
							onClick={openForm}
							className="bg-red-500 border-none text-white rounded-md py-[10px] px-[18px] hover:bg-yellow-400 hover:text-black"
						>
							Notify Me!
						</button>
					) : (
						<SignupForm />
					)}
				</div>

				{/* social links */}
				{/* my-10 pb-5 */}
				<div className="bottom-0  mt-[4%]">
					<h1 className="mb-4 text-2xl font-monster text-gray-200 ">Follow Us!</h1>
					<div className="flex flex-row">
						<Link to="https://www.instagram.com/3apples3coconuts">
							<img
								src="https://img.icons8.com/fluency/48/instagram-new.png"
								alt="instagram"
								className="hover:top-[-20px] relative"
							/>
						</Link>
						<Link to="https://m.facebook.com/3apple3coconutsrestaurant">
							<img
								src="https://img.icons8.com/color/48/facebook-new.png"
								alt="facebook"
								className="hover:top-[-20px] relative"
							/>
						</Link>
						<img
							src="https://img.icons8.com/fluency/48/twitter.png"
							alt="twitter"
							className="hover:top-[-20px] relative"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UnderConstruction
