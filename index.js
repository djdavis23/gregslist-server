//setup server
let express = require('express')
let bp = require('body-parser')
let cors = require('cors')
let server = express()
let port = 3000

//connect to DB
require('./server-assets/db/index')

//register middleware
server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//Routes
let carRoutes = require('./server-assets/routes/car-routes')
let houseRoutes = require('./server-assets/routes/house-routes')
let jobRoutes = require('./server-assets/routes/job-routes')



server.use('/api/cars', carRoutes)
server.use('/api/houses', houseRoutes)
server.use('/api/jobs', jobRoutes)



//check server function
server.listen(port, () => {
  console.log("The server is running on port:  ", port)
})