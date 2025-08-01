import { useState, type FormEvent, type JSX } from "react"
import Shortcut from "./ShortCut";
import Modal from "./Modal";

export default function ShortCuts() {
  // States 
  const [modalState, setModalState] = useState(false);
  const [shortcuts, setShortcuts] = useState<JSX.Element[]>([]);
  
  // Functions 

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, url } = e.target as HTMLFormElement
    if (!name || !url || !(name as any).value || !(url as any).value) {
      return alert("Please fill all fields");
    }
    
    console.log((name as any).value, url.value);
    if (shortcuts.length >= 8) {
      return;
    }
    setShortcuts([...(shortcuts || []), <Shortcut url={url.value} name={(name as any).value}></Shortcut>]);
    
  }

  const Onclick = () => {
    setModalState(!modalState);
  }
  const ButtonClass = shortcuts.length >= 8 ? "hidden" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" ;

  return (
    <div className="mt-6 flex flex-col items-center justify-center text-white">
      <div className="mt-4 grid grid-cols-4 gap-4">
        {shortcuts.map((shortcut, index) => (
          <div key={index}>
            {shortcut}
          </div>
        ))}
        <button onClick={Onclick} className={ButtonClass}>
          <span className="text-3xl">+</span>
          <br />
          Add Shortcut
        </button>
        
      </div>
        <Modal state={modalState} onSubmit={onSubmit}/> {/* Todo bien :D*/}
    </div>
  )
}
