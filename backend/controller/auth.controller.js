import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const singup = async (req, res) => {
    try {
        console.log('Signup ')
        const { fullName, username, password, confirmPassword, gender } = req.body;


        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords doesn't match" })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "username already exists" })
        }

        // Hash password here

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // avatar 
        //https://avatar.iran.liara.run/public/boy?username=Scott

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            //generate JWT token here

            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save();

            res.status(201).json({
                _id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ error: "Invalid user data" })
        }



    }
    catch (error) {
        console.log('error in signup', error);
        res.status(500).json({ error: "internal server error" });
    }
}

export const login = async (req, res) => {
    try {
        console.log('Login ')
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid username or password' })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic
        })
    }
    catch (error) {
        console.log('error in signup', error);
        res.status(500).json({ error: "internal server error" });
    }

}

export const logout = (req, res) => {
    try{
        console.log('Logout ')
        res.cookie("jwtToken", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"})
    }
    catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}
