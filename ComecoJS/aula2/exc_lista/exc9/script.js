var vetor = [1, 5, 2, 7, 3]

var maior = 0
for (var i = 0; vetor.length; i++){
    if (vetor[i] > maior){
        maior = vetor[i]
    }
}

console.log(maior)