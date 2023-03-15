const sql = require("../db")

exports.contactus = (req,res)=>{
    const { name, email, query } = req.body;
    sql.query(
        "INSERT INTO contacts (name, email, query) VALUES (?, ?, ?)",
        [name, email, query],
        (error, results) => {
          if (error) {
            console.error("Error submitting contact:", error);
            res.status(500).json({ error: "Error submitting contact" });
          } else {
            console.log("Contact submitted successfully");
            res.status(200).json({ message: "Your response submitted successfully" });
          }
        }
      );
}