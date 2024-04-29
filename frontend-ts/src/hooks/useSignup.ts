import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {

    const [loading, setLoading] = useState(false);

    const {setAuthUser}  = useAuthContext();

    const signup = async({fullName, username, password, confirmPassword, gender}) => {

        const success = handleInputErrors({
            fullName, username, password, confirmPassword, gender
        })
        if(!success) return;

        setLoading(true)
        try{
            const res = await axios.post(`/api/auth/signup`, {
                fullName, username, password, confirmPassword, gender
            })

            
            if(res?.error){
                throw new Error(res?.error)
            }

            console.log('res', res)
            const data = res?.data

            localStorage.setItem("chat-app", JSON.stringify(data))

            setAuthUser(data)

        }
        catch(error: any){
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    return {loading, signup}
}

export default useSignup


const handleInputErrors = ({fullName, username, password, confirmPassword, gender}) => {

    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields")
        return false;
    }
    if(password !== confirmPassword) {
        toast.error("Passwords do no match")
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
    }

    return true;
}

