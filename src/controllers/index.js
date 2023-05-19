exports.getByZip = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "SELECT province, location FROM georeference WHERE cp = ?",
      [req.params.cp],
      (err, result) => {
        if (err) return res.send(err);

        res.json(result);
      }
    );
  });
};

exports.addZip = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        const dataToAdd = {
            cp: req.body.cp,
            province: req.body.province,
            location: req.body.location
        }


        conn.query ('INSERT INTO georeference SET ?', [dataToAdd], (err, result) =>{
            if (err) return res.send(err);

            res.send('Creación Exitosa')
        })
    })
}