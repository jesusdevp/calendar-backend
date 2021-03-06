const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar DB");
  }
};

module.exports = {
  dbConnection,
};
