import React from "react";
import { useState } from "react";
import Axios from "axios";

export default function Form() {
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");
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
    setVegeList([...vegeList, { id: teamId, name: teamName }]);
  
    Axios.post("http://localhost:4000/create", {
      id: teamId,
      name: teamName
    });
    console.log(teamName);
  };

  // const handleDelete = (teamId) => {
  //   Axios.delete(`http://localhost:4000/delete/${teamId}`);
  // };

  // const handleUpdate = (teamId) => {
  //   Axios.put("http://localhost:4000/update", {
  //     id: teamId,
  //     name: newName,
  //     color: newColor,
  //   });
  //   setNewName("");
  //   setNewColor("");
  // };

  return (
    <form onSubmit={handleRegist} className="Form">
      <div className="FormContent">
        <label htmlFor="id"></label>
        <input type="text" className="FormContent__id" name="id" id="id"
        onChange={(e) => { setTeamId(e.target.value); }} />
        <label htmlFor="name"></label>
        <input type="text" className="FormContent__name" name="name" id="name"
        onChange={(e) => { setTeamName(e.target.value); }} />
      </div>
      <button type="submit">＋ 新規登録 </button>
    </form>
  )
}