import "./App.css";
import { LifeCycle } from "./views/pages/life-cycle";
import RenderList from "./views/pages/render-list";

function App() {
  return (
    <div className="App">
      {/* <RenderList /> */}
      <LifeCycle myColor="blue"/>
    </div>
  );
}

export default App;
