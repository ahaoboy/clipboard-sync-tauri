import { createSignal } from "solid-js";
import "./App.css";
import { readText, } from "@tauri-apps/plugin-clipboard-manager";

function App() {
  const [getList, setList] = createSignal<string[]>([])

  setInterval(async () => {
    const text = await readText()
    if (text !== getList().at(-1)) {
      setList([...getList(), text])
      console.log(text, getList())
    }
  }, 100)

  return (
    <div class="container">
      <div>{
        getList().map(i => <p>{i}</p>)}</div>
    </div>
  );
}

export default App;
