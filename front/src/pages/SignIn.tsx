import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { login } from "../redux/action-creators";
import { auth_login } from "../services/auth.service";
import { Tokens, User } from "../types";

import { Button } from "../components";

interface SignInInputs {
  username: string;
  password: string;
}

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInInputs>();
  const onSubmit: SubmitHandler<SignInInputs> = (data) => handleClick(data);

  const dispatch = useDispatch();

  const handleClick = async (data: SignInInputs) => {
    if (data.username && data.password) {
      const user = new User(data.username, data.password);

      try {
        const result = await auth_login(user);
        console.log(result);
        dispatch(
          login(
            result._id,
            new Tokens(
              result.accessToken,
              result.refreshToken,
              result.expiresIn
            )
          )
        );
      } catch (error) {
        if (error === "Not Found") {
          toast.error("Username and pasword do not match!");
        }
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
    <div className='sign signin'>
      <div>
        <Toaster />
      </div>
      <main>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Username'
            {...register("username", {
              required: true,
              minLength: 1,
              maxLength: 20,
            })}
          />
          <input
            type='password'
            placeholder='Password'
            {...register("password", { required: true, minLength: 1 })}
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
