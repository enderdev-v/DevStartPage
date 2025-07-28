import { useState, type JSX } from "react"
import Shortcut from "./ShortCut";

export default function DirectAccess() {

  const [shortcuts, setShortcuts] = useState<JSX.Element[]>([]);
  const Onclick = () => {
    if (shortcuts.length >= 10) {
      alert("You can only have 10 shortcuts at most");
      return;
    }
    setShortcuts([...(shortcuts || []), <Shortcut url="https://enderdev.vercel.app" name="enderdev"></Shortcut>]);
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center text-white">
      <div className="mt-4">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded mt-2">
            {shortcut}
          </div>
        ))}
      </div>
      <button onClick={Onclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Shortcut
      </button>
    </div>
  )
}
