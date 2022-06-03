import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function SignUp() {
  return (
    <div className='sign signup'>
      <main>
        <h2>Sign Up</h2>
        <form action=''>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <Button>Register</Button>
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
