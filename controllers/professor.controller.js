const professorModel = require("../models/professor.model")

function listar(request, response){
    const professores = professorModel.listarProfessores()

    response.json(professores)
}

module.exports = {
    listar
}