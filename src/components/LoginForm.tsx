"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function LoginForm({
  setAuthenticated,
}: {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const authed = localStorage.getItem("isLoggedIn") === "true";
    setAuthenticated(authed);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        auth();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [password]);

  const auth = async () => {
    const response = await fetch("/api/authentificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    if (data.result) {
      localStorage.setItem("isLoggedIn", "true");
      setAuthenticated(true);
    } else {
      localStorage.setItem("isLoggedIn", "false");
      setAuthenticated(false);
    }
    // window.location.reload();
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="rounded-xl shadow p-3 bg-text text-black focus:outline-fg"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        autoFocus={true}
      />
      <button className="rounded-md bg-fg w-28 p-2 m-8 text-xl" onClick={auth}>
        Journal
      </button>
    </div>
  );
}
