import { db } from "../db.js";



export const addEmployee = (req, res) => {
  const e=
    "INSERT INTO employee (`eid`, `ename`, `edate`, `eage`,`eaddress`,`emobile`,`egender`,`epostion`) VALUES(?)";

  const values = [
    req.body.eid,
    req.body.ename,
    req.body.edate,
    req.body.eage,
    req.body.eaddress,
    req.body.emobile,
    req.body.egender,
    req.body.epostion
 ];

  db.query(e, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Insert Sucessful.");
  });
};

export const getEmployees = (_, res) => {
  const e3 = "SELECT * FROM `employee`";
 
  db.query(e3, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};



export const updateEmployee = (req, res) => {
  const e =
    "UPDATE employee SET `eid` = ?, `ename` = ?, `edate` = ?, `eage`  = ?, `eaddress` = ?, `emobile` = ?,`egender` = ?, `epostion` = ? WHERE `eid` = ?";

  const values = [
    req.body.newvalue3.eid,
    req.body.newvalue3.ename,
    req.body.newvalue3.edate,
    req.body.newvalue3.eage,
    req.body.newvalue3.eaddress,
    req.body.newvalue3.emobile,
    req.body.newvalue3.egender,
    req.body.newvalue3.epostion
  ];

  db.query(e, [...values, req.params.eid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Update Success.");
  });
};

export const deleteEmployee = (req, res) => {
  const e = "DELETE FROM employee WHERE `eid` = ?";

  db.query(e, [req.params.eid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Delete Success.");
  });
};
export const getEmployee = (req, res) => {
  const e = "SELECT * FROM employee WHERE `eid` = ?";

  db.query(e, [req.params.eid], (err,data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


