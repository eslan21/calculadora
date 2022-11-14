import {Operadores} from './clases.js'
const operar = new Operadores()


//---------------------------------------Selectores
const botones = document.querySelectorAll(".boton")
const pantalla1 = document.querySelector('#screem1')
const pantalla2 = document.querySelector('#screem2')
const botonBorrar = document.querySelector('[data-button=C]');
const botonIgualdad = document.querySelector('[data-button= "="]');
const botonISuma = document.querySelector('[data-button= "+"]');
const botonIResta = document.querySelector('[data-button= "-"]');
const botonIMultiplicar = document.querySelector('[data-button= "x"]');
const botonIDividir = document.querySelector('[data-button= "/"]');
const botonIgual = document.querySelector('[data-button= "="]')





/*---------------------------------------Eventons----------------*/

//Eventos de botones
for(let i=0; i < botones.length; i++){

    if(botones[i].getAttribute('data-button') != 'C' && botones[i].getAttribute('data-button') != '='&& botones[i].getAttribute('data-button') != '+'&& botones[i].getAttribute('data-button') != '-'&& botones[i].getAttribute('data-button') != '/' && botones[i].getAttribute('data-button') != 'x'){
        botones[i].addEventListener('click', calculadora);
    }
}
//Evento de boton C
botonBorrar.addEventListener('click', borrarPantalla)
//Evento =
botonIgualdad.addEventListener('click', operar.calcular)
//Operadores
botonISuma.addEventListener('click', ejecutar)
botonIResta.addEventListener('click', ejecutar)
botonIMultiplicar.addEventListener('click', ejecutar)
botonIDividir.addEventListener('click', ejecutar)
botonIgual.addEventListener('click', calcularTotal)

//---------------------------------Array con Datos to render on screem--------





//*******************************VARIABLES GLOBALES************************************//
let number1 = '';
let number2 = '';
let simboloOperacion = '';
let onScreen = '';


//*******************************FUNCIONES************************************//


//Imprimir en pantalla


function calculadora(){
    const atributo = this.getAttribute('data-button');  
    let ultimoStr = onScreen.substring(onScreen.length-1, onScreen.length);
    if(ultimoStr==='.' && atributo==='.'){
        return;
    }
    onScreen += atributo;  
        if(simboloOperacion != ''){
            number2+=atributo;
        }else {
            number1+=atributo;
        }       
    pantalla2.innerHTML = onScreen;
}

//Boton Borrar

function borrarPantalla(){
    
    pantalla1.innerHTML = '';
    pantalla2.innerHTML = '';
    onScreen = '';
    number1 = '';
    number2 = '';
    simboloOperacion = '';

}


//realizarSuma

function realizarSuma(){
            pantalla2.innerHTML = onScreen;
            pantalla1.innerHTML=operar.sumaNumeros(number1,number2)
         
        
            if(number2 != ''){
                number1 = operar.sumaNumeros(number1,number2);
                number2 = '';
            }
            
}
//realizaResta

function realizarResta(){
            pantalla2.innerHTML = onScreen;
            pantalla1.innerHTML=operar.restarNumeros(number1,number2)
         
        
            if(number2 != ''){
                number1 = operar.restarNumeros(number1,number2);
                number2 = '';
            }
            
}
//realizaMultiplicacion

function realizarMultiplicacion(){
            pantalla2.innerHTML = onScreen;
            pantalla1.innerHTML=operar.multiplicarNumero(number1,number2)
         
        
            if(number2 != ''){
                number1 = operar.multiplicarNumero(number1,number2);
                number2 = '';
            }
            
}
//realizaDivicion

function realizarDivicion(){
            pantalla2.innerHTML = onScreen;
            pantalla1.innerHTML=operar.dividirNumero(number1,number2)
         
        
            if(number2 != ''){
                number1 = operar.dividirNumero(number1,number2);
                number2 = '';
            }      
}

//Boton de Igualdad

function calcularTotal(){

    if(number1 === '' && number2 ===''){
        return
    }
    const total = operar.calculoTotal(number1, number2,simboloOperacion)
    onScreen = String(total);
    number1 = total
    number2 = '';
    pantalla1.innerHTML=total
    pantalla2.innerHTML = onScreen;
    simboloOperacion = '';
    

}



function ejecutar(){
    let atributo = this.getAttribute('data-button');
    let ultimoStr = onScreen.substring(onScreen.length-1, onScreen.length);
    let validar = operar.verificarSimbolo(ultimoStr)
    
    if(!validar){
        return
    }
    
    switch(simboloOperacion){
        case '':
            onScreen +=  atributo;
            simboloOperacion = atributo;
            realizarSuma()
            break;
        case '+':
            onScreen +=  atributo;
            simboloOperacion = atributo;
            realizarSuma()
            break;
        case '-':
            onScreen +=  atributo;
            simboloOperacion = atributo;
            realizarResta()
            break;
        case 'x':
            onScreen +=  atributo;
            simboloOperacion = atributo;
            realizarMultiplicacion()
            break;
        case '/':
            onScreen +=  atributo;
            simboloOperacion = atributo;
            realizarDivicion()
            break;
       

    }
}

