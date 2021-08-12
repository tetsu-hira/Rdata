import { useEffect, useState } from "react";
import Header from './Header.jsx';
import axios from "axios";
import Form from "./Form.jsx";
import React from "react";
import Top from "./Top.jsx";
import Pre from "./Pre.jsx";
import Mid from "./Mid.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route path="/pre">
            <Pre />
          </Route>
          <Route path="/mid">
            <Mid />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;