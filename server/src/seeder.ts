import dotenv from "dotenv";
import connectDB from "./db/config";
import User from "./models/userModel";
import { blogs, users } from "./data";
import mongoose from "mongoose";
import Blog from "./models/blogModel";

dotenv.config();

const seeder = async () => {
  try {
    console.log("Connecting to database...");
    await connectDB();

    console.log("Deleting existing users...");
    await User.deleteMany();
    await Blog.deleteMany();

    console.log("Inserting users...");
    await User.insertMany(users);
    await Blog.insertMany(blogs);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    process.exit();
  }
};

seeder();
