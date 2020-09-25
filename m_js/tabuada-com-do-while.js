function botão(){
    let valor = document.getElementById('num')
    let sel = document.getElementById('selec')
    if(valor.value.length == 0){
        window.alert('Erro! verefique se os dados foram inseridos corretamente.')
    }
    else{
        let val = Number(valor.value)
        let cont = 1
        sel.innerHTML = ``
        do{
            let opc = document.createElement('option')
            opc.text = `${val} X ${cont} = ${val*cont}`
            opc.value = `opc${cont}`
            sel.appendChild(opc)
            cont++

        }while(cont <= 10)
    }
    
}