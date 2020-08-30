function vereficar() {
    var nasc1 = new Date().getFullYear()
    var inpano = document.getElementById('seu-ano')
    var res = document.getElementById('res')
    if (inpano.value.length == 0 || Number(inpano.value) > nasc1 ) {
        window.alert('[Erro] Verefique se digitou os dados corretamente.')
    }
    else {
        var sexo = document.getElementsByName('nsexo')
        var idade = nasc1 - Number(inpano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg')
            }
            else {
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }

        else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'menina.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpg')
            }
            else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos!`
        res.appendChild(img)

    }

}


