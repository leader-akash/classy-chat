import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async (username, password) => {

        const success = handleInputErrors(username, password);
        if(!success) return;

        setLoading(true);
        try{

            const res = await axios.post(`/api/auth/login`, {
                username, password
            })

            if(res?.data?.error){
                throw new Error(res?.data?.error)
            }

            localStorage.setItem('chat-app', JSON.stringify(res?.data))

            setAuthUser(res?.data)

        }
        catch(error: any){
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    
    return {loading, login}

}

export default useLogin

const handleInputErrors = (username, password) => {
    if(!username || !password) {
        toast.error("Please fill in all fields")
        return false;
    }
    return true;
}
