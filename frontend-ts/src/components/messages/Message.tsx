import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

interface messageType {
  message: any
}

const Message: React.FC<messageType> = ({message}) => {

  const {authUser} = useAuthContext();

  const authUserData = (authUser)
  const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUserData._id;
  const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUserData.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
    <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
        <img alt='Tailwind CSS chat bubble component' src={profilePic} />
      </div>
    </div>
    <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>

  </div>
  )
}

export default Message
