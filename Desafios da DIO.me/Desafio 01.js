//Desafio Classificador de nível de Herói

let nomeHeroi = "Baiacu"
let classeHeroi = "Knight"
let xpHeroi = 8500

// Experiências para subir de patente

if (xpHeroi < 1000) {
    patente = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    patente = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    patente = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    patente = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    patente = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    patente = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    patente = "Imortal";
} else {
    patente = "Radiante";
}

//Mensagem
console.log("O Herói de nome Dino, da classe " + classeHeroi + ", está na patente " + patente + ".")