const mongoose = require('mongoose');

const connectDB = () => {
  console.log('Wait connecting to the database');

  mongoose.connect('mongodb+srv://mantoniiodev:sUnkolIADN2Dsldo@authjwt.c6zb1ha.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('MongoDB Atlas Connected')).catch((err) => console.error(err));
};

module.exports = connectDB;