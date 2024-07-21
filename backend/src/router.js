const express = require("express");

// Response atráves de um middleware controller
const tasksController = require("./controllers/tasksController");

// Response atráves de um middleware de validação para "title"
const taskMiddleware = require("./middlewares/tasksMiddleware");

// Gerenciador de rotas
const router = express.Router();

// Vai responder com uma função importada de taskController, sendo ele um objeto, é necessário acessar seu componente
router.get("/tasks", tasksController.getAll);

// Responde com a criação de um novo post 
router.post("/tasks", taskMiddleware.validateFieldTitle, tasksController.createTask);

// Deleta um post passando o parametro id na URL
router.delete("/tasks/:id", tasksController.deleteTask)

// Deleta um post passando o parametro id na URL
router.put(
	"/tasks/:id",
    taskMiddleware.validateFieldTitle,
    taskMiddleware.validateFieldStatus,
    tasksController.updateTask
);



module.exports = router;
