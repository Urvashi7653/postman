import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use("/users", userRoutes);

//ROUTES
app.get("/", (req, res) => res.send("Home page"));

app.listen(4000, () => console.log("Server started at port 4000"));
