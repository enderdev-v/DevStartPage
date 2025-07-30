import Config from "./components/Config"
import ShortCuts  from "./components/ShortCuts"
import Input from "./components/Input"

function App() {

  return (
    <div className="m-16">
      <Config></Config>
      <div className="mt-36 flex flex-col items-center justify-center">
        <Input />
      </div>
      <ShortCuts></ShortCuts>
    </div>
  )
}

export default App
