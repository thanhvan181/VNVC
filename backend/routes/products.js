import { Router } from "express";
import { create, getProducts, getProductsCategory, searchProduct, list, read, remove, update, getProductsSubcateogy, fetchAllProduct } from "../controllers/product";
import { userById } from '../controllers/users';
import { adminCheck, checkAuth } from '../middlewares/auth';

const router = Router();

// router.post("/product",create)
router.get("/products", list)
router.get("/productall", fetchAllProduct)


router.get("/search", searchProduct)
router.get("/products/:id", getProducts)
router.get("/products/category/:id", getProductsCategory)
router.get("/products/subcategory/:id", getProductsSubcateogy)
router.delete("/product/:id", remove)
router.get("/product/:id", read)
router.put("/product/:id", update)

router.post('/product/:userId', checkAuth, adminCheck, create);

router.param("userId", userById);



export default router;