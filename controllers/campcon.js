import { db } from "../db.js";


//Inset Camp
export const addCamp = (req, res) => {
  const c=
    "INSERT INTO camp (`cid`, `cname`, `cplace`, `cdate`,`ctime`,`caddress`) VALUES(?)";

  const values = [
    req.body.cid,
    req.body.cname,
    req.body.cplace,
    req.body.cdate,
    req.body.ctime,
    req.body.caddress
    
 ];

  db.query(c, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Insert Sucessful.");
  });
};

//Get camp Details
export const getCamps = (_, res) => {
  const c3 = "SELECT * FROM `camp`";

  db.query(c3, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//Count Camp Detais
export const getCount = (_, res) => {
  const countQuery = "SELECT COUNT (*) AS total FROM camp";

  db.query(countQuery, (err, data) => {
    if (err) {
      console.error('Error querying database', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const totalCount1 = data[0] ? data[0].total : 0;
    return res.status(200).json({ totalCount1 });
  });
};


export const updateCamp = (req, res) => {
  const c =
    "UPDATE camp SET `cid` = ?, `cname` = ?, `cplace` = ?, `cdate`  = ?, `ctime` = ?, `caddress` = ? WHERE `cid` = ?";

  const values = [
    req.body.newvalue2.cid,
    req.body.newvalue2.cname,
    req.body.newvalue2.cplace,
    req.body.newvalue2.cdate,
    req.body.newvalue2.ctime,
    req.body.newvalue2.caddress
   
  ];

  db.query(c, [...values, req.params.cid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Update Success.");
  });
};

export const deleteCamp = (req, res) => {
  const c = "DELETE FROM camp WHERE `cid` = ?";

  db.query(c, [req.params.cid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Delete Success.");
  });
};
export const getCamp = (req, res) => {
  const c = "SELECT * FROM camp WHERE `cid` = ?";

  db.query(c, [req.params.cid], (err,data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


