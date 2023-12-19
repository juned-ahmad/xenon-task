import dotenv from 'dotenv'
import express from "express"
import connectDB from './db/index.js'
import session from 'express-session'
dotenv.config()

const app = express();

app.use(express.json())
app.use(session({secret:"mysecretsession", resave:false, saveUninitialized:false}))

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listening on port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log(`MongoDB conncection failed !!`, err);
})


//routes import
import userRouter from './routes/user.route.js'

//routes declaration
app.use('/api/v1/users', userRouter)

app.get('/', (req,res)=>{
    res.json({message:'Hi'})
})

export {app}