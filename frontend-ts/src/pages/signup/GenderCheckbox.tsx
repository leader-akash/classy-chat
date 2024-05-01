
type Gender = 'male' | 'female';
interface GenderCheckboxProps {
  onCheckboxChange: (gender: Gender) => void;
  selectedGender: string // Assuming it could be null initially
}

const GenderCheckbox: React.FC<GenderCheckboxProps> = ({onCheckboxChange, selectedGender}) => {

  return (
    <div className='flex mt-2'>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <input type='checkbox' className='checkbox border-white '
                checked={selectedGender === 'male'}
                onChange={()=> onCheckboxChange("male")}
                />
                <span className='label-text text-white'>Male</span>
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <input type='checkbox' className='checkbox border-white' 
                  checked={selectedGender === 'female'}
                  onChange={()=> onCheckboxChange("female")}
                />
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
