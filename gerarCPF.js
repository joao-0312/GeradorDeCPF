"use strict"

function escreverCPF(){
    let cpf = GerarCPF()

    document.activeElement.value = cpf
}

function GerarCPF(){
    let cpf = []

    for (let i = 0; i < 9; i++){
         let digito = Math.floor(Math.random() * 10)
        cpf.push(digito)
    }

    cpf.push(GerarPrimeiroDigitoVerificador(cpf))
    cpf.push(GerarSegundoDigitoVerificador(cpf))

    return cpf.toString().replaceAll(',', '')
}

function GerarPrimeiroDigitoVerificador(cpf)
{
    let digitoVerificador = 0

    cpf.forEach((digito, index) => {
        digitoVerificador += ((cpf.length + 1) - index) * digito 
    });

    let resto = digitoVerificador % 11

    if (resto == 0 || resto == 1)
    {
        digitoVerificador = 0
    }
    else
    {
        digitoVerificador = 11 - resto
    }

    return digitoVerificador
}

function GerarSegundoDigitoVerificador(cpf){
    let digitoVerificador = 0

    cpf.slice(1).forEach((digito, index, array) => {
        digitoVerificador += ((array.length + 1) - index) * digito
    })

    let resto = digitoVerificador % 11

    if (resto == 0 || resto == 1)
    {
        digitoVerificador = 0
    }
    else
    {
        digitoVerificador = 11 - resto
    }

    return digitoVerificador
}

escreverCPF()