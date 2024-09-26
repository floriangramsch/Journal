"use client";

import { useState } from "react";
import Home from "./Home";
import { LoginForm } from "./LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
