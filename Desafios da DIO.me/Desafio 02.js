// Calculadora de partidas Rankeada
function calcularPatente(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let patente

    if (saldoVitorias < 10) {
        patente = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        patente = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        patente = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        patente = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        patente = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        patente = "Lendário";
    } else {
        patente = "Imortal";
    }
    
    return { saldoVitorias, patente }
}
// Saída
let { saldoVitorias, patente } = calcularPatente(140, 35)
console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + patente + ".")