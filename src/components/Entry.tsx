export default function Entry({
  date,
  content,
  happiness,
}: {
  date: Date;
  content: string;
  happiness: number;
}) {
  const formattedDate = date.toLocaleDateString();
  return (
    <div className="bg-fg my-1 p-1 shadow rounded max-h-32 w-96 overflow-auto">
      <div>{formattedDate}</div>
      <div>{content}</div>
    </div>
  );
}
