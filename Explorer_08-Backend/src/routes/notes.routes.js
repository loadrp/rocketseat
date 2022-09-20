const { Router } = require("express");

const NoteController = require("../controllers/NoteController")
const notesRoutes = Router();
const notesController = new NoteController()

function myMiddleware(request,response,next) {

  next();  
}

notesRoutes.post("/:user_id", myMiddleware , notesController.create)
notesRoutes.get("/:id", myMiddleware , notesController.show)
notesRoutes.delete("/:id", myMiddleware , notesController.delete)

module.exports = notesRoutes;