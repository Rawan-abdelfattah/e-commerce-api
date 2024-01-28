const mongoose = require('mongoose')
const dotenv = require('dotenv') 

dotenv.config({path:'.env'})

DB_URL= process.env.DB_URL  

dbConnection = ()=>{mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1)
//   });
}
  module.exports =dbConnection