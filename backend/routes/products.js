const express = require("express");
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
} = require("../controllers/productContoller");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// GET a single products
router.get("/:id", getProduct);

// POST a new products
router.post("/", createProduct);

// DELETE a products
router.delete("/:id", deleteProduct);

// UPDATE a products
router.patch("/:id", updateProduct);

module.exports = router;
