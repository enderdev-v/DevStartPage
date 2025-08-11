import { useState } from "react";
import { SearchEngines } from "../../constants/constants";
import { UrlCheck } from "../../constants/functions";

export default function Input() {
  const [SearchEngine, setSearchEngine] = useState("Google");
  const [state, setState] = useState(true);

  const OnkeyDown = (e: any) => {
    if (e.key !== 'Enter') return;
    let target = (e.target as HTMLInputElement).value
    const engine = Object.values(SearchEngines).find(
      (engine) => engine.includes(SearchEngine.toLowerCase())
    ) || SearchEngines.google; // Default to Google if no match found
    const location = UrlCheck(target) ? String(target) : `${engine + encodeURIComponent(target)}`
    window.location.href = location;
    return target = ""; // Clear input after search
  }
  const DropdownClass = state ? "hidden" : "block";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full select-none mr-4 ">
      <div className="flex items-center w-full max-w-2xl">
        <div className="relative">
          <div className="flex items-center dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-900  px-3 py-3 max-md:py-0 rounded-l-lg cursor-pointer dark:hover:outline-gray-300 hover:outline-gray-600 hover:outline-1" onClick={() => setState(!state)}>
            <span className="mr-2">Engine: <span className="font-bold">{SearchEngine}</span></span>
            <ul className={`absolute top-full left-0 mt-1 dark:bg-gray-900 dark:text-white text-gray-800 bg-gray-300 rounded-lg p-2 w-full ${DropdownClass} z-50 shadow-lg`}>
              <li><button className="w-full text-left p-1 rounded" onClick={() => setSearchEngine("Google")}>Google</button></li>
              <li><button className="w-full text-left p-1 rounded" onClick={() => setSearchEngine("Bing")}>Bing</button></li>
              <li><button className="w-full text-left p-1 rounded" onClick={() => setSearchEngine("Duckduckgo")}>DuckDuckGo</button></li>
              <li><button className="w-full text-left p-1 rounded" onClick={() => setSearchEngine("Yahoo")}>Yahoo</button></li>
              <li><button className="w-full text-left p-1 rounded" onClick={() => setSearchEngine("Ecosia")}>Ecosia</button></li>
            </ul>
          </div>
        </div>

        <input
          type="text"
          className="flex-1 focus:outline-0  p-2 py-3 rounded-r-3xl bg-gray-100 dark:bg-gray-900 h-12 dark:text-white text-gray-800"
          placeholder="🔎   Search or type a URL"
          onKeyDown={OnkeyDown}
        />
      </div>
    </div>
  )
}
