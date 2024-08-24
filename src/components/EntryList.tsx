import { TEntry } from "@/helper/types";
import Entry from "./Entry";

export default function EntryList({ data }: { data: TEntry[] }) {
  return (
    <div className="mt-10">
      {data &&
        data.map((item: TEntry) => {
          return (
            <Entry
              key={item.id}
              date={new Date(item.date)}
              content={item.content}
              happiness={item.happiness}
            />
          );
        })}
    </div>
  );
}
