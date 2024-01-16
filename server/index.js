import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blog_router from "./routes/blog.js";
import user_router from "./routes/user.js";

//! 3rd Party middlewares
const app = express();
app.use(express.json());
app.use(cors());

//!Make connection with DB
const CONNECTION_STR =
  "mongodb+srv://codewordsadmin:HDZoR78D5s08pu5o@codewordsdb.swdmced.mongodb.net/codewordsDB?retryWrites=true&w=majority";

const PORT = 3001;
try {
  const connectTODB = async () => {
    await mongoose.connect(CONNECTION_STR);

    app.listen(PORT, () => {
      console.log("Connection established to the database : SERVER STARTED");
    });
  };
  connectTODB();
} catch (err) {
  console.log("Unable to make connection with the database ", err);
}

//! Routes related to the user
app.use("/user", user_router);

//! Routes related to blogs
app.use(blog_router);

//IF USER MAKE ANY OTHER REQUEST
app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND from index.js");
});
