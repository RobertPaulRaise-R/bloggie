import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-dvh flex flex-col justify-between">
      <Navbar />

      <main className="h-full max-w-[1200px] flex flex-col justify-center mx-auto px-5">
        <h1 className="sm:text-2xl md:text-5xl font-medium text-center uppercase">
          "Reading is essential for those who seek to rise above the ordinary.
          Writing is the art of turning thoughts into permanence"
          {/* <p className="absolute right-10 -bottom-10 text-2xl">-ChatGPT</p> */}
        </h1>
        <div className="flex justify-center mt-14">
          <button className="bg-stone-800 text-stone-50 text-lg inline-block px-8 py-3">
            <Link to={"/login"}>Start Reading</Link>
          </button>
        </div>
      </main>

      <footer className="h-20 flex items-center justify-center gap-5 md:text-xs sm:text-[10px] md:bg-stone-50 sm:bg-stone-800 sm:text-stone-50 md:text-stone-800">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/privacy"}>Privacy</Link>
        <Link to={"/developer"}>Developed by Robert Paul Raise</Link>
      </footer>
    </div>
  );
}

export default App;
