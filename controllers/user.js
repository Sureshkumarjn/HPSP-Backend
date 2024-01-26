import { db } from "../db.js";



export const addUser = (req, res) => {
  const q =
    "INSERT INTO patient(`pid`, `pname`, `pdate`, `page`,`paddress`,`pmobile`,`pgender`,`pheight`,`pweight`) VALUES(?)";

  const values = [
    req.body.pid,
    req.body.pname,
    req.body.pdate,
    req.body.page,
    req.body.paddress,
    req.body.pmobile,
    req.body.pgender,
    req.body.pheight,
    req.body.pweight
 ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Insert Sucessful.");
  });
};

export const getUsers = (_, res) => {
  const q3 = "SELECT * FROM patient";

  db.query(q3, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
export const getCount = (_, res) => {
  const countQuery = "SELECT COUNT (*) AS total FROM patient";

  db.query(countQuery, (err, data) => {
    if (err) {
      console.error('Error querying database', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const totalCount = data[0] ? data[0].total : 0;
    return res.status(200).json({ totalCount });
  });
};


export const updateUser = (req, res) => {
  const q =
    "UPDATE patient SET `pid` = ?, `pname` = ?, `pdate` = ?, `page`  = ?, `paddress` = ?, `pmobile` = ?,`pgender` = ?, `pheight` = ?, `pweight` = ? WHERE `pid` = ?";

  const values = [
    req.body.newvalue.pid,
    req.body.newvalue.pname,
    req.body.newvalue.pdate,
    req.body.newvalue.page,
    req.body.newvalue.paddress,
    req.body.newvalue.pmobile,
    req.body.newvalue.pgender,
    req.body.newvalue.pheight,
    req.body.newvalue.pweight
  ];

  db.query(q, [...values, req.params.pid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Update Success.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM patient WHERE `pid` = ?";

  db.query(q, [req.params.pid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Delete Success.");
  });
};
export const getUser = (req, res) => {
  const q = "SELECT * FROM patient WHERE `pid` = ?";

  db.query(q, [req.params.pid], (err,data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


