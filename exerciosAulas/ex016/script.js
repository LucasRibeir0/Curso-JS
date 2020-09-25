function contou(){
    let  início = document.getElementById('numInício')
    let passos = document.getElementById('numPassos')
    let final = document.getElementById('numFinal')
    let res = document.getElementById('resp')
    let i = Number(início.value)
    let p = Number(passos.value)
    let f = Number(final.value)
    if(i == 0 || f == 0){
        window.alert('[ERRO] Verefique se inseriu todos os dados corretamente.')
    }
    //contagem crescente
    else if(i < f ){
        res.innerHTML = `Contagem: `
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    //Contagem decrescente
    else{
        res.innerHTML = `Contagem: `
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
    
}

























