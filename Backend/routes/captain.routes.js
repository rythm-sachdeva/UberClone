import { Router } from "express";
import { captainDetails, loginCaptain, registerCaptain } from "../controllers/captain.controllers.js";
import { authCaptain } from "../middlewares/auth.middleware.js";
import { body } from "express-validator";
const router = Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 Characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle must be at least 3 Characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 Characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
],registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 Characters')
],loginCaptain)

router.get('/user',authCaptain,captainDetails)
router.get('/logout',authCaptain,loginCaptain)

export default router;



