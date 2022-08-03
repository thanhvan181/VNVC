import {Router} from "express"
import { create } from "../controllers/number";
const router = Router();
router.post("/number", create)


export default router