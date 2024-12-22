import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import BlogEditor from "../features/Editor/BlogEditor";

export default function CreateBlogPage() {
  const disabled = false;
  const navigate = useNavigate();

  return (
    <div className="flex justify-center px-3">
      <div className="sm:w-full lg:max-w-[1200px]">
        <div className="flex flex-col gap-2 my-4">
          <Input
            placeholder="Title"
            fontSize="30px"
            fontWeight={700}
            width="100%"
          />
          <Input placeholder="Description" width="100%" />
        </div>

        <BlogEditor />

        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-400 px-3 py-2 rounded-sm"
          >
            Cancel
          </button>

          <button
            disabled
            style={{ backgroundColor: `${disabled ? "#aaa" : ""}` }}
            className="bg-blue-400 px-3 py-2 rounded-sm"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
