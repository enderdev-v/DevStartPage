// import Config from "./components/Config"
import ShortCuts from "./components/ShortCuts"
import Input from "./components/Input"
import Docs from "./components/Docs"
import Welcome from "./components/Welcome"

function App() {

  return (
    <>
    <div className="m-4 mb-12 ">
      <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit ">
      <Docs></Docs>
      <Welcome></Welcome>
      </div>

    </div>
      <div className="m-16 mt-20">
        {/* <Config></Config> */}
        <div className="mt-36 flex flex-col items-center justify-center">
          <Input />
        </div>
        <ShortCuts></ShortCuts>
      </div>
    </>
  )
}

export default App
