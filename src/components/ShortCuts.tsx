import { useState, type JSX } from "react"
import Shortcut from "./ShortCut";

export default function ShortCuts() {

  const [shortcuts, setShortcuts] = useState<JSX.Element[]>([]);
  const Onclick = () => {
    if (shortcuts.length >= 8) {
      return;
    }
    setShortcuts([...(shortcuts || []), <Shortcut url="https://enderdev.vercel.app" name="enderdev"></Shortcut>]);
  }
  const ButtonClass = shortcuts.length >= 8 ? "transparent text-transparent" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" ;

  return (
    <div className="mt-6 flex flex-col items-center justify-center text-white">
      <div className="mt-4 grid grid-cols-4 gap-4">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded mt-2">
            {shortcut}
          </div>
        ))}
        <button onClick={Onclick} className={ButtonClass}>
          <span className="text-3xl">+</span>
          <br />
          Add Shortcut
        </button>
        
      </div>
    </div>
  )
}
