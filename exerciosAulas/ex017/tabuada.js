function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')
    if(num.value.length == 0){
        window.alert('Informe um valor.')
    }
    else{
        let v = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let opt = document.createElement('option')
            opt.text = `${v} X ${c} = ${v*c}`/*o text junto da var opt é para mostrar a parte de dentro do option criado a cima, no caso o conteúdo.*/
            tab.appendChild(opt)
            opt.value = `tab${c}`/*Obs para outras linguagens q usam o value. tipo php */
            c++
        }
    }
}