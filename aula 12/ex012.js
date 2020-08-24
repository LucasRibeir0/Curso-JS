var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDate()
console.log(`Agora são ${hora} horas do dia ${dia}`)
if(hora < 6){
    console.log('Boa madrugada!')
}
else if(hora < 12){
    console.log('Bom dia!')
}
else if(hora <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}