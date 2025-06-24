const alunoModel = require("../models/aluno.model")

function listar(request, response){
    const alunos = alunoModel.listarAlunos()

    response.json(alunos)
}

module.exports = {
    listar
}