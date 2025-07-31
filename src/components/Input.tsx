import { useState } from "react";
import { SearchEngines } from "../constants/Searchengines";

export default function Input() {
  const [SearchEngine, setSearchEngine] = useState("Google");
  const [state, setState] = useState(true);

  const OnkeyDown = (e: any) => {
    if (e.key !== 'Enter') return;
    const engine = Object.values(SearchEngines).find(
      (engine) => engine.includes(SearchEngine.toLowerCase())
    ) || SearchEngines.google; // Default to Google if no match found

    const query = encodeURIComponent((e.target as HTMLInputElement).value);
    window.open(engine + query, "_blank");

  }
  const DropdownClass = state ? "hidden" : "block";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center w-full max-w-2xl">
        <div className="relative">
          <div className="flex items-center dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-900  px-3 py-3 rounded-l-lg cursor-pointer" onClick={() => setState(!state)}>
            <span className="mr-2">Engine: <span className="font-bold">{SearchEngine}</span></span>
            <ul className={`absolute top-full left-0 mt-1 bg-gray-300 rounded-lg p-2 w-full ${DropdownClass}`}>
              <li><button className="w-full text-left p-1 hover:bg-gray-400 rounded" onClick={() => setSearchEngine("Google")}>Google</button></li>
              <li><button className="w-full text-left p-1 hover:bg-gray-400 rounded" onClick={() => setSearchEngine("Bing")}>Bing</button></li>
              <li><button className="w-full text-left p-1 hover:bg-gray-400 rounded" onClick={() => setSearchEngine("Duckduckgo")}>DuckDuckGo</button></li>
              <li><button className="w-full text-left p-1 hover:bg-gray-400 rounded" onClick={() => setSearchEngine("Yahoo")}>Yahoo</button></li>
              <li><button className="w-full text-left p-1 hover:bg-gray-400 rounded" onClick={() => setSearchEngine("Ecosia")}>Ecosia</button></li>
            </ul>
          </div>
        </div>

        <input
          type="text"
          className="flex-1 focus:outline-0  p-2 rounded-r-3xl bg-gray-100 dark:bg-gray-900 h-12 dark:text-white text-gray-800"
          placeholder="🔎   Search or type a URL"
          onKeyDown={OnkeyDown}
        />
      </div>
    </div>
  )
}
