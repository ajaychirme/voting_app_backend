import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import  authRoutes from "./routes/auth.js";
import voteRoutes from "./routes/vote.js";

import cors from "cors";


//configure env
dotenv.config();

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({extended: true }));

//middelwares
app.use(cors());
app.use(express.json());


//routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to voting app</h1>");
});

app.use("/auth",authRoutes);
app.use("/vote",voteRoutes);


//PORT
const PORT =  process.env.PORT || 8084;

mongoose
  .connect(
    `mongodb+srv://${process.env.USERID}:${process.env.PASSWORD}@cluster0.fpj5vem.mongodb.net/votingapp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));

    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect .`));


