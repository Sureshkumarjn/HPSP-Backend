import bodyParser from "body-parser";
import cors from "cors"

import fs from "fs"


const DATA_FILE = 'appointments.json';

let appointments = [];

// Load existing data from the JSON file on server start
fs.readFile(DATA_FILE, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    try {
      // Check if the file is empty
      appointments = data ? JSON.parse(data) : [];
    } catch (parseError) {
      console.error(parseError);
      appointments = [];
    }
  }
});

export const getAppointment = (req, res) => {
   
    res.json(appointments);
};
export const countAppointment = (req, res) => {
   
    const count = appointments.length;
    res.json({ count });
};

export const BookAppointment = (req, res) => {
   
    const { date, time, patientName } = req.body;
  const newAppointment = { date, time, patientName };
  appointments.push(newAppointment);

  // Save the updated data to the JSON file
  fs.writeFile(DATA_FILE, JSON.stringify(appointments), (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.json(newAppointment);
};