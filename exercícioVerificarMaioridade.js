
function meuNome (nome){
    return "Davi"
}

function verificarIdade(idade){
    if(idade>=18){
        console.log(`${meuNome()} é maior de idade, tem ${idade} anos`)
    } else {
        console.log(`${meuNome()} não é maior de idade, tem ${idade} anos`)
    }
}

verificarIdade(15)
verificarIdade(18)
verificarIdade(78)
verificarIdade(5)
