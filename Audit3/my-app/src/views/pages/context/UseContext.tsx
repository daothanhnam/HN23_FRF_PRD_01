import React, { Fragment, useContext } from "react";
import { useState } from "react";
import UserContext from "./user.context";

const NotificationContext = React.createContext([] as string[]);
const NotificationContext2 = React.createContext([] as string[]);

export default function UseContextHook() {
  const [username, setUsername] = useState<string>("FSoft");
  const [email, setEmail] = useState<string>("FSoft@fsoft.com.vn");
  const userCtxValue = {
    username,
    email,
    onUpdateUser: setUsername,
    onUpdateEmail: setEmail,
  };

  return (
    <UserContext.Provider value={userCtxValue}>
      <NotificationContext.Provider value={["Noti 1", "Noti2 "]}>
        <NotificationContext2.Provider value={["Noti 3 ", "Noti4", "Noti5"]}>
          <UserNotiBar></UserNotiBar>
        </NotificationContext2.Provider>
      </NotificationContext.Provider>
    </UserContext.Provider>
  );
}
function UserNotiBar() {
  return <UserNotiBar1 />;
}
function UserNotiBar1() {
  return <UserNotiBar2 />;
}
function UserNotiBar2() {
  return <UserNotiBar3 />;
}
function UserNotiBar3() {
  return <UserNotiBar4 />;
}
function UserNotiBar4() {
  return <UserNotiBarMain />;
}

function UserNotiBarMain() {
  const { username, email, onUpdateUser, onUpdateEmail } =
    useContext(UserContext);
  const notificaiton = useContext(NotificationContext);
  const notificaiton2 = useContext(NotificationContext2);
  return (
    <Fragment>
      <h2>Welcom {username}</h2>
      <h3>Your Email: {email}</h3>
      <h3>
        Your have {notificaiton.length} new notification and {""}
        {notificaiton2.length} old notification
      </h3>
      <button onClick={() => onUpdateUser("Fsoft academy ")}>
        {" "}
        Change username
      </button>
      <button onClick={() => onUpdateEmail("FPT@FPT.com.vn ")}>
        Change email
      </button>
    </Fragment>
  );
}

// export default function UseContextHook() {
//   const [username, setUsername] = useState<string>("FSoft");
//   const [email, setEmail] = useState<string>("FSoft@fsoft.com.vn");
//   const userCtxValue = {
//     username,
//     email,
//     onUpdateUser: setUsername,
//     onUpdateEmail: setEmail,
//   };
//   return (
//     <UserContext.Provider value={userCtxValue}>
//       <UserContext.Consumer>
//         {(user) => (
//           <NotificationContext.Provider value={["Noti 1", "Noti2 "]}>
//             <NotificationContext.Consumer>
//               {(notification) => (
//                 <NotificationContext2.Provider
//                   value={["Noti 3 ", "Noti4", "Noti5"]}
//                 >
//                   <NotificationContext2.Consumer>
//                     {(notificaiton2) => (
//                       <Fragment>
//                         <h2>Welcom {user.username}</h2>
//                         <h3>Your Email: {user.email}</h3>
//                         <h3>
//                           Your have {notification.length} new notification and{" "}
//                           {""}
//                           {notificaiton2.length} old notification
//                         </h3>
//                         <button
//                           onClick={() => user.onUpdateUser("Fsoft academy ")}
//                         >
//                           Change username
//                         </button>
//                         <button
//                           onClick={() => user.onUpdateEmail("FPT@FPT.com.vn ")}
//                         >
//                           Change email
//                         </button>
//                       </Fragment>
//                     )}
//                   </NotificationContext2.Consumer>
//                 </NotificationContext2.Provider>
//               )}
//             </NotificationContext.Consumer>
//           </NotificationContext.Provider>
//         )}
//       </UserContext.Consumer>
//     </UserContext.Provider>
//   );
