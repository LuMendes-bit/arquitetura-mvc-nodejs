const cursoModel = require("../models/curso.model")

function listar(request, response){
    const cursos = cursoModel.listarCursos()

    response.json(cursos)
}

module.exports = {
    listar
}