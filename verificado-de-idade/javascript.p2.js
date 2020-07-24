function verificar() {
    var nome = document.getElementById("txtnome")
    var fdade = document.getElementById("idade")
    var dados = document.getElementById("dados")
    var figura = document.getElementById("figura")
    var fsex = document.getElementsByName("radsex")
    var idade = Number(fdade.value)
    var genero = ""

    if (nome.value == 0  || fdade.value == 0) {
        alert("ERRO IMPOSSÍVEL VERIFICAR, FALTAM DADOS!")

    } else {

        if (fsex[0].checked) {
            genero = "HOMEM"
            if (idade <= 10) {
                figura.innerHTML = `\u{1F476}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UM BEBE HOMEM!" + `\u{1F476}`)
                dados.innerHTML =""  
            }

        } else if (fsex[1].checked) {
            genero = "MULHER"
            if (idade <= 10) {
                figura.innerHTML = `\u{1F476}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UMA BEBE MULHER!" + `\u{1F476}`)
                dados.innerHTML =""  
            } 
        
        } if (fsex[0].checked) {
            genero = "HOMEM"
            if (idade < 18) {
                figura.innerHTML = `\u{1F466}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UM ADOLECENTE HOMEM!" + `\u{1F466}`)
                dados.innerHTML =""  
            }

        } else if (fsex[1].checked){
            genero = "MULHER"
            if (idade < 18) {
                figura.innerHTML =`\u{1F9D2}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UMA ADOLECENTE MULHER!" + `\u{1F9D2}`)
                dados.innerHTML =""    
            }

        } if (fsex[0].checked) {
            genero = "HOMEM"
            if (idade <= 40) {
                figura.innerHTML = `\u{1F468}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UM HOMEM ADULTO!" + `\u{1F468}`)
                dados.innerHTML =""  
            } 

        } else if (fsex[1].checked) {
            genero = "MULHER"
            if (idade <= 40) {
                figura.innerHTML = `\u{1F469}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UMA MULHER ADULTA!" + `\u{1F469}`)
                dados.innerHTML =""  
            }

        } if (fsex[0].checked) {
            genero = "HOMEM"
            if (idade <= 60) {
                figura.innerHTML = `\u{1F9D4}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UM HOMEM, E JÁ ESTÁ FICANDO VELHO!" + `\u{1F9D4}`)
                dados.innerHTML =""  
            }

        } else if (fsex[1].checked){
            genero = "MULHER"
            if (idade <= 60) {
                figura.innerHTML = `\u{1F469}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UMA MULHER, E JÁ ESTÁ FICANDO VELHA!" + `\u{1F469}`)
                dados.innerHTML =""  
            }   

        } if (fsex[0].checked) {
                genero = "HOMEM"
                figura.innerHTML = `\u{1F474}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UM HOMEM E JÁ É UM IDOSO!" + `\u{1F474}`)

            } else if (fsex[1].checked) {
                genero = "MULHER"
                figura.innerHTML = `\u{1F475}`
                alert("OLÁ " + `${dados.innerHTML = nome.value}` + " VOCÊ TEM " + `${dados.innerHTML = idade}` + " ANOS, É UMA MULHER E JÁ É UMA IDOSA!" + `\u{1F475}`) 
            }
     dados.innerHTML =""           
    }
}      