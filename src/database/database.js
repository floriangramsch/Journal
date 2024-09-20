import mysql from "mysql2/promise";

// Erstelle eine Verbindung zur MariaDB-Datenbank
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const getDataFromDatabase = async () => {
  const [rows] = await pool.query("SELECT * FROM journal_entry ORDER BY date DESC");
  console.log('data', rows)
  return rows;
};

export const autheticate = async (password) => {
  const [rows] = await pool.query(
    "SELECT password FROM User where name = ?",
    "Flo"
  );
  return rows[0].password === password;
};

export const createEntry = async (content, happiness) => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const [result] = await pool.query(
    "INSERT INTO journal_entry (date, content, happiness) VALUES (?,?,?)",
    [date, content, happiness]
  );
  return result;
};

// Optionale Funktion zum Schließen der Verbindung, falls benötigt
export const closeDatabaseConnection = async () => {
  await pool.end();
};
