const { Router } = require("express");
const router = Router();
const {
  _createTechnician,
  _findAll,
  _findById,
  _updateTechnician,
  _deleteById
} = require("../controllers/technician");

router.post("/", async (req, res) => {
  try {
    const technicianData = req.body;
    const technician = await _createTechnician(technicianData);
    return res.status(201).json({
      status: "success",
      message: "Tecnico creado exitosamente",
      data: technician,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const technicians = await _findAll();
    return res.status(200).json({
      status: "success",
      message: "Técnicos obtenidos exitosamente",
      data: technicians,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const technician = await _findById(id);
    return res.status(200).json({
      status: "success",
      message: "Técnico obtenido exitosamente",
      data: technician,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
})

router.patch("/:id", async (req, res) => {
  const technicianId = req.params.id;
  const fieldsToUpdate = req.body;

  try {
    const updatedTechnician = await _updateTechnician(technicianId, fieldsToUpdate)
    res.status(200).json({
      status: "success",
      message: "Técnico actualizado exitosamente",
      data: updatedTechnician
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete("/:id", async (req, res) => {
  const technicianId = req.params.id;

  try {
    await _deleteById(technicianId)
    res.status(200).json({
      status: "success",
      message: "Técnico eliminado exitosamente",
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router;
