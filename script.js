//1)
function mayorQue (a, b)
{
    if (a >= b)
    {
        return a + ' es mayor que ' + b
    }
    else
    {
        return b + ' es mayor que ' + a
    }
}
let numero1 = Number(prompt('Ingresa un numero'))
let numero2 = Number(prompt('Ingresa un numero'))
alert(mayorQue(numero1, numero2))
console.log(mayorQue(numero1, numero2))

//2)
function numeroEs (a)
{
    if (a >= 0)
    {
        return a + ' es positivo'
    }
    else if (a <= 0)
    {
        return a + ' es negativo'
    }
    else if (a == 0)
    {
        return a + ' es 0'
    }
}
let numero3 = Number(prompt('Ingresa un numero'))
alert(numeroEs(numero3))
console.log(numeroEs(numero3))

//3)
function entre (a)
{
    if ((a >= 25) && (a <= 255))
    {
        return a + ' esta entre 25 y 255'
    }
    else
    {
        return a + ' no esta entre 25 y 255'
    }
}
let numero4 = Number(prompt('Ingresa un numero'))
alert(entre(numero4))
console.log(entre(numero4))
