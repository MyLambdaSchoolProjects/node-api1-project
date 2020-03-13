import React, { useState} from "react";
import axios from "axios";

const NewName = (props) => {
  const [addName, setAddName] = useState({ name: "", bio: "" });

  const change = e => {
    e.preventDefault();
    setAddName({
      ...addName,
      [e.target.name]: e.target.value
    });
    console.log('addName',addName);
  };

  const submit = (e, url = "http://localhost:3300/api/users/") => {
    e.preventDefault();
    axios
      .post(url, {name: addName.name, bio: addName.bio})
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  return (
    <div id='addForm'>
      <form id='form' onSubmit={submit}>
        <input
          name="name"
          onChange={change}
          value={addName.name}
          type="text"
          placeholder="Name"
        />
        <input
          name="bio"
          onChange={change}
          value={addName.bio}
          type="text"
          placeholder="Bio"
        />
        <button type='submit' id="btn">Submit</button>
      </form>
    </div>
  );
};

export default NewName;