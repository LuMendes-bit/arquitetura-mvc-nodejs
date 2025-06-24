const express = require("express")
const cursoController = require("./controllers/curso.controller")
const alunoController = require("./controllers/aluno.controller")
const professorController = require("./controllers/professor.controller")

const app = express()

app.get("/listar-cursos", cursoController.listar)
app.get("/listar-alunos", alunoController.listar)
app.get("/listar-professores", professorController.listar)

app.listen(3000, function(){
    console.log("foi")
})