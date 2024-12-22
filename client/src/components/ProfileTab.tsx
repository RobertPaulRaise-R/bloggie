import { ReactNode } from "react";

function ProfileTab({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center justify-center border border-stone-500 w-full py-3">
      <button>{children}</button>
    </li>
  );
}

export default ProfileTab;
