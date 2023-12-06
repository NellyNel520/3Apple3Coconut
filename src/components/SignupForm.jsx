import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const SignupForm = () => {
	const [state, handleSubmit] = useForm('myyqryqk')
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }

	return (
		// <div>
		<form onSubmit={handleSubmit}>
			{/* <label htmlFor="email">Name</label> */}
			<div className="border rounded-md w-[100%]">
				<input
					className="py-[10px] px-[25px]"
					placeholder="Name"
					type="text"
					name='name'
          id='name'
					required
				/>
				<ValidationError field="name" prefix="Name" errors={state.errors} />

				<input
					className=" py-[10px] px-[25px]"
					placeholder="Email"
					type="email"
					name="email"
          id="email"
				/>
				<input
					className=" py-[10px] px-[25px]"
					type="phone number"
					placeholder="Phone Number"
					name="phone"
          id="phone"
          required
				/>
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
