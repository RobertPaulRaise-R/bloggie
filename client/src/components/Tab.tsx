import { Link } from "react-router-dom";

function Tab({ children, to }: { children: string; to: string }) {
  return (
    <Link to={to} className="text-stone-400 hover:text-stone-800 px-3 py-2">
      {children}
    </Link>
  );
}

export default Tab;
