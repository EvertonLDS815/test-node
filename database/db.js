const mongoose = require("mongoose");

const connetToDB = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("🚀 MongoDB Atlas connected!!"))
    .catch((err) => console.error(err));
};

module.exports = connetToDB;