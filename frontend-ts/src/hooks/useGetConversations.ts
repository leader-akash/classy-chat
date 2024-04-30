import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);

    const [conversations, setConversations] = useState([]);

    const getConversations = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`/api/users`);
            const data = res?.data;

            if (res?.data?.error) {
                throw new Error(data?.error)
            }

            setConversations(data)
        }
        catch (error: any) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getConversations();
    }, [])

    return {loading, conversations}

}

export default useGetConversations
