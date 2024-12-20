import express from "express";
import { body } from "express-validator";
import {loginUser, registerUser, userDetails} from "../controllers/user.controllers.js"
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 Characters')
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength()
],loginUser)

router.get('/user',authUser,userDetails)

export default router;