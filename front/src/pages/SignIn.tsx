import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { login } from "../redux/action-creators";
import { auth_login } from "../services/auth.service";
import { Tokens, User } from "../types";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (event: any) => {
    event.preventDefault();
    if (username && password) {
      const user = new User(username, password);
      const result = await auth_login(user);

      dispatch(
        login(
          result.user._id,
          new Tokens(result.accessToken, result.refreshToken, result.expiresIn)
        )
      );
    }
  };

  return (
    <div className='sign signin'>
      <main>
        <h2>Sign In</h2>
        <form onSubmit={handleClick}>
          <input
            type='text'
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button submit={true}>Login</Button>
        </form>
        <p>
          Don't have an account yet?{" "}
          <span className='bold'>
            <Link to='/signup'>Sign Up</Link>
          </span>
        </p>
      </main>
    </div>
  );
}
