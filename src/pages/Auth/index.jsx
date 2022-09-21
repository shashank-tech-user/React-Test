import React from 'react';
import { useForm } from "react-hook-form";
import { LockOpenIcon } from "@heroicons/react/20/solid";
import { EMAIL_PATTERN_MESSAGE, MinLengthMessage, REQUIRED_MESSAGE } from '../../constant/validation_message';
import { post } from '../../routes/api_call/common';
import { LOGIN_API } from '../../routes/api_route';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../context';
import { loginUser } from '../../context/action';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  const HandleLogin = async (data) => {
    try {
      const loginInfo = await loginUser(dispatch, data);
      alert(loginInfo.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://dummyimage.com/56X56/000/fff&text=LG"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(data => HandleLogin(data))} method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className='mb-3'>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                className={`relative block w-full appearance-none rounded border ${errors.email ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-indigo-500"} px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                placeholder="Email address"
                {...register("email", {
                  required: {
                    value: true,
                    message: REQUIRED_MESSAGE
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: EMAIL_PATTERN_MESSAGE
                  }
                })}
              />
              {errors.email && <small className='text-red-800 float-left mb-3'>{errors.email.message}</small>}
            </div>
            <>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={`relative block w-full appearance-none rounded border ${errors.password ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-indigo-500"} px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: REQUIRED_MESSAGE
                  }, minLength: {
                    value: 6,
                    message: MinLengthMessage(6)
                  }
                })}
              />
              {errors.password && <small className='text-red-800 float-left mb-3'>{errors.password.message}</small>}
            </>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center float-left">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockOpenIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
          <div className="text-sm">
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Click register if you don't have an account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login