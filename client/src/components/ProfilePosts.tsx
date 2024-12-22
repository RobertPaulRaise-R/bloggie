import { FaBlog, FaBookmark, FaHeart } from "react-icons/fa";
import ProfileTab from "./ProfileTab";
import posts from "../data/posts";
import { IBlog } from "../data/posts";

function ProfilePosts() {
  return (
    <div className="px-6 mt-10">
      <nav>
        <ul className="flex justify-between">
          <ProfileTab>
            <FaBlog />
          </ProfileTab>
          <ProfileTab>
            <FaHeart />
          </ProfileTab>
          <ProfileTab>
            <FaBookmark />
          </ProfileTab>
        </ul>
      </nav>

      <div className="flex">
        {posts.map((post: IBlog) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
}

export default ProfilePosts;
