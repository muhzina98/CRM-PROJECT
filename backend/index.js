import express from 'express'
import  dotenv from 'dotenv'
import cors from "cors";
import { connectDatabase } from './config/connectDatabase.js'
import authRouter from './routes/authRoutes.js'
import customerRouter from './routes/customerRoutes.js'
import { globalErrorHandler } from './middlewares/errorMiddleware.js'



dotenv.config()
connectDatabase()

const app=express()

app.use(cors({
  origin: "https://crm-project-uzrc-git-main-muhzina98s-projects.vercel.app",
  credentials: true
}));
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/customers", customerRouter);



app.use(globalErrorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
    //console.log("JWT_SECRET:", process.env.JWT_SECRET);

})
