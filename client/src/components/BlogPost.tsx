import { Link } from "react-router-dom";
import {
  IoBookmarkOutline,
  IoEllipsisHorizontalSharp,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import OptionModal from "./OptionModal";
import { useState } from "react";
import { IBlog } from "../data/posts";

export default function BlogPost({ post }: { post: IBlog }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  function handleOptionsModal() {
    setIsOptionsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="mx-6">
      <div className="w-full py-8 flex justify-between">
        <div className="md:max-w-[464px] sm:max-w-[240px]">
          <div className="flex items-center gap-2">
            <img
              src={post.thumbnail}
              alt={`${post.author}'s profile picture`}
              className="size-6"
            />
            <div className="flex flex-col">
              <Link
                to={"/user:rpr2003"}
                className="text-[13px]  text-gray-900 hover:underline"
              >
                {post.author}
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-xl font-bold mt-2">{post.title}</h2>
            <p className="pt-2 text-stone-600 two-lines">{post.content}...</p>
          </div>
          {/* <div>
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1">
                {tag}
              </span>
            ))}
          </div> */}

          <div className="flex items-center justify-between pt-3">
            <div className="flex md:gap-4 sm:gap-2 items-center">
              <p className="text-xs">{post.createdAt}</p>
              <button className="flex gap-1 items-center ">
                <FaThumbsUp color="#aaa" />
                <span className="text-xs">{post.likeCount}</span>
              </button>

              <button className="flex items-center ">
                <IoChatbubbleSharp color="#aaa" />
                <span className="text-xs">{post.commentCount}</span>
              </button>
            </div>

            <div className="flex items-center h-12 sm:gap-1 md:gap-4 relative">
              <IoRemoveCircleOutline size={20} />

              <button>
                <IoBookmarkOutline size={20} />
              </button>

              <div onClick={handleOptionsModal}>
                <IoEllipsisHorizontalSharp size={20} />

                {/* OptionsModal  */}
                {isOptionsOpen && (
                  <div className="absolute top-20 -left-[50%] z-20">
                    <OptionModal />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-20 max-w-40 ml-14 flex items-center justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.GzbkqE264xr2_GNnASL7WwHaD4?rs=1&pid=ImgDetMain"
            alt={post.title}
          />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
