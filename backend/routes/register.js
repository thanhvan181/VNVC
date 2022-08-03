
import { Router } from "express";
import { create, list, listregisterdetails } from "../controllers/register";
import { checkAuth } from '../middlewares/auth';




const router = Router();

router.post("/register", create)

router.get("/register/:id", list)
router.get("/regiterdetail/:id", listregisterdetails)


export default router;