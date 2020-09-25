function vereficou(){
    let valorUser = document.getElementById('valorUser')
    let tab = document.getElementById('tabPraOpt')
    if(valorUser.value.length == 0){
        window.alert('Verefique se digitou os dados corretamente.')
    }
    else{
       let val = Number(valorUser.value)
       tab.innerHTML = ''
       for(let con = 1; con <= 10; con++){
           let opc = document.createElement('option')
           opc.text = `${val} X ${con} = ${val*con}`
           tab.appendChild(opc)
           opc.value = `opc${con}`
          
       }
    }
    }
