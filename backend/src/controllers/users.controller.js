import User from "../models/user.model.js";

// create a new user
export const createUser = async (req, res) => {
    try {
        const {name, email, role} = req.body;

        const user = await User.create(
            {
                name,
                email,
                role
            }
        )

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        })
    }

    catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}