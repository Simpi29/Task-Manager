const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
       // "mongodb+srv://Simpi:Sd2771825@@cluster0.r0ovj38.mongodb.net/"
        "mongodb+srv://simpi:simpi@cluster0.nbpp3nj.mongodb.net/"
       
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
