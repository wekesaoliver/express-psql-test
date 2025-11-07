const { Router } = require("express");
const usersController = require("../controllers/usersController");

const userRouter = Router();

userRouter.get("/", usersController.usersListGet);
userRouter.get("/new", usersController.usersCreateGet);
userRouter.post("/new", usersController.usersCreatePost);

module.exports = userRouter;
