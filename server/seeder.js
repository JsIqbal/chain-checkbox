require("dotenv").config();
const mongoose = require("mongoose");
const Sector = require("./models/Sector"); // Path to your Sector model
const sectorsData = require("./data/sector-data"); // The sectors data you provided

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async () => {
    try {
        await Sector.deleteMany(); // Clear existing sectors data
        const savedSectors = await Sector.create(sectorsData);
        console.log("Sectors saved:", savedSectors);
    } catch (error) {
        console.error("Error seeding sectors:", error);
    } finally {
        mongoose.disconnect();
    }
})();
