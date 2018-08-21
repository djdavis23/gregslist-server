//set up connection
let mongoose = require('mongoose')
const connectionString = 'mongodb://myUser:mypassword23@ds018558.mlab.com:18558/gregslistdb'
let connection = mongoose.connection

//connect to db
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//log a message if connections fails
connection.on('error', err => {
  console.log("Database Error: ", err)
})

//log successful connection to db
connection.once('open', () => {
  console.log("Connected to database")
})