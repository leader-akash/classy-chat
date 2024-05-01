import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from "../../utils/emoji"
const Conversations = () => {

	const { loading, conversations } = useGetConversations();

	return (
		<div className='py-2 flex flex-col overflow-auto'>

			{
				conversations?.map((conversation: any, index: any) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						emoji={getRandomEmoji()}
						lastIdx={(index === conversations.length - 1).toString()}
					/>
				))
			}


			{
				loading ? <span className='loading loading-spinner'></span>
					: null
			}
		</div>
	)
}

export default Conversations


// starter code 
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
//   )
// }

// export default Conversations
