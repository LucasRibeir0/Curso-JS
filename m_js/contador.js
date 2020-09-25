function vereficar(){
    let inicio = document.getElementById('inicio')
    let passos = document.getElementById('passos')
    let final = document.getElementById('final')
    let conteudo = document.getElementById('conteudo')
    let i = Number(inicio.value)
    let p = Number(passos.value)
    let f = Number(final.value)
    if(inicio.value.length == 0 && passos.value.length == 0 && final.value.length == 0){
        window.alert('Erro, verefique se os dados estão corretos.')
    }
    else if(i < f){
       
        //Crescente
        conteudo.innerHTML = 'Partida: '
        for(let c = i; c <= f; c += p){
            conteudo.innerHTML += `${c}\u{1F449}`
        }
    }
    else{
        //Decrescente
        conteudo.innerHTML = `Partida:`
        for(let c = i; c >= f; c -= p){
            conteudo.innerHTML += `${c}\u{1F449}`

        }
        
    }
    conteudo.innerHTML += `CHEGADA \u{1F3C1}`
   
}