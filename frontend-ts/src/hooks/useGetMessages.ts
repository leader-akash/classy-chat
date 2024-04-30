import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

    const getMessages = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/messages/${selectedConversation._id}`);
            if (res.error) throw new Error(res.error);
            setMessages(res?.data);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

	useEffect(() => {
		if (selectedConversation?._id) 
            getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;