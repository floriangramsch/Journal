"use client";

import NewEntry from "@/components/NewEntry";
import { useEffect, useState } from "react";
import EntryList from "./EntryList";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const authed = localStorage.getItem("isLoggedIn") === "true";
    if (authed) {
      fetch("/api/getData")
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
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
