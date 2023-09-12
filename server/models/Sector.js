const mongoose = require("mongoose");

const SectorModel = mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    options: [
        {
            value: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            subOptions: [
                {
                    value: {
                        type: String,
                        required: true,
                    },
                    label: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    ],
});

module.exports = mongoose.model("Sector", SectorModel);
