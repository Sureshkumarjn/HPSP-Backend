import bodyParser from "body-parser";
import cors from "cors"

import fs from "fs"


const dataFilePath = 'appointments.json';

export const getAppointment = (req, res) => {

  try {
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  
};

export const addAppointment = (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath);
    let data = JSON.parse(rawData);

    const today = new Date().toLocaleDateString();
    const { id, name, age } = req.body;

    const newData = { id, name, age, date: today };
    data.push(newData);

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  
};
export const getdAppointment = (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);
    
    const todayData = data.filter(item => item.date === new Date().toLocaleDateString());
    
    res.json(todayData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
 
  
};
export const countAppointment = (req, res) => {
   
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const appointments = JSON.parse(rawData);

    const today = new Date().toLocaleDateString();

    // Filter appointments for today
    const todayAppointments = appointments.filter(appointment => appointment.date === today);

    // Get the count of appointments for today
    const count = todayAppointments.length;

    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

/*let appointments = [];

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

/*export const getAppointment = (req, res) => {
   
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
};*/
