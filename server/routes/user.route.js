import { Router } from "express";
import {LoginUser, LogoutUser, registerUser, ContactUser} from '../controllers/user.controller.js'
const router = Router()

router.route('/signup').post(registerUser)
router.route('/login').post(LoginUser)
router.route('/logout').post(LogoutUser)
router.route('/contact').post(ContactUser)
export default router; 