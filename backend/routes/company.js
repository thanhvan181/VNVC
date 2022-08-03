
import { Router } from "express";
import { create, list, listCompany, readCompanyinCity, readoneCompany, removeCompany, updateCompany } from "../controllers/company";




const router = Router();

router.post("/company", create )

router.get("/company", listCompany )
router.get("/company/:id", readCompanyinCity )
router.get("/companyone/:id", readoneCompany )
router.delete("/company/:id", removeCompany )
router.put("/company/:id", updateCompany)

export default router;