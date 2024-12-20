import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";

const app = express();

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}
));
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());
app.use('/api/v1',router)

export {app}
