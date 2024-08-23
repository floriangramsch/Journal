import Entry from "./Entry";

export default function EntryList({ data }: any) {
  return (
    <div>
      {data &&
        data.map(
          (item: {
            id: number;
            date: Date;
            content: string;
            happiness: number;
          }) => {
            return (
              <Entry
                key={item.id}
                date={new Date(item.date)}
                content={item.content}
                happiness={item.happiness}
              />
            );
          }
        )}
    </div>
  );
}
