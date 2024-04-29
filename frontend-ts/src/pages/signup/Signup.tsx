import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Classy Chat</span>
				</h1>

				<form>
					<div>
						<label className='label p-2 mt-4'>
							<span className='text-base label-text text-white'>Full Name</span>
						</label>
						<input type='text' placeholder='Akash' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input type='text' placeholder='akashking' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
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
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block text-white' href='#'>
						Already have an account? Login.
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
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

