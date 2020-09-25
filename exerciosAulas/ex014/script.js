function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date()
    var agora = hora.getHours()
    
    if(agora >= 0 && agora <= 5){
        msg.innerHTML = `Agora é ${agora}h da madrugada!`
        img.src = 'img-madrugada.jpg'
        document.body.style.background = '#25363c'
        
    }
    else if(agora <= 12){
        msg.innerHTML =`Agora é ${agora} hora manhã!`
        img.src = 'img-manha.jpg'
        document.body.style.background = '#353a3d'
    }
    else if(agora <= 18){
        msg.innerHTML = `Agora são ${agora} horas da tarde!`
        img.src = 'img-tarde.jpg'
        document.body.style.background = '#8d8d93'
    
    }
    else if(agora <= 23){
        msg.innerHTML = `Agora são ${agora} horas da noite!`
        img.src = 'img-noite.jpg'
        document.body.style.background = '#1b2431'
    }
    else{
        msg.innerHTML = `[ERRO!!!]`
    }
    
    
}

