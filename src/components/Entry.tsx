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
    <div className="bg-fg my-2 p-4 shadow rounded max-h-[8.5rem] w-full max-w-xs overflow-auto">
      <div className="font-bold text-lg mb-2">{formattedDate}</div>
      <div className="text-sm">{content}</div>
      <div className="text-xs mt-2">Happiness: {happiness}/10</div>
    </div>
  );
}
