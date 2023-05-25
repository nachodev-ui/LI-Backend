const { Router } = require("express");
const authenticateToken = require("../middleware/cart");
const router = Router();

// Ruta protegida del carrito de compras
router.get("/cart", authenticateToken, async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Carrito obtenido exitosamente",
  });
});

module.exports = router;
