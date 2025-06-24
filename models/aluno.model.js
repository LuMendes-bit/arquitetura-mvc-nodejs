function listarAlunos(){
    const alunos = [
        {id:1, nome:"Lucas Mendes", idade:22, curso:"Técnico em informática", RA: "123456"},
        {id:2, nome:"Matheus", idade:29, curso:"Técnico em segurança de trabalho", RA: "654321"},
        {id:3, nome:"Maria Clara", idade:21, curso:"Técnico em enfermagem", RA: "112233"}
    ]
    
    return alunos
}

module.exports = {
    listarAlunos
}