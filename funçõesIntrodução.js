/*escolher um valor e verificar o seu valor ao cubo e informar a paridade do cubo*/
function cubo(numero){
    var numeroAoCubo = numero*numero*numero
    return numeroAoCubo
}

var cuboDeNumero = cubo(8)

if((cuboDeNumero%2) === 0){
    var paridade = "par"
} else{
    var paridade = "ímpar"
}

console.log(`O cubo do número é ${cuboDeNumero} e é ${paridade}`)
