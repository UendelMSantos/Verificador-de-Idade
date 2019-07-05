function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //CRIANÇA 
                img.setAttribute('src', 'meninobebe.png')  
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'meninabebe.png')   
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'idosa.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}