var nome = ''
var altura = 0
var peso = 0

function calcula_imc() {

    nome = document.getElementById('nome').value
    console.log(nome)

    altura = document.getElementById('altura').value
    console.log(altura)

    peso = document.getElementById('peso').value
    console.log(peso)

    altura = altura / 100

    var imc = peso / (altura * altura)

    console.log(imc.toFixed(2))

    var elemento

    if (imc < 16) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = 'Baixo peso muito grave!  ' + nome + ' , consulte um médico imediatamente!'

    } else if (imc >= 16 && imc <= 16.99) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = 'Baixo peso grave!  ' + nome + ' , consulte um médico imediatamente!'
        
    } else if (imc >= 17 && imc <= 18.49) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = 'Baixo peso!  ' + nome + ' , consulte um médico!'


    } else if (imc >= 18.50 && imc <= 25.99) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = 'Parabéns ' + nome + '  Seu peso está normal. Você está saudável!'
        
    } else if (imc >= 25 && imc <= 29.99) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = nome + '  você está com sobrepeso!'

    } else if (imc >= 30 && imc <= 34.99) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = nome + '  você está com obesidade grau I. Consulte um médico!'

    } else if (imc >= 35 && imc <= 39.99) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = nome + '  você está com obesidade grau II. Consulte um médico!'

    } else if (imc > 40) {

        elemento = document.createElement('h2')
        elemento.setAttribute('class', 'animate__animated animate__backInUp')
        document.body.append(elemento)
        elemento.innerHTML = nome + '  você está com obesidade grau III. Consulte um médico!'

    }

}

function limpaCampos() {

    window.location.reload()

}