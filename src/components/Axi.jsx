import React, { useEffect, useState } from "react";
import axios from "axios";

const Axi = () => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Error!");
      });
  }, []);

  return (
    <>
      {users.length ? (
        <ul>
          {users.map((e) => {
            return (
              <>
                <li>{e.name}</li>
                <li>{e.username}</li>
                <li>{e.email}</li>
                <hr />
              </>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Axi;
