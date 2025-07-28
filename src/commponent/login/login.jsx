import { useState } from "react";

const Login = () => {
     const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen ">
         <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-md">
      <div className="card-body">
        <div className="text-center mb-3">
          <a className="text-2xl font-bold" href="/" data-discover="true">
            <span className="text-primary">Hobby</span>
            <span className="text-base-content">Hub</span>
          </a>
          <p className="text-center mt-1">Enter your login credentials.</p>
        </div>

        <fieldset className="fieldset space-y-3">
          <label className="label">Email</label>
          <input
            className="input input-bordered w-full"
            placeholder="Email"
            type="email"
            name="email"
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              required
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45z" />
              </svg>
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-neutral mt-4 flex items-center justify-center gap-2"
          >
            <span className="loading loading-spinner text-success hidden"></span>
            Login
          </button>

          <button
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 48 48"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
              C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20
              C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
              c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
              C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
              C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025
              C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238
              C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-sm text-center mt-3">
            Don't have an account?{" "}
            <a
              className="link link-hover text-blue-500"
              href="/register"
              data-discover="true"
            >
              Register now.
            </a>
          </p>
        </fieldset>
      </div>
    </form>
    </div>
  );
}
export default Login;