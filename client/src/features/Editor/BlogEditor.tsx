import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEditor() {
  const [value, setValue] = useState("");

  console.log(value);

  // async function SendContentToDB() {
  //   const content = await fetch("http://localhost:3000");
  // }

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
