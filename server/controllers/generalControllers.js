const asyncHandler = require("express-async-handler");

const User = require("../models/User");

const getUserData = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.query._id).lean();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error });
    }
});

const createUser = asyncHandler(async (req, res) => {
    const { name, sectors, agree } = req.body;

    console.log(req.body);
    if (!name || !sectors || !agree) {
        return res.status(400).json({
            message: "Bad request, All fields required",
        });
    } else if (!Array.isArray(sectors)) {
        res.status(401).json({
            message: `Not valid sectors: ${sectors}. it should be an array`,
        });
    }

    const duplicate = await User.findOne({
        name,
    });
    console.log(duplicate);
    if (duplicate) {
        return res.status(400).json({
            message: `Name: ${duplicate.name} already exists`,
        });
    }

    const user = new User({
        name,
        sectors,
        agree,
    });
    await user.save();
    console.log(user._id);

    if (user) {
        res.status(201).json(user);
    } else {
        res.status(500).json({ message: "Failed to create user" });
    }
});

const updateUser = asyncHandler(async (req, res) => {
    console.log("------------------req-----------------", req.body);
    let { sectors, _id } = req.body;

    if (!sectors || !_id) {
        return res.status(400).json({
            message: "Bad request, All fields required",
        });
    }

    try {
        const user = await User.findById(_id); // Use await here to ensure user is retrieved

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        user.sectors = sectors; // Update user's sectors

        await user.save(); // Save the changes

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    try {
        console.log(_id);
        const user = await User.findByIdAndDelete(_id);
        console.log(user);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

module.exports = {
    getUserData,
    createUser,
    updateUser,
    deleteUser,
};
