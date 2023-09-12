const express = require("express");
const router = express.Router();
const {
    getUserData,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/generalControllers.js");

const { getSectors } = require("../controllers/sector.js");

// Add a new route for /sectors
router.route("/sectors").get(getSectors);

router
    .route("/")
    .get(getUserData)
    .post(createUser)
    .patch(updateUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
