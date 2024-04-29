import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-2'>

        <div className='form-control'>
            <label className='label gap-2 cursor-pointer '>
                <input type='checkbox' className='checkbox border-white ' />
                <span className='label-text text-white'>Male</span>
            </label>
        </div>

        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <input type='checkbox' className='checkbox border-white' />
                <span className='label-text text-white'>Female</span>
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox



//STARTER CODE

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex mt-2'>

//         <div className='form-control'>
//             <label className='label gap-2 cursor-pointer '>
//                 <input type='checkbox' className='checkbox border-white ' />
//                 <span className='label-text text-white'>Male</span>
//             </label>
//         </div>

//         <div className='form-control'>
//             <label className='label gap-2 cursor-pointer'>
//                 <input type='checkbox' className='checkbox border-white' />
//                 <span className='label-text text-white'>Female</span>
//             </label>
//         </div>
      
//     </div>
//   )
// }

// export default GenderCheckbox
