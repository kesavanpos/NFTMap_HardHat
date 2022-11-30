import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { Dapp } from "./components/Dapp";

// import AdminLayout from "./layouts/Admin.js";

// We import bootstrap here, but you can remove if you want
import "bootstrap/dist/css/bootstrap.css";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <HashRouter>
//     <Switch>
//       {/* <Route path={`/auth`} component={AuthLayout} /> */}
//       <Route path={`/admin`} component={AdminLayout} />
//       {/* <Route path={`/rtl`} component={RTLLayout} /> */}
//       <Redirect from={`/`} to="/admin/dashboard" />
//     </Switch>
//   </HashRouter>,
//   document.getElementById("root")
// );
