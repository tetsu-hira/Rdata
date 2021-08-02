import React from "react";
import { useState } from "react";
import Axios from "axios";

export default function Form() {
  const [vegeName, setVegeName] = useState("");
  // const [vegeId, setVegeId] = useState("");
  // const [vegeColor, setVegeColor] = useState("");

  const [vegeList, setVegeList] = useState([]);

  // const [newName, setNewName] = useState("");
  // const [newColor, setNewColor] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:4000/get").then((response) => {
  //     console.log(response.data);
  //     setVegeList(response.data);
  //   });
  // }, []);

  const handleRegist = () => {
    setVegeList([...vegeList, { name: vegeName }]);
  
    Axios.post("http://localhost:4000/create", {
      name: vegeName
    });
    console.log(vegeName);
  };

  // const handleDelete = (vegeId) => {
  //   Axios.delete(`http://localhost:4000/delete/${vegeId}`);
  // };

  // const handleUpdate = (vegeId) => {
  //   Axios.put("http://localhost:4000/update", {
  //     id: vegeId,
  //     name: newName,
  //     color: newColor,
  //   });
  //   setNewName("");
  //   setNewColor("");
  // };

  return (
    <form onSubmit={handleRegist}>
    <div className="form-group">
      <label htmlFor="name">Team Name</label>
      <input type="text" className="form form-control" name="name" id="name"
      onChange={(e) => { setVegeName(e.target.value); }} />
    </div>
    <button type="submit">Enter</button>
  </form>
  )
}