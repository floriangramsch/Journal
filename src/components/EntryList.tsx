"use client";

import { TEntry } from "@/helper/types";
import Entry from "./Entry";

type EntryListProps = {
  data: TEntry[]; // Optionaler Typ, falls data `undefined` sein könnte
};

export const EntryList = ({ data }: EntryListProps) => {
  if (!data || data.length === 0) {
    return <div>Keine Einträge vorhanden</div>; // Fallback, falls keine Daten
  }

  return (
    <div className="mt-10">
      {data.map((item: TEntry) => (
        <Entry
          key={item.id}
          date={new Date(item.date)}
          content={item.content}
          happiness={item.happiness}
        />
      ))}
    </div>
  );
};

export default EntryList;
