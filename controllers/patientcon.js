import { db } from "../db.js";

export const getPatient = async (req, res) => {
    const userId = req.params.pid;
  const query = 'SELECT * FROM patient WHERE pid = ?';

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('MySQL query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(results[0]);
    }
  });
  };