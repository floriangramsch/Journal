import { TEntry } from "@/helper/types";

const fetchEntries = async (): Promise<TEntry[]> => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/getData", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Token im Authorization-Header senden
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  // Optional: Überprüfen, ob die Datenstruktur korrekt ist
  if (!Array.isArray(data.data)) {
    throw new Error("Invalid data format");
  }

  return data.data;
};

export default fetchEntries;
