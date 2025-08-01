import { useState, type FormEvent } from "react";
import { DefaultDocs } from "../constants/constants";
import Links from "./Links";
import Modal from "./Modal";

export default function Docs({ }) {
  const [state, setState] = useState(true);
  const [docs, addDocs] = useState(DefaultDocs);

  // function to handle form submission
  


  const DropdownClass = state ? "hidden" : "block";

  return (
    <div className="relative left-0.5 top-0 w-60 rounded-2xl m-4 select-none">
      <div className="flex items-center dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-900  px-3 py-3 rounded-lg cursor-pointer hover:outline-indigo-700 hover:outline-1" onClick={() => setState(!state)}>
        <span className="mr-2"><i className='bx bxs-book-open'></i>&nbsp;Docs</span>
        <ul className={`absolute top-full left-0 mt-1 dark:bg-gray-900 dark:text-white text-gray-800 bg-gray-300 rounded-lg p-2 w-full ${DropdownClass} z-50 shadow-lg`}>
          {docs.map((doc, index) => (
            <Links key={index} name={doc.name} url={doc.url} />
          ))}
          <li className="w-full text-left p-1 rounded mt-1">
            <button className="w-full text-left p-1 rounded hover:outline-gray-600 cursor-pointer" onClick={() => alert("Feature not implemented yet")}>
              <i className='bx bx-plus'></i>&nbsp;Add New Doc
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
