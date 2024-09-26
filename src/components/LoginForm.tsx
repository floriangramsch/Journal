"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const LoginForm = ({
  setAuthenticated,
}: {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
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
      localStorage.setItem("token", data.token);
      setAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      setAuthenticated(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
};
