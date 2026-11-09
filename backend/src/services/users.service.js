import User from "../models/user.model.js";

export const getUsersService = async ({
    page,
    limit,
    search,
    role,
    sort,
}) => {
    const skip = (page - 1) * limit;

    const filter = {};

    if (search) {
        filter.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
        ];
    }

    if (role) {
        filter.role = role;
    }

    const sortOption = {};

    if (sort) {
        const sortFields = sort.split(",");

        sortFields.forEach((field) => {
            if (field.startsWith("-")) {
                sortOption[field.substring(1)] = -1;
            } else {
                sortOption[field] = 1;
            }
        });
    }

    const users = await User.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit);

    const totalUsers = await User.countDocuments(filter);
    const totalPages = Math.ceil(totalUsers / limit);

    return {
        users,
        pagination: {
            page,
            limit,
            totalUsers,
            totalPages,
        },
    };
};


// create a new user service
export const createUserService = async ({ name, email, role }) => {
    const user = await User.create({
        name,
        email,
        role: role || "user",
    });

    return user;
};


// get user by id service
export const getUserByIdService = async (userId) => {
    const user = await User.findById(userId);

    return user;
};


// update user by id service
export const updateUserByIdService = async (userId, updateData) => {
    const user = await User.findByIdAndUpdate(
        userId,
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );

    return user;
};


// delete user by id service
export const deleteUserByIdService = async (userId) => {
    const user = await User.findByIdAndDelete(userId);

    return user;
};