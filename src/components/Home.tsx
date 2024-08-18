"use client";

import NewEntry from "@/components/NewEntry";
import { useEffect, useState } from "react";
import EntryList from "./EntryList";

const Home = ({ data }: any) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authed = localStorage.getItem("isLoggedIn") === "true";
    setAuthenticated(authed);
  }, []);

  return (
    <div>
      <NewEntry />
      {authenticated ? <EntryList data={data} /> : null}
    </div>
  );
};

export default Home;
