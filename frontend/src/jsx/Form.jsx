import React, { useState } from 'react';
import Axios from 'axios';
import axios from 'axios';

export default function Form() {
  const [values, setValues] = useState({
    name: ""
  });

  const  handleInputChange = () => {
    axios.post("/posts", {name: values})
  }
    

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert('追加されました');
  // };


  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form form-control"
            // onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleInputChange}>登録</button>
      </form>
    </>
  );
}

