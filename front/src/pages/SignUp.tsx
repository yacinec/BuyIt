import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { auth_register } from "../services/auth.service";
import { User } from "../types";

import { Button } from "../components";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast.success("Your account has been created!");

  const handleClick = async (event: any) => {
    event.preventDefault();
    if (username && password) {
      const user = new User(username, password);
      const result = await auth_register(user);
      if (result) {
        notify();
      }
    }
  };

  return (
    <div className='sign signup'>
      <div>
        <Toaster />
      </div>
      <main>
        <h2>Sign Up</h2>
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
          <Button submit={true}>Register</Button>
        </form>
        <p>
          Already have an account?{" "}
          <span className='bold'>
            <Link to='/signin'>Sign In</Link>
          </span>
        </p>
      </main>
    </div>
  );
}
