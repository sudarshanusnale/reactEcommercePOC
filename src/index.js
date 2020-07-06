const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Order = require('./models/orders')
const userRouter = require('./routers/user')
const orderRouter = require('./routers/orders')
const productRouter = require('./routers/product')

const cors = require('cors')
const app = express()
const port = process.env.PORT
 
app.use(cors())
app.use(express.json()) 
app.use(userRouter) 
app.use(orderRouter)
app.use(productRouter)

app.listen(port,()=>{
    console.log('server is up on port ' + port)
})
