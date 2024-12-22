import { SyntheticEvent } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

function handleSubmit(e: SyntheticEvent) {
  e.preventDefault();
}

function LoginPage() {
  return (
    <div className="mt-20 flex justify-center items-center">
      <form className="flex flex-col gap-6">
        <label className="text-2xl font-bold text-stone-800">Login</label>
        <Input type="email" placeholder="Email or username" />
        <Input type="password" placeholder="Password" />
        <button
          onSubmit={(e) => handleSubmit(e)}
          className="bg-stone-800 text-stone-50 py-3"
        >
          Sign In
        </button>

        <label className="text-center">
          <p>
            Forget{" "}
            <Link to="forget" className="text-indigo-600">
              email or password?
            </Link>
          </p>

          <p>
            Don't you have an account?{" "}
            <Link to="/register" className="text-indigo-600">
              Sign Up
            </Link>
          </p>
        </label>
      </form>
    </div>
  );
}

export default LoginPage;
