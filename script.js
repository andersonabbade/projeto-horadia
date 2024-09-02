function carregar () {

    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        // bom dia 
        img.src = "manha.png"
        document.body.style.background ="#e8cfc4"
    } else if( hora > 12 && hora < 18){
        //boa tarde 
        img.src = "tardee.png"
        document.body.style.background ="#d0bb74"
    } else {
        //BOA NOITE
        img.src = "noiite.png"
        document.body.style.background ="#302430"
    }
    

}

