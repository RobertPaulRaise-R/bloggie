import { FaOptinMonster } from "react-icons/fa";

function ProfileHeader() {
  const numberConversion = (num: number): string => {
    if (num / 1000000 >= 1) return `${Math.floor(num / 1000000)}M`;
    if (num / 1000 >= 10) return `${Math.floor(num / 1000)}K`;
    return `${num}`;
  };

  return (
    <div className="px-6">
      <div className="flex items-center gap-10 ">
        <img
          src="/CP-logo.jpeg"
          alt="profile picture"
          className="size-16 rounded-full border shadow-md"
        />

        <div className="flex flex-col items-center">
          <p>{numberConversion(333)}</p>
          <p>Posts</p>
        </div>

        <div className="flex flex-col items-center">
          <p>{numberConversion(33333333)}</p>
          <p>Followers</p>
        </div>

        <div className="flex flex-col items-center">
          <p>{numberConversion(3333333)}</p>
          <p>Following</p>
        </div>
      </div>

      <div className="mt-2">
        <h2 className="font-medium text-stone-800">Robert Paul Raise</h2>
        <p className="text-sm text-stone-700">Software Developer</p>
        <p className="text-sm text-stone-800">
          I'm Raise working as a Software Engineer in Netflix
        </p>

        <div className="flex gap-4 mt-4 font-medium text-stone-50">
          <button className="w-full bg-stone-700 py-2">Follow</button>
          <button className="w-full bg-purple-700">Subscribe</button>
          <button className="bg-stone-600 px-3">
            <FaOptinMonster />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
