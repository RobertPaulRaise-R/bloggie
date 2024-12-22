export interface IBlog {
  title: string;
  content: string;
  author: string; // Reference to the user (author)
  thumbnail: string;
  createdAt: string;
  updatedAt?: Date;
  likeCount: number;
  commentCount: number;
  bookmarkCount: number;
  tags: string[];
  isPublished: boolean;
}

const posts: IBlog[] = [
  {
    title: "How to win in life",
    content: "",
    author: "Robert Paul Raise",
    thumbnail:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
    createdAt: "08:30 PM",
    likeCount: 333,
    commentCount: 89,
    bookmarkCount: 0,
    tags: ["Tech", "Web Development"],
    isPublished: true,
  },
  {
    title: "How to win in life",
    content: "",
    author: "Robert Paul Raise",
    thumbnail:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
    createdAt: "08:30 PM",
    likeCount: 333,
    commentCount: 89,
    bookmarkCount: 0,
    tags: ["Tech", "Web Development"],
    isPublished: true,
  },
  {
    title: "How to win in life",
    content: "",
    author: "Robert Paul Raise",
    thumbnail:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
    createdAt: "08:30 PM",
    likeCount: 333,
    commentCount: 89,
    bookmarkCount: 0,
    tags: ["Tech", "Web Development"],
    isPublished: true,
  },
  {
    title: "How to win in life",
    content: "",
    author: "Robert Paul Raise",
    thumbnail:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
    createdAt: "08:30 PM",
    likeCount: 333,
    commentCount: 89,
    bookmarkCount: 0,
    tags: ["Tech", "Web Development"],
    isPublished: true,
  },
];

export default posts;
