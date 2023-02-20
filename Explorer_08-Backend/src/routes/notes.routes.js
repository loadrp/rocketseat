const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const NoteController = require("../controllers/NoteController")
const notesRoutes = Router();
const notesController = new NoteController()

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/",   notesController.index)
notesRoutes.post("/",   notesController.create)
notesRoutes.get("/:id",   notesController.show)
notesRoutes.delete("/:id",   notesController.delete)

module.exports = notesRoutes;