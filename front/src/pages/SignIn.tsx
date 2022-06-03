import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function SignIn() {
  return (
    <div className='sign signin'>
      <main>
        <h2>Sign In</h2>
        <form action=''>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <Button>Login</Button>
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
