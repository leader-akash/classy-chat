import User from "../models/user.model.js";

export const singup = async(req,res) => {
    try{
        console.log('Signup ')
        const {fullName, username, password, confirmPassword, gender} = req.body;


        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords doesn't match"})
        }

        const user  = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "username already exists"})
        }

        // Hash password here
        
        // avatar 
        //https://avatar.iran.liara.run/public/boy?username=Scott

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser.id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })


    }
    catch(error){
        console.log('error in signup', error);
        res.status(500).json({error: "internal server error"});
    }
}

export const login = (req,res) => {
    console.log('Login ')
}

export const logout = (req,res) => {
    console.log('Logout ')
}
