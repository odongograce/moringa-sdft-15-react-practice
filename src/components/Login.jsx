import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
       
        const user = data.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          navigate("/"); 
        } else {
          setError("Invalid email or password");
        }
      })
      
  }

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="form-control my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>

      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
}

export default Login;
