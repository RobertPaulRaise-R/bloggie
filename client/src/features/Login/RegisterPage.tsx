import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";

function RegisterPage() {
  const [invalid, setInvalid] = useState<boolean>(false);

  function checkPassword(value: string) {
    const invalidChars = /[<>"'`;\\|]/;

    const fail = (message: string): string => {
      setInvalid(true);
      return message;
    };

    if (value.length < 6) return fail("Too Weak");
    if (value.length < 8) return fail("Weak");
    if (!/\d/.test(value)) return fail("Weak (Should contain numbers)");
    if (value.length > 64) return fail("Password is Too Long");
    if (invalidChars.test(value)) return fail("Contains invalid characters");

    return "";
  }

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex flex-col gap-6">
        <label className="text-2xl font-bold text-stone-800">Register</label>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input
          type="password"
          placeholder="Password"
          onValueChange={checkPassword}
        />
        <Input type="password" placeholder="Confirm Password" />

        <button
          className="bg-stone-800 text-stone-50 py-3 disabled:bg-gray-400"
          disabled={invalid}
        >
          Sign Up
        </button>

        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="text-indigo-600">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
