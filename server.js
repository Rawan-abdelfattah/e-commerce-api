const express = require('express')
const morgan = require('morgan') 
const dotenv = require('dotenv') 
const dbConnection = require('./db/mongoose')
const categoryRoute = require('./router/category.route')
const ApiError = require('./utils/apiError')
const globalError = require('./middleware/error.middleWare')

dbConnection()

const app = express()    

dotenv.config({path:'.env'})

PORT = process.env.PORT || 4000
NODE_ENV= process.env.NODE_ENV  

  
// Middlewares morgan
app.use(express.json());

if(NODE_ENV === 'development'){ 
    app.use(morgan('dev'))
    console.log(`mode ${NODE_ENV}`);  
} 

//Routes
app.use('/api/v1/categories' , categoryRoute)

//error handling middleware in express
app.all('*',(req ,res , next)=>{ 
  next(new ApiError(`Can not find this route ${req.originalUrl}` , 400 ))
})
app.use(globalError)


app.get('/', (req, res) =>{
    res.send('it is a test');
})
const server = app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})

// handle rejected requests out express server
process.on('unhandledRejection' , (err)=>{
    console.error(`UnhandledRejection Error ${err.name} |${err.message}`);

    server.close(()=>{
      console.error(`Shuting down server .....`);

      process.exit(1)
    }) 

})