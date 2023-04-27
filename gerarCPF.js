function escreverCPF(){
    cpf = GerarCPF()

    document.activeElement.value = cpf
}

function GerarCPF(){
    cpf = []

    for (i = 0; i < 9; i++){
        digito = Math.floor(Math.random() * 10)
        cpf.push(digito)
    }

    cpf.push(GerarPrimeiroDigitoVerificador(cpf))
    cpf.push(GerarSegundoDigitoVerificador(cpf))

    return cpf.toString().replaceAll(',', '')
}

function GerarPrimeiroDigitoVerificador(cpf)
{
    digitoVerificador = 0

    cpf.forEach((digito, index) => {
        digitoVerificador += ((cpf.length + 1) - index) * digito 
    });

    quociente = Math.floor(digitoVerificador / 11)
    resto = digitoVerificador % 11

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
    digitoVerificador = 0

    cpf.slice(1).forEach((digito, index, array) => {
        digitoVerificador += ((array.length + 1) - index) * digito
    })

    quociente = Math.floor(digitoVerificador / 11)
    resto = digitoVerificador % 11

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