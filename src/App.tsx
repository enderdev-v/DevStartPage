import Config from "./components/Config"
import DirectAccess from "./components/DirectAccess"
import Input from "./components/Input"

function App() {

  return (
    <div className="m-16">
      <Config></Config>
      <div className="mt-36 flex flex-col items-center justify-center">
        <Input />
      </div>
      <DirectAccess></DirectAccess>
    </div>
  )
}

export default App
