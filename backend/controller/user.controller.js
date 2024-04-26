import express from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js";


export const getUsersForSidebar = async(req,res) => {
    try{

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: { $ne: loggedInUserId}}) // after id $ne is means for not showing the logged in user in sidebar. You can chat to yourself if we remove this part

        res.status(200).json(filteredUsers)


    }
    catch(error){
        console.log("Error in getUSerForSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}