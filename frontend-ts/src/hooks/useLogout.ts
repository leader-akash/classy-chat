import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async() => {
        setLoading(true);


        try{

            const res = await axios.post(`/api/auth/logout`)

            if(res?.error){
                throw new Error(res?.error)
            }
            setAuthUser(null)

            localStorage?.removeItem('chat-app')
            toast.success(res?.data?.message)
        }
        catch(error: any){
            console.log('Error in useLogout', error?.message);
            toast?.error(error?.message)
        }
        finally{
            setLoading(false)
        }
    }

    return {loading, logout}
}

export default useLogout
