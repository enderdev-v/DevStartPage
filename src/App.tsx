import Config from "./components/Config/ConfigMenu"
import ShortCuts from "./components/Input/ShortCuts"
import Input from "./components/Input/Input"
import Docs from "./components/LeftBar/Docs"
import Welcome from "./components/LeftBar/Welcome"

function App() {  

  return (
    <>
    <div className="m-4 mb-12 ">
      <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit ">
      <Docs></Docs>
      <Welcome></Welcome>
      </div>

        <div className="absolute top-4 right-4">
          <Config />
        </div>
    </div>
      <div className="m-16 mt-20">
        <div className="mt-36 flex flex-col items-center justify-center">
          <Input />
        </div>
        <ShortCuts></ShortCuts>
      </div>
    </>
  )
}

export default App
