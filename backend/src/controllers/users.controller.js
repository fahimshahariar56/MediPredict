import User from "../models/user.model.js";

// create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;

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

// get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            count: users.length,
            data: users,
        });
    }

    catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }

}


// get user by id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: user,
        });
    }

    catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }

}



// Update user by id

export const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user,
        });
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

// Delete user by id

export const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: error.message,
        });
    }
}
