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

function Mid() {

  return (
    <>
      <Header />
      <h2>Mid</h2>
    </>
  );
}

export default Mid;