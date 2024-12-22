import BlogPost from "../components/BlogPost";
import TabBar from "../components/TabBar";
import posts, { IBlog } from "../data/posts";

export default function HomePage() {
  return (
    <div className="flex justify-around mt-10">
      <div className="flex justify-around gap-20">
        <div className="lg:max-w-[728px]">
          <TabBar />
          {posts.map((post: IBlog, i) => (
            <BlogPost key={i} post={post} />
          ))}
        </div>

        <div className="max-w-[368px] hidden md:flex">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          quibusdam minima iure velit, necessitatibus deleniti dolores maiores
          ipsa expedita incidunt debitis, illo blanditiis animi earum numquam
          veritatis dolorum dignissimos non.
        </div>
      </div>
    </div>
  );
}
