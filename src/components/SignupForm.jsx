import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const SignupForm = () => {
	const [state, handleSubmit] = useForm('myyqrewj')
	if (state.succeeded) {
		return (
			<div className="flex flex-col justify-center items-center mt-[-2] py-0">
				{/* need custom success message with styling */}
				<img
					src="https://img.icons8.com/ios/ffffff/50/checked--v1.png"
					alt=""
					// className="mb-1"
				/>
				<h1 className="text-2xl font-prata text-white my-4">🎉 Success! </h1>
				<p className="w-[100%] text-white">
					Keep an eye on your inbox for the latest news, exclusive content,
					discounts and more!
				</p>
			</div>
		)
	}

	return (
		// <div>
		<form
			onSubmit={handleSubmit}
			method="post"
			action="https://formspree.io/f/myyqrewj"
		>
			<div className=" w-[100%]">
				<input
					className="rounded py-[10px] px-[25px]"
					placeholder="Name"
					type="text"
					name="name"
					id="name"
					required
				/>
				{/* may change later */}
				<ValidationError field="name" prefix="name" errors={state.errors} />

				<input
					className=" rounded py-[10px] px-[25px]"
					placeholder="Email"
					type="email"
					name="email"
					id="email"
				/>
				<input
					className=" rounded py-[10px] px-[25px]"
					type="phone number"
					placeholder="Mobile Number"
					name="phone"
					id="phone"
					required
				/>
				<ValidationError field="phone" prefix="phone" errors={state.errors} />
				<button
					className="bg-red-500 border-none text-white rounded-md py-[10px] px-[25px] hover:bg-green-500 hover:text-black"
					type="submit"
					disabled={state.submitting}
				>
					Submit
				</button>
			</div>
		</form>
		// </div>
	)
}

export default SignupForm
