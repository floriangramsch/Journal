"use client";

import { useEffect, useState } from "react";

export default function LoginForm() {
  const [password, setPassword] = useState("");

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authed = localStorage.getItem("isLoggedIn") === "true";
    setAuthenticated(authed);
  }, []);

  const auth = async () => {
    const response = await fetch("/api/authentificate ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    if (data.result) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.setItem("isLoggedIn", "false");
    }
    window.location.reload();
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  return (
    <div className="mb-1">
      {authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={auth}>Auth!</button>
        </div>
      )}
    </div>
  );
}
