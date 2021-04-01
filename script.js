function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        //img.setAttribute('src', 'fotomanha.png')
        img.src = 'fotomanha.png'
        document.body.style.background = '#e9c10f'
    } else if (hora >= 12 && hora < 18 ){
        // BOA TARDE!
        //img.setAttribute('src', 'fototarde.png')
        img.src = 'fototarde.png'
        document.body.style.background = '#fe6002'
    } else {
        // BOA NOITE!
        //img.setAttribute('src', 'fotonoite.png')
        img.src = 'fotonoite.png'
        document.body.style.background = '#525252'
    }
}
