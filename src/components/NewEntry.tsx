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
    <div className="flex flex-col">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="number"
        min={1}
        max={10}
        value={happiness}
        onChange={(e) => setHappiness(Number(e.target.value))}
      />
      <button onClick={() => createEntry(content, happiness)}>Submit</button>
    </div>
  );
}
