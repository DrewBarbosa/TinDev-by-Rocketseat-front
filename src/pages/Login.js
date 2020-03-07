import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.svg";
import api from "../services/api";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await api.post("/devs", { username: username });
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="TinDev" />
        <input
          placeholder="Type your GitHub UserName"
          value={username}
          onChange={evt => setUsername(evt.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
