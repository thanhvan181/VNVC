
import { Router } from "express";
import {create_subcategory, list_category} from "../controllers/sub_category"



const router = Router();

router.post("/subcategory", create_subcategory )
router.get("/subcategory", list_category )


export default router;