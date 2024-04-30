import { useState } from "react";
import { GrSend } from "react-icons/gr";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    
	const [message, setMessage] = useState("");
	const {loading, sendMessage} = useSendMessage();

	const handleSubmit = async(e: any) => {
		e.preventDefault();
		if(!message) return;
		await sendMessage(message);
		setMessage("");
	}

  return (

    <form className='px-4 my-3'
		onSubmit={(e) => handleSubmit(e)}
	>
            <div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=> setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-slate-300 text-[18px]'>
					{ loading ? <span className="loading loading-spinner"></span> : <GrSend />}
				</button>
			</div>

      
    </form>
  )
}

export default MessageInput






//Starter code 

// import { GrSend } from "react-icons/gr";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
// <div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<GrSend />
// 				</button>
// 			</div>

      
//     </form>
//   )
// }

// export default MessageInput

