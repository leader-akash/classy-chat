import { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

interface InputState {
	fullName: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
  }

const Signup = () => {

	const [input, setInput] = useState<InputState>({
		fullName: '',
		username: '',
		password: "",
		confirmPassword: "",
		gender: "",
	})

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender: string) => {
		setInput({ ...input, gender })
	}


	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await signup(input)
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Classy Chat</span>
				</h1>

				<form onSubmit={(e) => handleSubmit(e)}>
					<div>
						<label className='label p-2 mt-4'>
							<span className='text-base label-text text-white'>Full Name</span>
						</label>
						<input type='text' placeholder='Akash' className='w-full input input-bordered  h-10' value={input.fullName}
							onChange={(e) => setInput({ ...input, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input type='text' placeholder='akashking' className='w-full input input-bordered h-10'
							value={input.username}
							onChange={(e) => setInput({ ...input, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={input.password}
							onChange={(e) => setInput({ ...input, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={input.confirmPassword}
							onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

					<a className='text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block text-white' href='/login'>
						Already have an account? Login
					</a>

					<div>
						<button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{
								loading ? <span className='loading loading-spinner'></span>
									:
									"Sign Up"
							}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup


// STARTER CODE

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// const Signup = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> Classy Chat</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2 mt-4'>
// 							<span className='text-base label-text text-white'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='Akash' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text text-white'>Username</span>
// 						</label>
// 						<input type='text' placeholder='akashking' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text text-white'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text text-white'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block text-white' href='#'>
// 						Already have an account? Login.
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup

