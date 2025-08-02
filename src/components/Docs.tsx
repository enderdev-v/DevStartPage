import { useState, } from "react";
import { DefaultDocs, } from "../constants/constants";
import Links from "./Links";

export default function Docs({ }) {
  const [state, setState] = useState(true);
  const [docs, addDocs] = useState(DefaultDocs);

  // functions
  
  
  
  const OnkeyDown = (e: any) => {
    if (e.key !== 'Enter') return;
    
    try {
        const url = new URL(e.target.value); // Validate URL
        fetch(url.href)
          .then(response => response.text())
          .then(html => {
            const match = html.match(/<title>(.*?)<\/title>/i);
            const title = match ? match[1] : url.hostname;
            addDocs([...docs, { name: title, url: url.href }]);
          })
          .catch(() => {
            addDocs([...docs, { name: url.hostname, url: url.href}]);
          });
      } catch {}
      return e.target.value = ""; // Clear input after adding

  }

  const DropdownClass = state ? "hidden" : "block";
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative left-0.5 top-0 w-60 rounded-2xl m-4 select-none">
      <div
        className="flex items-center dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-900  px-3 py-3 rounded-lg cursor-pointer hover:outline-indigo-700 hover:outline-1"
        onClick={() => setState(!state)}
      >
        <span className="text-lg">
          <i className="bx bxs-book-open"></i>&nbsp;Docs
        </span>
        <ul
          className={`absolute top-full left-0 mt-1 dark:bg-gray-900 dark:text-white text-gray-800 bg-gray-300 rounded-lg p-2 w-full ${DropdownClass} z-50 shadow-lg`}
        >
          {docs.map((doc, index) => (
            <Links key={index} name={doc.name} url={doc.url} />
          ))}
          <li className="w-full text-left p-1 rounded mt-1">
            <input
              className="w-full text-left p-1 rounded hover:outline-gray-600"
              placeholder="+ Add New Doc"
              onClick={handleInputClick}
              onKeyDown={OnkeyDown}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
