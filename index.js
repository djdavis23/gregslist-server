//setup server
let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//connect to DB
require('./server-assets/db/index')

//register middleware
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//Routes
let carRoutes = require('./server-assets/routes/car-routes')



server.use('/api/cars', carRoutes)



//check server function
server.listen(port, () => {
  console.log("The server is running on port:  ", port)
})