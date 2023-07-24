import "./App.css";
import { LifeCycle } from "./views/pages/life-cycle";
import RenderList from "./views/pages/render-list";
import Person from "./views/pages/basic-hook/Person";
import PersonPoint from "./views/pages/basic-hook/PersonPoint";
import { ChangeEvent, useEffect, useState } from "react";
import { ElectionState } from "./views/pages/react-memo/Election.model";
import Couter from "./views/pages/react-memo/Couter";
import StatePicker from "./views/pages/react-memo/StatePicker";
import Summary from "./views/pages/react-memo/Summary";
import StyledComponent from "./views/pages/styled-components/StyledComponent";
import CSSModule from "./views/pages/css-module/CSSModule";
import UserCRUD from "./views/pages/debugging/UserCRUD";
import { ErrorBoundaryClass } from "./views/pages/error-boundaries/errorBoundariesClass";
import { BuggyCounter } from "./views/pages/error-boundaries/BuggyCounter";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./views/pages/error-boundaries/ErrorBoudariesFunction";
function App() {
  //react.memo
  const [selectedState, setSelectedState] = useState({} as ElectionState);
  const [elections, setElections] = useState([] as ElectionState[]);
  const [someKey, setSomeKey] = useState(null);

  useEffect(() => {
    fetch("https://5e7db521fa19eb0016519ec1.mockapi.io/elections")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch ");
        }
        return response.json();
      })
      .then((data) => {
        setElections(data);
      });
  }, []);
  const reRenderHandler = () => {
    setSelectedState({ ...selectedState });
  };
  const charSelectHander = (event: ChangeEvent<HTMLSelectElement>) => {
    const stateId = Number(event.target.value);
    const selecedState = elections.find((item) => item.id === stateId);

    setSelectedState(selecedState as ElectionState);
  };
  //end react.memo
  return (
    <div className="App">
      {/* <UserCRUD /> */}
      {/* Error Boundary function component  */}
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => setSomekey(null)} //reset the state of your app here
        resetKeys={[someKey]} //reset the error boundary when "someKey" changes
      >
        <BuggyCounter />
      </ErrorBoundary>
      {/*End Error Boundary function component  */}
      <hr />
      <ErrorBoundaryClass>
        <p>
          These two counter are inside the same error boundare. If one crashed,
          the error boundary will replace bout of them
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundaryClass>
      <p>
        These two counter are each  inside the same error boundare. If one crashed,
        the error boundary will replace bout of them
      </p>

      {/* <CSSModule></CSSModule> */}
      {/* Demo style component */}
      {/* <StyledComponent /> */}
      {/*End  Demo style component */}
      {/* Demo react.memo */}
      {/* <Couter />
      <hr />
      <StatePicker
        options={elections}
        seletedId={selectedState?.id}
        onSelectState={charSelectHander}
      />

      <hr />
      <Summary state={selectedState} />

      {selectedState.candidates && (
        <button onClick={reRenderHandler}>re Render</button>
      )} */}
      {/*  End Demo react.memo */}
      {/* <Person/> */}
      {/* <PersonPoint /> */}
      {/* <LifeCycle myColor="blue"/> */}
      {/* <RenderList /> */}
    </div>
  );
}

export default App;
function setSomekey(arg0: null): void {
  throw new Error("Function not implemented.");
}
