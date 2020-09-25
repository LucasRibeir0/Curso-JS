let num = [4,1,8,3,7]
num.push(5)
num.sort()
console.log(`O vetor é composto pelos seguintes valores: ${num}`)
console.log(`Ele é composto por ${num.length} elementos.`)
for(let psc = 0; psc < num.length; psc++){
    console.log(`The position ${psc} have the value ${num[psc]}`)
}
for(let psc in num){
    console.log(`A posição ${psc} tem o valor ${num[psc]}`)
}
let pos = num.indexOf(8)
if(pos == -1){
    console.log('Este valor não foi encontrado.')
}
else{
    console.log(`O valor está na posição ${pos}`)
}