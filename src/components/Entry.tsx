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
    <div className="bg-green-300 my-2 p-1 shadow rounded">
      <div>{formattedDate}</div>
      <div>{content}</div>
    </div>
  );
}
