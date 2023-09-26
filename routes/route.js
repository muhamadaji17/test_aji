import { Router } from "express";
import continu from '../controller/contiguous.js'
import auth from '../middleware/auth.js'

const router = Router()

router.get('/', auth.cekToken, continu.test)

export default router