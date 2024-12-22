import { useState } from "react";

type Props = {
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "range" | "search";
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  onValueChange?: (value: string) => string;
};

export default function Input({
  placeholder,
  type = "text",
  fontSize,
  fontWeight,
  width,
  onValueChange,
}: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onValueChange) {
      setError(onValueChange(newValue));
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`sm:w-80 md:w-[420px] px-3 py-3 outline-none border border-stone-500`}
        style={{ fontSize, fontWeight, width }}
      />
      {error && error !== "" && (
        <span className="mt-1 text-xs text-red-700 font-medium">{error}</span>
      )}
    </div>
  );
}
