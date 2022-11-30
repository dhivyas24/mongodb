import React, { useState } from "react";

function SignUp() {
  const [registered, setRegistered] = useState(false);

  const routeToSignIn = () => {
    setRegistered(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("User created successfully!");
        setRegistered(true);
      } else if (response.status === 500) {
        console.error("Server error:", response.statusText);
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      {registered ? (
        <p>User created successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>
          <br />
          <label>
            Email Address:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      )}
      <p>
        Already have an account?{" "}
        <button onClick={routeToSignIn}>Sign In</button>
      </p>
    </div>
  );
}

export default SignUp;
