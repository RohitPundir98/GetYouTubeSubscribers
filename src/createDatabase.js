const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://rohit01pundir:Lr2DqWs9RfBjez3t@youtubesubscribers.0igcl8p.mongodb.net/";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
