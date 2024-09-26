"use client";

import NewEntry from "@/components/NewEntry";
import { useEffect, useState } from "react";
import EntryList from "./EntryList";
import { TEntry } from "@/helper/types";
import { useQuery } from "@tanstack/react-query";
import fetchEntries from "@/app/lib/getData";

// const fetchEntries = async (): Promise<TEntry[]> => {
//   const token = localStorage.getItem("token");
//   const response = await fetch("/api/getData", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`, // Token im Authorization-Header senden
//     },
//     cache: "no-store",
//   });
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await response.json();

//   // Optional: Überprüfen, ob die Datenstruktur korrekt ist
//   if (!Array.isArray(data.data)) {
//     throw new Error("Invalid data format");
//   }

//   return data.data;
// };

const Home = ({ authenticated }: { authenticated: boolean }) => {
  const [showEntryList, setShowEntryList] = useState<boolean>(false);

  // Verwende useQuery, um die Daten zu laden
  const { data, error, isLoading, refetch } = useQuery<TEntry[]>({
    queryKey: ["entries"],
    queryFn: fetchEntries,
    enabled: authenticated,
    staleTime: 0, // Die Daten gelten sofort als veraltet
    gcTime: 0, // Kein Cache für diese Abfrage
  });

  // Fehler- und Ladebehandlung
  if (isLoading) return <div>Lädt...</div>;
  if (error) return <div>Fehler: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="absolute top-0 left-0 rounded-md bg-fg w-20 p-1 m-1 text-md"
        onClick={() => setShowEntryList(!showEntryList)}
      >
        Einträge
      </button>
      {data && showEntryList ? (
        <EntryList data={data} />
      ) : (
        <NewEntry onNewEntry={refetch} />
      )}{" "}
    </div>
  );
};

export default Home;
