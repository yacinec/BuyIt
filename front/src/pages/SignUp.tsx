import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { auth_register } from "../services/auth.service";
import { User } from "../types";

import { Button } from "../components";

interface SignUpInputs {
  username: string;
  password: string;
}

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => handleClick(data);

  const handleClick = async (data: any) => {
    if (data.username && data.password) {
      const user = new User(data.username, data.password);
      const result = await auth_register(user);
      if (result.message) {
        toast.error("Username and pasword do not match!");
      }

      if (result) {
        toast.success("Your account has been created!");
      }
    } else {
      toast.error("All fields need to be filled!");
    }
  };

  useEffect(() => {
    if (errors.password || errors.username) {
      toast.error("All fields need to be filled!");
    }
    return () => {};
  }, [errors]);

  return (
    <div className='sign signup'>
      <div>
        <Toaster />
      </div>
      <main>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Username'
            {...register("username", {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />
          <input
            type='password'
            placeholder='Password'
            {...register("password", { required: true, minLength: 12 })}
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
