import { useState, type FormEvent } from "react"
import Shortcut from "./ShortCut";
import Modal from "./Modal";
import type { ShortCutType } from "../../types";

export default function ShortCuts() {
  // States 
  const [modalState, setModalState] = useState(false);
  const [shortcuts, setShortcuts] = useState<ShortCutType[]>([]);
  
  // Functions 

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, url } = e.target as HTMLFormElement
    if (!name || !url || !(name as any).value || !(url as any).value) {
      return;
    }
    if (shortcuts.length >= 8) {
      return;
    }
    const newShortcut: ShortCutType = {
      name: (name as any).value,
      url: (url as any).value
    };
    setShortcuts([...(shortcuts || []), newShortcut]);
    return setModalState(!modalState);
  }

  const Onclick = () => {
    setModalState(!modalState);
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center text-white">
      <div className="mt-4 grid grid-cols-4 gap-4">
        {shortcuts.map((shortcut, index) => (
          <Shortcut url={shortcut.url} name={shortcut.name} key={index}></Shortcut>
        ))}
        <button onClick={Onclick} className={
          shortcuts.length >= 8 ? "hidden" : 
          "dark:hover:bg-gray-800 hover:bg-gray-500  text-white font-bold py-1 px-2 cursor-pointer dark:bg-gray-800/50 bg-gray-500/50 h-28 w-24 rounded-lg relative"}>
          <span className="text-3xl">+</span>
          <br />
          Add Shortcut
        </button>
        
      </div>
        <Modal state={modalState} onSubmit={onSubmit}/> {/* Todo bien :D*/}
    </div>
  )
}
