import { useEffect, useState } from "react";
import Header from './Header.jsx';
import axios from "axios";
import Form from "./Form.jsx"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Pre() {

  return (
    <>
      <Header />
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreContainer__header">
            <h1>Pre</h1>
            <ul className=""></ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Pre;