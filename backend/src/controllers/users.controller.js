import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";

// create a new user
export const createUser = async (req, res, next) => {
    try {

        const user = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role || "user"
            }
        )

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        })
    }

    catch (error) {
        next(error);
    }
}

// get all users
export const getUsers = async (req, res, next) => {
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
        next(error);
    }

}


// get user by id
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: user,
        });
    }

    catch (error) {
        next(error);
    }

}



// Update user by id

export const updateUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            throw new AppError("User not found", 404);
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user,
        });
    }

    catch (error) {
        next(error);
    }
}



// Delete user by id

export const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        
        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}
