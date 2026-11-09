import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import {
    getUsersService,
    createUserService,
    getUserByIdService,
    updateUserByIdService,
    deleteUserByIdService
} from "../services/users.service.js";

// create a new user
export const createUser = async (req, res, next) => {
    try {
        const user = await createUserService({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }

    catch (error) {
        next(error);
    }
};

// get all users
export const getUsers = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const { search, role, sort } = req.query;

        const result = await getUsersService({
            page,
            limit,
            search,
            role,
            sort,
        });

        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.users,
            pagination: result.pagination,
        });
    }

    catch (error) {
        next(error);
    }
}


// get user by id
export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);

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
};



// Update user by id

export const updateUserById = async (req, res, next) => {
    try {
        const user = await updateUserByIdService(
            req.params.id,
            req.body
        );

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
};



// Delete user by id

export const deleteUserById = async (req, res, next) => {
    try {
        const user = await deleteUserByIdService(req.params.id);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    }

    catch (error) {
        next(error);
    }
};