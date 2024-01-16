import express from "express";
import Blog from "../models/blog.js";
import User from "../models/user.js";
import verifyToken from "../Middlewares/auth.js";

import mongoose from "mongoose";

const blog_router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

blog_router.get("/blogs", (req, res) => {
  const getAllBlogs = async () => {
    const data = await Blog.find().sort({ createdAt: -1 });

    res.send(data);
  };
  getAllBlogs();
});

//*Get the blog based on it's id
blog_router.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;

  //!Validation
  if (!ObjectId.isValid(blogId)) {
    return res.status(400).json({ error: "Invalid Id" });
  } else {
    {
      try {
        const getBlogById = async () => {
          const result = await Blog.findById(blogId);
          res.json(result);
        };

        getBlogById();
      } catch (error) {
        console.log("error", error);
      }
    }
  }
});

//*Delete the blog based on it's id
blog_router.delete("/blogs/:id", verifyToken, (req, res) => {
  const blogId = req.params.id;
  const userId = req.headers.userid;

  const deleteBlogById = async () => {
    await Blog.findByIdAndDelete(blogId);
    const ownerUser = await User.findById(userId);
    if (ownerUser) {
      ownerUser.userblogs.pull(blogId);
      await ownerUser.save();
      res.json({ route: "/" });
    } else {
      res.sendStatus(403);
    }
  };

  deleteBlogById();
});

//* CREATE BLOG
blog_router.post("/blogs/create", verifyToken, async (req, res) => {
  const blog = new Blog(req.body);
  const userID = req.headers.userid;

  try {
    const result = await blog.save();

    const newBlogId = result._id;

    const blogOwner = await User.findById(userID);

    //!Will push the blog id into the user's blog list
    blogOwner.userblogs.push(newBlogId);
    await blogOwner.save();

    res.sendStatus(200);
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

//*GET ALL BLOGS OF A PARTICULAR USER
blog_router.get("/blogs/user/:userID", verifyToken, async (req, res) => {
  const userId = req.params.userID;

  try {
    const requestedUser = await User.findById(userId);

    const userblogsIds = requestedUser.userblogs;

    const createdBlogs = await Blog.find({
      _id: { $in: userblogsIds },
    }).sort({ createdAt: -1 });
    res.json(createdBlogs);
  } catch (err) {
    console.log(
      "In the blog.js where i am trying to get all the blogs of a particular user",
      err
    );
  }
});

export default blog_router;
