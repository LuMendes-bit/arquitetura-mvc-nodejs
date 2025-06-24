function listarCursos(){
    const cursos = [
        { id: 1, nome:"Técnico em informatica",duracao:1200,dscricao: "curso focado em informatica",},
        { id: 1, nome:"Técnico em emfermagem",duracao:1800,dscricao: "curso focado em enfermagem",},
        { id: 3, nome:"Técnico em segurança de trabalho",duracao:1600,dscricao: "curso focado em prevenção de acidentes",}
    ]

    return cursos
}

module.exports = {
    listarCursos
}