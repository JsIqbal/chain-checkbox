const Sector = require("../models/Sector"); // Path to your Sector model

const getSectors = async (req, res) => {
    try {
        const sectors = await Sector.find();
        res.status(200).json(sectors);
    } catch (error) {
        console.error("Error getting sectors:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

module.exports = {
    getSectors,
};
