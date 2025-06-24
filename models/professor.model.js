function listarProfessores(){
    const professores = [
        { id: 1,nome:"Kaique junior covo",idade: 26 ,Ra: 301234567},
        { id: 2,nome:"Ana Maria Silva",idade: 30,Ra: 302345678},
        { id: 3,nome:"Pedro Henrique Santos",idade: 22,Ra: 303456789}
    ]

    return professores
}

module.exports = {
    listarProfessores
}