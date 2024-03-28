const alunosENotas = [
    { nome: 'Gabriel', nota: 1},
    { nome: 'Paulo', nota: 10},
    { nome: 'Pedro', nota: 6},
    { nome: 'Marcos', nota: 5}
]

function alunosAprovados(listaAlunos) {
    return listaAlunos.filter(alunosENotas => alunosENotas.nota >= 6)
}

console.log(alunosAprovados(alunosENotas));

