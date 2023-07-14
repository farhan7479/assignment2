import express from "express";
import {

  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  updateProductController,
  productListController
} from "../controllers/productController.js";



const router = express.Router();

//routes
router.post(
  "/create-product",
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);



//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//product per page
router.get("/product-list/:page", productListController);

export default router;