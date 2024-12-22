import { Link } from "react-router-dom";

const tabGropus = [
  ["Profile", "Library", "Story", "Stats"],
  ["Settings", "Redefine Recommendations", "Manage Publications", "Help"],
  [
    "Become a medium member",
    "Apply for author verification",
    "Apply to the partner program",
    "Gift a membership",
  ],
  ["Sign out"],
];

export default function UserModal() {
  return (
    <div className="max-h-modal overflow-auto absolute right-8 bg-white  shadow-2xl">
      {tabGropus.map((tabs, i) => (
        <div key={i}>
          <ul className="py-[18px] px-6">
            {tabs.map((tab, i) => (
              <li className="py-3">
                <Link
                  to={`${tab}`}
                  key={i}
                  className="text-[#555] hover:text-[#111]"
                >
                  {tab}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full h-[1px] bg-[#eee]"></div>
        </div>
      ))}
    </div>
  );
}
