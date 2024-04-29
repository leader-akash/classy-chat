import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            {/* https://tailwindcss-glassmorphism.vercel.app/ */}

            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-se text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> Classy Chat</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2 mt-4'>
                            <span className='text-base label- text-white '>Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label- text-white '>Password</span>
                        </label>
                        <input type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <a href={"/signup"} className="text-sm  text-white hover:underline hover:text-blue-600 mt-4 inline-block">Don't have an account? Signup.</a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>

                </form>



            </div>

        </div>
    )
}

export default Login


// Starter code

// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//             {/* https://tailwindcss-glassmorphism.vercel.app/ */}

//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-se text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-500'> Classy Chat</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2 mt-4'>
//                             <span className='text-base label- text-white '>Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
//                     </div>


//                     <div>
//                         <label className='label p-2 mt-2'>
//                             <span className='text-base label- text-white '>Password</span>
//                         </label>
//                         <input type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
//                     </div>

//                     <a href={"#"} className="text-sm  text-white hover:underline hover:text-blue-600 mt-4 inline-block">Don't have an account? Signup.</a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>

//                 </form>



//             </div>

//         </div>
//     )
// }
