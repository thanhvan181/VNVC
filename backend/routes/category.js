
import { checkAuth } from '../middlewares/auth'
import { Router } from "express";
import { create, getCategory, list, readone, remove, update } from '../controllers/category';
// import { create } from "../controllers/user";

const router = Router();

router.post("/category/:id", checkAuth, create)
router.get("/category", list)
router.get("/category/:id", readone)
router.get("/categories", getCategory)
router.put("/category/:id",  update)
router.delete("/category/:id",  remove)

export default router;