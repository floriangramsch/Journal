"use client";

import { useState } from "react";

export default function NewEntry() {
  const createEntry = async (content: string, happiness: number) => {
    const response = await fetch("/api/create ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, happiness }),
    });
    const data = await response.json();
    window.location.reload();
  };

  const [content, setContent] = useState("");
  const [happiness, setHappiness] = useState(1);

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex flex-col space-y-5">
        <textarea
          className="rounded shadow p-3 w-96 h-64 bg-text text-2xl text-left align-top text-black focus:outline-fg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoFocus={true}
        />
        <input
          className="rounded shadow text-center bg-text text-black focus:outline-fg"
          type="range"
          min={1}
          max={10}
          value={happiness}
          onChange={(e) => setHappiness(Number(e.target.value))}
        />
      </div>
      <button
        className="rounded-md bg-fg w-20 p-2 m-1 text-xl"
        onClick={() => createEntry(content, happiness)}
      >
        Submit
      </button>
    </div>
  );
}
