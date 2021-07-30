import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Form() {
  const [teamId, setTeamId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamList, setTeamList] = useState([]);
  const [newName, setNewName] = useState("");
    
  useEffect(() => {
    Axios.get("http://localhost:4000/get").then((response) => {
      console.log(response.data);
      setTeamList(response.data);
    });
  },[]);

  const handleRegist = () => {
    setTeamList([...teamList, {id: teamId, name: teamName}]);

    Axios.post("http://localhost:4000/insert", {
      id: teamId,
      name: teamName
    });
  };

  const handleDelete = (teamId) => {
    Axios.delete("http://localhost:4000/delete/${teamId}");
  };

  const handleUpadate = (teamId) => {
    Axios.put("http://localhost:4000/update", {
      id: teamId,
      name: newName
    });
    setNewName("");
  }

  return (
    <>
      <form onSubmit="{handleRegist}">
        <div className="form-group">
          <label for="id">ID</label>
          <input type="text" name="id" id="id" className="form form-control"
          onChange={(e) => { setTeamId(e.target.value); }} />
        </div>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form form-control" name="name" id="name"
          onChange={(e) => { setTeamName(e.target.value); }} />
        </div>
        <button type="submit">登録</button>
      </form>
    </>
  );
}

