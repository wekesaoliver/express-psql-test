require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Express app running on http://localhost:${PORT}`);
});
