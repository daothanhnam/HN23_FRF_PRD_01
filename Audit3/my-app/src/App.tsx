import "./App.css";
import { ChangeEvent, Suspense, lazy, useEffect, useState } from "react";
import { LifeCycle } from "./views/pages/life-cycle";
import RenderList from "./views/pages/render-list";
import Person from "./views/pages/basic-hook/Person";
import PersonPoint from "./views/pages/basic-hook/PersonPoint";
import { ElectionState } from "./views/pages/react-memo/Election.model";
import Couter from "./views/pages/react-memo/Couter";
import StatePicker from "./views/pages/react-memo/StatePicker";
import Summary from "./views/pages/react-memo/Summary";
import StyledComponent from "./views/pages/styled-components/StyledComponent";
import CSSModule from "./views/pages/css-module/CSSModule";
import UserCRUD from "./views/pages/debugging/UserCRUD";
import { ErrorBoundaryClass } from "./views/pages/error-boundaries/errorBoundariesClass";
import { BuggyCounter } from "./views/pages/error-boundaries/BuggyCounter";
// import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./views/pages/error-boundaries/ErrorBoudariesFunction";
import { Modal } from "./views/pages/portal/Modal";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Link } from "react-router-dom";
import Homepage from "./views/pages/react-router-dom/Homepage";
import Aboutpage from "./views/pages/react-router-dom/Aboutpage";
import { NavLink } from "react-router-dom";
import UserDetail from "./views/pages/react-router-dom/UserDetail";
import Users from "./views/pages/react-router-dom/User";
import LoginComponent from "./views/pages/react-router-dom/LogginComponent";
import ReactBasicForm from "./views/pages/react-form/ReactBasicForm";
import ReactFormik from "./views/pages/react-form/ReactFormik";
import { WithFetch } from "./views/pages/server-interaction/WithFetch";
import { WithAxios } from "./views/pages/server-interaction/WithAxios";
import ReactBootsrp from "./views/pages/ui-components/ReactBootsrp";
import { RecipesBook } from "./views/pages/ui-components/RecipeBook";
import UseContextHook from "./views/pages/context/UseContext";
import MobxComponent from "./views/mobx/components/MobComponent";
import ReduxComponent from "./views/pages/redux/components/ReduxComponent";

function App() {
  //react.memo
  const [selectedState, setSelectedState] = useState({} as ElectionState);
  const [elections, setElections] = useState([] as ElectionState[]);

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
  const [someKey, setSomeKey] = useState(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const LoginComponent = lazy(
    () => import("./views/pages/react-router-dom/LogginComponent")
  );

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <header>
          <nav className="navbar navbar-expand navbar-light bg-light">
            <a>FSOFT ACADEMY</a>

            <ul className="navbar-nav">
              {/* <li className="nav-item">

                <Link to="">Home</Link>

              </li>

              <li className="nav-item">

                <Link to="about">About</Link>

              </li> */}

              <li className="nav-item">
                <NavLink
                  to=""
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="about/100/Hieu"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="users"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Users
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="login"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="react-form"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  React Form
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="react-formik"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  React Formik
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="with-fetch"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  With fecth
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="with-axios"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  With Axios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="react-bootstrap"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  React Bootstrap
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="reacipe"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Recipe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="use-context"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Use context
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="mobx"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Mobx
                </NavLink>
                </li>
              <li className="nav-item">
                <NavLink
                  to="redux"
                  // className={({ isActive, isPending }) =>

                  //   isActive ? "active-link" : ""

                  // }

                  style={({ isActive, isPending }) => {
                    return { fontWeight: isActive ? "bold" : "" };
                  }}
                >
                  Redux
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="*" element={<h3>Not found</h3>} />
              <Route path="" element={<Homepage />} />
              <Route
                path="about/:studentId/:studentName"
                element={<Aboutpage />}
              />
              <Route
                path="users/*"
                element={isLoggedIn ? <Users /> : <Navigate to="/login" />}
              />
              <Route
                path="login"
                element={
                  <LoginComponent
                    isLoggedIn={isLoggedIn}
                    setLoggedIn={setLoggedIn}
                  />
                }
              />
              <Route path="react-form" element={<ReactBasicForm />}></Route>
              <Route path="react-formik" element={<ReactFormik />}></Route>
              <Route path="with-fetch" element={<WithFetch />}></Route>
              <Route path="with-axios" element={<WithAxios />}></Route>
              <Route path="react-bootstrap" element={<ReactBootsrp />}></Route>
              <Route path="reacipe" element={<RecipesBook />}></Route>
              <Route path="use-context" element={<UseContextHook />}></Route>
              <Route path="mobx" element={<MobxComponent />}></Route>
              <Route path="redux" element={<ReduxComponent />}></Route>
            </Routes>
          </Suspense>
        </main>
        <footer>FSoft - 17 Duy Tan </footer>
      </div>
      {/* //   <Modal open={openModal}>
    //     <h2>Dialog</h2>
    //     <p>Lorem ipsum dolor sit amet...</p>
    //     <p>Lorem, ipsum...</p>
    //     <div style={{ flex: 1 }}>
    //       <button className="button" onClick={() => setOpenModal(false)}>
    //         Ok
    //       </button>
    //     </div>
    //   </Modal>
    //   <button onClick={() => setOpenModal(true)}> Open dialog </button> */}
      {/* // //{" "} */}
      {/* <UserCRUD />
    //   {/* Error Boundary function component  */}
      {/* //{" "} */}
      {/* <ErrorBoundary
    //     FallbackComponent={ErrorFallBack}
    //     onReset={() => setSomekey(null)} //reset the state of your app here
    //     resetKeys={[someKey]} //reset the error boundary when "someKey" changes
    //   >
    //     <BuggyCounter />
    //   </ErrorBoundary> */}
      {/* // End Error Boundary function component 
      //{" "} */}
      {/* <hr />
    //   <ErrorBoundaryClass>
    //     <p>
    //       These two counter are inside the same error boundare. If one crashed,
    //       the error boundary will replace bout of them
    //     </p>
    //     <BuggyCounter />
    //     <BuggyCounter />
    //   </ErrorBoundaryClass>
    //   <p>
    //     These two counter are each  inside the same error boundare. If one crashed,
    //     the error boundary will replace bout of them
    //   </p> */}
      {/* // <CSSModule></CSSModule>
      // {/* Demo style component */}
      {/* // <StyledComponent /> */}
      {/*End  Demo style component */}
      {/* Demo react.memo */}{" "}
      {/* <Couter />
    //   <hr />
    //   <StatePicker
    //     options={elections}
    //     seletedId={selectedState?.id}
    //     onSelectState={charSelectHander}
    //   />

    //   <hr />
    //   <Summary state={selectedState} />

    //   {selectedState.candidates && (
    //     <button onClick={reRenderHandler}>re Render</button>
    //   )} */}
      {/*  End Demo react.memo */}
      {/* <Person/> */}
      {/* <PersonPoint /> */}
      {/* <LifeCycle myColor="blue"/> */}
      {/* <RenderList /> */}{" "}
    </BrowserRouter>
  );
}

export default App;
function setSomekey(arg0: null): void {
  throw new Error("Function not implemented.");
}
