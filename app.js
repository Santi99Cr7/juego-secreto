let numeroMaximo=10;
let intentos;

let numeroSecreto ;
let listaNumerosSorteados=[];

condicionesIniciales();




function asignarTextoElemento(elemento,texto){
    document.querySelector(elemento).innerHTML= texto;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroSecreto===numeroDeUsuario);
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero es: ${numeroSecreto} lo hiciste en: ${intentos} ${intentos===1 ? 'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled')

    }else if(numeroDeUsuario > numeroSecreto){
        
        asignarTextoElemento('p',`El numero secreto es menor jeje`);
        intentos++;
        limpiarCaja();
    }else{
        asignarTextoElemento('p',`El numero secreto es mayor jeje`);
        intentos++;
        limpiarCaja();
    }

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';   //  # esto es para el ID   por lo que no es el cabezal
}

function reiniciarJuego(){
    limpiarCaja();//limpiar la caja
    condicionesIniciales();//Indicarmensaje de inicio
    

    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
    //generar numero aleatoreo
    //deshabilitar el boton
    //inicializar el contador intentos
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p',`ya se sortearon todos los numeros putito`)

    }else{
            // si el numero generado esta incluido en la lista
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    
    asignarTextoElemento('h1','Juego pro tu Papa');
    asignarTextoElemento('p',`Elige un numero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
}

/*
let numeroMaximo=16;

let titulo = document.querySelector('h1');

titulo.innerHTML= 'Juego pro tu Papa';

let parrafo = document.querySelector('p');
parrafo.innerHTML=`Elige un numero del 1 al  ${numeroMaximo}`;



function intentoDeUsuario(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}*/