// import Config from "./components/Config"
import ShortCuts from "./components/ShortCuts"
import Input from "./components/Input"
import Docs from "./components/Docs"

function App() {

  return (
    <>
    <div className="m-4 mb-12">

      <Docs></Docs>
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
