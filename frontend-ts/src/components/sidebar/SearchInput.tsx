import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

    const [search, setSearch] = useState('');
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3) {
            toast.error('Search term must be at least 3 characters')
        }

        const conversation = conversations.find((e) => e.fullName.toLowerCase().includes(search.toLowerCase()))

        if(conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        }
        else{
            toast.error("no such user found")
        }


    }



    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
                className='flex items-center gap-2'>
                <input type="text" className="input input-bordered rounded-full" placeholder="Search" 
                
                onChange={(e)=> setSearch(e.target.value)}
                />
                
                <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <FaSearch />
                </button>
        </form>
    )
}

export default SearchInput



// starter code

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2'>
//                 <input type="text" className="input input-bordered rounded-full" placeholder="Search" />
                
//                 <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//                 <FaSearch />
//                 </button>
//         </form>
//     )
// }

// export default SearchInput

