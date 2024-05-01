import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/notificationSound.mp3"

const useListenMessages = () => {
    
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    const handleSocket = () => {

        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })
        return () => socket?.off("newMessage");
    }

    useEffect(() => {
        handleSocket();
      
    }, [socket, setMessages, messages])


}

export default useListenMessages
