const express = require("express");

const CommandController = require("../controllers/commands");
const checkAuth = require("../middleware/token_auth");

const router = express.Router();

router.get("/commands", checkAuth, CommandController.getCommands);

router.get("/command", checkAuth, CommandController.getCommand);

router.get("/commandsSearch", checkAuth, CommandController.getCommandsSearch);

router.put("/addcommand", checkAuth, CommandController.addCommand);

router.post("/newRegCommand", checkAuth, CommandController.newRegisterCommand);

module.exports = router;
