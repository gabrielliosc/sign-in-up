import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {

  return (
    <div className="bg-slate-800 h-screen">
      <Button />
      <Input type="email" />
      <Input type="password" />
    </div>
  )
}

export default App
