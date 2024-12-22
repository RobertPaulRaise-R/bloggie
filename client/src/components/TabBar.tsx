import { TfiPlus } from "react-icons/tfi";
import Tab from "./Tab";

function TabBar() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <TfiPlus className="hover:bg-stone-200 p-[2px] rounded-full" />
        <Tab>FrontEnd</Tab>
        <Tab>BackEnd</Tab>
        <Tab>Full Stack</Tab>
        <Tab>Rust</Tab>
        <Tab>Python</Tab>
      </div>
      <div className="w-full h-[1px] bg-stone-200"></div>
    </div>
  );
}

export default TabBar;
