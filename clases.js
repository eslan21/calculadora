export class Operadores{
    constructor(){
        
    }

    verificarSimbolo(element){
        const  simbolo = /[0-9]/;
        return simbolo.test(element);
    }

    errorPrevent(str){

    }

    sumaNumeros(a,b){
        
        if(a != '' && b != ''){
            return (Number(a) + Number(b)).toFixed(2)
        } else {
            return a
        }
    };
    restarNumeros(a,b){
        
        if(a != '' && b != ''){
            return (Number(a) - Number(b)).toFixed(2)
        } else {
            return a
        }
    };
    multiplicarNumero(a,b){
        
        if(a != '' && b != ''){
            return (Number(a) * Number(b)).toFixed(2)
        } else {
            return a
        }
    };
    dividirNumero(a,b){
        
        if(a != '' && b != ''){
            return (Number(a) / Number(b)).toFixed(2)
        } else {
            return a
        }
    };

    calculoTotal(a,b,simb){
          
        switch(simb){
            
            case '+':
                return this.sumaNumeros(a,b)
                break;
            case '-':
                return this.restarNumeros(a,b)
                break;
            case 'x':
                    
                return this.multiplicarNumero(a,b)
                break;
            case '/':
                return this.dividirNumero(a,b)
                break;
           default:
               return
               break;
        }
    }

    
}

                                                                                 