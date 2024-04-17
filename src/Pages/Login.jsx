import { useState } from "react";
import bgimg from '../assets/bgimg2.jpg';
import { useUser } from "../lib/Context/UserProvider";
import './styles/Styles1.css';

function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <form className="initial-form-container" style={{ backgroundImage: `url(${bgimg})` }}>
        <h1 className="initial-heading">Login or Register</h1>
        <div className="email-input-field">
          <label>Email: <input
          type="email"
          placeholder="Email"
            value={email}
            className="email-input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          /></label>
        </div>
        <div className="password-input-field">
          <label>Password :<input
          type="password"
          placeholder="Password"
            value={password}
            className="password-input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          /></label>
        </div>
        <div>
          <button
            className="register-button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
          <button
            className="login-button"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
export default Login;