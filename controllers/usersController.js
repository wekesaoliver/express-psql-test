const db = require("../db/queries");

exports.usersListGet = async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.usersCreateGet = (req, res) => {
    res.render("createUser", { title: "Create User" });
};

exports.usersCreatePost = async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
};
