const notas = [7,9,4]
var media = (notas[0] + notas[1] + notas[2])/3 
console.log('Boletim');
for (var i = 0; i<notas.length; i++){
    console.log(notas[i])

} 


if (media >= 7) {
console.log('Parabéns voce foi aprovado', media)  
}

if (media < 7){
console.log('Lamento informar mas você foi REPROVADO:', media)
}

