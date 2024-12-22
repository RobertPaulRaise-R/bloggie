const tabs = [
  "Follow Author",
  "Follow Publication",
  "Mute Author",
  "Mute Publication",
  "Report Blog",
];

export default function OptionModal() {
  return (
    <ul className="w-60 bg-white flex flex-col gap-2 shadow-xl py-2 modal">
      {tabs.map((tab) => (
        <li key={tab} className="px-5 py-2 flex items-start modal">
          <button className="modal text-stone-500 hover:text-stone-900">
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}
