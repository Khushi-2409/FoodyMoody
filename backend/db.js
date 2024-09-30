const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://GoFood:GoFoo09876@gofoodcluster.8ocik.mongodb.net/GoFood?retryWrites=true&w=majority&appName=GoFoodCluster";

module.exports = async function () {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const foodCollection = await mongoose.connection.db.collection(
      "food_items"
    );
    const data = await foodCollection.find({}).toArray();
    console.log("Food Items:", data); // Log the fetched food items

    const categoryCollection = await mongoose.connection.db.collection(
      "food_category"
    );
    const Catdata = await categoryCollection.find({}).toArray();
    console.log("Food Categories:", Catdata); // Log the fetched categories

    // Assign global variables
    global.food_items = data;
    global.food_cat = Catdata;

    // No need to return anything if setting globals
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Rethrow the error after logging
  }
};
