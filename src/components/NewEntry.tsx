"use client";

import { useState } from "react";

// Neue Typen für Props
type NewEntryProps = {
  onNewEntry: () => void; // Callback, um nach dem Erstellen eines neuen Eintrags die Daten neu abzurufen
};

const NewEntry = ({ onNewEntry }: NewEntryProps) => {
  const createEntry = async () => {
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, happiness }),
    });
    if (!response.ok) {
      throw new Error("Fehler beim Erstellen des Eintrags");
    }
    // Nach dem Erstellen des Eintrags wird die onNewEntry-Funktion aufgerufen
    onNewEntry();
    setContent("");
    setHappiness(5);
  };

  const [content, setContent] = useState("");
  const [happiness, setHappiness] = useState(5);

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex flex-col space-y-5">
        <textarea
          className="rounded shadow p-3 w-96 h-64 bg-text text-2xl text-left align-top text-black focus:outline-fg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoFocus={true}
        />
        <div className="flex space-x-2 ">
          <div>{happiness}</div>
          <input
            className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-fg"
            type="range"
            min={1}
            max={10}
            value={happiness}
            onChange={(e) => setHappiness(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        className="rounded-md bg-fg w-20 p-2 m-1 text-xl"
        onClick={createEntry}
      >
        Submit
      </button>
    </div>
  );
};

export default NewEntry;
