const Entry = ({
  date,
  content,
  happiness,
}: {
  date: Date;
  content: string;
  happiness: number;
}) => {
  const formattedDate = date.toLocaleDateString();

  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString().slice(-2);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const result = `${day}.${month}.${year} ${hours}:${minutes}Uhr`;
    return result;
  };

  formatDate(date);

  return (
    <div className="bg-fg my-2 p-4 shadow rounded max-h-[8.5rem] w-full max-w-xs overflow-auto">
      <div className="flex">
        {/* <div className="font-bold text-lg mb-2">{formattedDate}</div> */}
        <div className="font-bold text-lg mb-2">{formatDate(date)}</div>
        <div className="text-xs mt-2 ml-auto">Happiness: {happiness}/10</div>
      </div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

export default Entry;
