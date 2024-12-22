import bcrypt from "bcrypt";
import Like from "./models/likeModel";

const users: object[] = [
  {
    name: "Robert",
    email: "robert@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Raise",
    email: "raise@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ryan",
    email: "ryan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Roshan",
    email: "roshan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

const blogs: object[] = [
  {
    title: "Top 10+1 JavaScript one-liners I love to use",
    content: `Today I want to share you some of the most helpful and simple JavaScript one liners that helped me a lot with creating my projects.
    Here are my top 10 go-to JavaScript one-liners that I use daily to streamline my workflow. These snippets are straightforward yet powerful, enhance the performance and functionality of my apps with minimal effort.
    So without any more talking let’s get started!`,
    author: "60f7b3b3b3b3b3b3b3b3b3b",
    tags: ["JavaScript", "Programming", "Web Development"],
  },
  {
    title: "How to create a simple REST API with Node.js and Express",
    content: `In this tutorial, I’ll show you how to create a simple REST API with Node.js and Express. We’ll build a simple API that will allow users to create, read, update, and delete blog posts.`,
    author: "60f7b3b3b3b3b3b3b3b3b3b",
    tags: ["Node.js", "Express", "REST", "API"],
  },
  {
    title: "How to build a CRUD application with React and Node.js",
    content: `In this tutorial, I’ll show you how to build a CRUD (Create, Read, Update, Delete) application with React and Node.js. We’ll build a simple application that will allow users to create, read, update, and delete blog posts.`,
    author: "60f7b3b3b3b3b3b3b3b3b3b",
    tags: ["React", "Node.js", "CRUD"],
  },
  {
    title: "How to build a simple blog with Gatsby and Contentful",
    content: `In this tutorial, I’ll show you how to build a simple blog with Gatsby and Contentful. We’ll build a blog that will fetch content from Contentful and display it using Gatsby.`,
    author: "60f7b3b3b3b3b3b3b3b3b3b",
    tags: ["Gatsby", "Contentful", "Blog"],
  },
  {
    title: "How to build a simple chat application with Socket.io",
    content: `In this tutorial, I’ll show you how to build a simple chat application with Socket.io. We’ll build a chat application that will allow users to send and receive messages in real-time.`,
    author: "60f7b3b3b3b3b3b3b3b3b3b",
    tags: ["Socket.io", "Chat"],
  },
];

export { users, blogs };
