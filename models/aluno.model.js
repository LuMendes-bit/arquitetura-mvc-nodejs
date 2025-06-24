function listarAlunos(){
    const alunos = [
        {id:1, nome:"Lucas Mendes", idade:22 ,curso:"Técnico em informatica"},
        {id:2, nome:"Matheus", idade:29 ,curso:"Técnico em segurança de trabalho"},
        {id:3, nome:"Maria clara", idade:21 ,curso:"Técnico em emfermagem"}
    ]
    return alunos
}

module.exports = {
    listarAlunos
}