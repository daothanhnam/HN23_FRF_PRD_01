import "./App.css";
import { LifeCycle } from "./views/pages/life-cycle";
import RenderList from "./views/pages/render-list";
import Person from "./views/pages/basic-hook/Person";
import PersonPoint from "./views/pages/basic-hook/PersonPoint";
function App() {
  return (
    <div className="App">
      {/* <RenderList /> */}
      {/* <LifeCycle myColor="blue"/> */}
      <Person/>
      {/* <PersonPoint /> */}
    </div>
  );
}

export default App;
