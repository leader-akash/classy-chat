import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
    
     const [loading, setLoading] = useState(false);

     const {messages, selectedConversation, setMessages} = useConversation();

     const sendMessage = async(message: any) => {

        setLoading(true);
        try{

            const res = await axios.post(`/api/messages/send/${selectedConversation?._id}`,{
                message
            })

            console.log('resssss', res)
            if(res?.error) {
                throw new Error(res?.error)
            }
            setMessages([...messages, res?.data])

        }
        catch(error: any){
            console.log('error', error)

            toast.error(error?.message);
        }
        finally{
            setLoading(false)
        }
     }

     return {loading, sendMessage}


}

export default useSendMessage
