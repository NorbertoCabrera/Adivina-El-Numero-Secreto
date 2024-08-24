

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximoArreglo = 10;
function verificarIntento(){ 
    let numeroDelUsuario = parseInt(document.getElementById('numeroDelUsuario').value);  
   console.log(intentos);
    if(numeroDelUsuario==numeroSecreto){
        asignarTextoAElemento('p',`Felicitaciones usted ha acertado en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDelUsuario<numeroSecreto){
            asignarTextoAElemento('p','Usted no acerto, el numero secreto es mayor!')
        }else{
            asignarTextoAElemento('p','Usted no acerto, el numero secreto es menor!')
        }
        intentos++;
        limpiarCaja();
    }
}
function asignarTextoAElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    
}

function retornarNumeroSecreto(){
    let numeroSorteado = Math.floor(Math.random()*numeroMaximoArreglo)+1;
    console.log(numeroSorteado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximoArreglo){
        asignarTextoAElemento('p','Ya se sortearon todos los numeros posibles, gracias!');
    }else{
        
        if(listaNumerosSorteados.includes(numeroSorteado)){
    
            return retornarNumeroSecreto();
            
        }else{
            
            listaNumerosSorteados.push(numeroSorteado);
            return numeroSorteado;
    
        }
        



        }
}

function limpiarCaja(){
    document.querySelector('#numeroDelUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoAElemento('h1','Este es el juego del numero secretinho!');
    asignarTextoAElemento('p',`Elige un numero del 1 al ${numeroMaximoArreglo}`);
    numeroSecreto = retornarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();
console.log(numeroSecreto);
