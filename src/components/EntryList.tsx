'use client'

import { TEntry } from "@/helper/types";
import Entry from "./Entry";

type EntryListProps = {
  data: TEntry[] | undefined;
};

export default function EntryList({ data }: EntryListProps) {
  return (
    <div className="mt-10">
      {data &&
        data.map((item: TEntry) => (
          <Entry
            key={item.id}
            date={new Date(item.date)}
            content={item.content}
            happiness={item.happiness}
          />
        ))}
    </div>
  );
}
