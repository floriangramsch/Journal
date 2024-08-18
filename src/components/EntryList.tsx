import Entry from "./Entry";

export default function EntryList({data}: any) {
  return (
    <div>
      {data.map(
        (item: {
          id: number;
          date: Date;
          content: string;
          happiness: number;
        }) => (
          <Entry
            key={item.id}
            date={item.date}
            content={item.content}
            happiness={item.happiness}
          />
        )
      )}
    </div>
  );
}
