"use client";

import NewEntry from "@/components/NewEntry";
import { useEffect, useState } from "react";
import EntryList from "./EntryList";

const Home = ({ authenticated }: { authenticated: boolean }) => {
  const [data, setData] = useState<any>();
  const [showEntryList, setShowEntryList] = useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      fetch("/api/getData")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
        });
    }
  }, [authenticated]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="absolute top-0 left-0 rounded-md bg-fg w-20 p-1 m-1 text-md"
        onClick={() => setShowEntryList(!showEntryList)}
      >
        Einträge
      </button>
      {showEntryList ? <EntryList data={data} /> : <NewEntry />}
      {/* <div className="flex overflow-x-auto snap-x snap-mandatory">
        <EntryList data={data} />
        <NewEntry />
      </div> */}
    </div>
  );
};

export default Home;
