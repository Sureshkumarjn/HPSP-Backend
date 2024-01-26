import { db } from "../db.js";



export const addDoctor = (req, res) => {
  const d=
    "INSERT INTO doctor (`did`, `dname`, `ddate`, `dage`,`daddress`,`dmobile`,`dgender`,`dpostion`) VALUES(?)";

  const values = [
    req.body.did,
    req.body.dname,
    req.body.ddate,
    req.body.dage,
    req.body.daddress,
    req.body.dmobile,
    req.body.dgender,
    req.body.dpostion
 ];

  db.query(d, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Insert Sucessful.");
  });
};

export const getDoctors = (_, res) => {
  const d3 = "SELECT * FROM `doctor`";
 
  db.query(d3, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};



export const updateDoctor = (req, res) => {
  const d =
    "UPDATE doctor SET `did` = ?, `dname` = ?, `ddate` = ?, `dage`  = ?, `daddress` = ?, `dmobile` = ?,`dgender` = ?, `dpostion` = ? WHERE `did` = ?";

  const values = [
    req.body.newvalue1.did,
    req.body.newvalue1.dname,
    req.body.newvalue1.ddate,
    req.body.newvalue1.dage,
    req.body.newvalue1.daddress,
    req.body.newvalue1.dmobile,
    req.body.newvalue1.dgender,
    req.body.newvalue1.dpostion
  ];

  db.query(d, [...values, req.params.did], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Update Success.");
  });
};

export const deleteDoctor = (req, res) => {
  const d = "DELETE FROM doctor WHERE `did` = ?";

  db.query(d, [req.params.did], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Delete Success.");
  });
};
export const getDoctor = (req, res) => {
  const d = "SELECT * FROM doctor WHERE `did` = ?";

  db.query(d, [req.params.did], (err,data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


