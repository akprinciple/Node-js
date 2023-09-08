const mongoose = require("mongoose");

const dburl = "mongodb+srv://akeemolayiwola9:9000Naira@cluster0.mpus68f.mongodb.net/blog"
const connectDb = () => {
    mongoose
      .connect(dburl)
      .then(() => {
        console.log("db connected");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  module.exports = connectDb;