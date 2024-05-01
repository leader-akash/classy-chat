import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-400 p-4 flex flex-col'>
      
      <SearchInput />
      <div className='divider px-3 '></div>
      <Conversations />

      <Logout />
    </div>
  )
}

export default Sidebar



// starter code


// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import Logout from './Logout'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-400 p-4 flex flex-col'>
      
//       <SearchInput />
//       <div className='divider px-3'></div>
//       <Conversations />

//       <Logout />
//     </div>
//   )
// }

// export default Sidebar
