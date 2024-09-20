"use client";

import NewEntry from "@/components/NewEntry";
import { useEffect, useState } from "react";
import EntryList from "./EntryList";
import { TEntry } from "@/helper/types";

const Home = ({ authenticated }: { authenticated: boolean }) => {
  const [data, setData] = useState<TEntry[]>();
  const [showEntryList, setShowEntryList] = useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      console.log("test");
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
      {data && showEntryList ? <EntryList data={data} /> : <NewEntry />}
      {/* <div className="flex overflow-x-auto snap-x snap-mandatory">
        <EntryList data={data} />
        <NewEntry />
      </div> */}
    </div>
  );
};

export default Home;
