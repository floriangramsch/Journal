"use client";

import LoginForm from "@/components/LoginForm";
import Home from "@/components/Home";
import { useState } from "react";

const MyServerComponent = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  return (
    <div>
      {authenticated ? (
        <>
          <button
            className="absolute top-0 right-0 rounded-md bg-fg w-20 p-1 m-1 text-md"
            onClick={logout}
          >
            Logout
          </button>
          <Home authenticated={authenticated} />
        </>
      ) : (
        <LoginForm setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
};

export default MyServerComponent;
