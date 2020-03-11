import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState([]);
  const [deleting, setDeleting] = useState(false);

  const del = id => {
    
    console.log('deleting', deleting)
    const delUrl = `http://localhost:3300/api/users/${id}`;
    axios
      .delete(delUrl)
      .then(res => {
        console.log(res);
        setDeleting(!deleting);
      })
      .catch(err => {
        console.log("error", err);
      });
  };
  
  useEffect(() => {
    const url = "http://localhost:3300/api/users"
      axios
        .get(url)
        .then(res => {
          console.log('deleting', deleting);
          console.log('res.data', res.data);
          setName(res.data);
        })
        .catch(err => {
          console.log("error", err);
        });
  }, [deleting]);

  return (
    <div>
      {name.map(names => {
        return (
          <div key={names.id}>
            <p>{names.name}</p>
            <p>{names.bio}</p>
            <button onClick={() => del(names.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
