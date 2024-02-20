var precoProduto = "80"
let precoTotal = pagamento("pix" , 3)

function pagamento(meio , vezes){
    switch(true){
        case meio === "débito" && vezes === 1:
            return precoProduto - (precoProduto/10)
            break
        case meio === "dinheiro" && vezes === 1:
        case meio === "pix" && vezes === 1:
            return precoProduto - (precoProduto*15/100)
            break
        case vezes === 2:
            return precoProduto
            break
        case vezes >= 3:
            return precoProduto + (precoProduto/10)
            break
    }
}
console.log(`O preço total é ${precoTotal}`)
