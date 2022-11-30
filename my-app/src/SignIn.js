import * as React from "react";
import axios from "axios";

function SignIn({ registered, setRegistered }) {
  const routeToSignUp = () => {
    setRegistered(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post("/signin", {
        email: data.get("email"),
        password: data.get("password"),
      });
      console.log("try");
      console.log(response.data);
      // Handle successful sign-in here, such as updating state or redirecting to another page.
    } catch (error) {
      console.log(error.response.data);
      // Handle sign-in error here, such as displaying an error message.
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="remember">
          <input type="checkbox" id="remember" name="remember" /> Remember me
        </label>
        <button type="submit">Sign In</button>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={routeToSignUp}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
