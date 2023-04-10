//La variable numeroBinario contiene el número que deseamos convertir en n° decimal
let numeroBinario = 11111111111;
//Convierto el n° en string, para poder separarlo por caracteres con el metodo split de cadena vacia ('')
let numeroConvertidoEnString = numeroBinario.toString(); 
let arrayBinario= numeroConvertidoEnString.split('');
/*Invertimos el array, dado que inicia en el indice 0 de izquierda a derecha y para trabajar con binarios necesitamos
acceder a las posiciones de cada n° de derecha a izquierda*/
let arrayInvertido= arrayBinario.reverse();


//Creo una variable que va a representar la suma total de los números convertidos, es decir el n° Decimal.
let numeroEnDecimal=0; 
/*Para cada elemento del array accedemos al elemento y al indice.
Se debe multiplicar cada dígito que compone el binario por (2) para elevarlo al índice o posición correspondiente.
Por ejemplo el número 101 = (1x2^2) + (0x2^1) + (1x2^0);
Luego resolvemos: 4 + 0 + 1 = 5. <--- 5 en decimal es lo que se almacena en la variable numeroEnDecimal;
*/
arrayInvertido.forEach(function (elemento, indice) { 
    elemento = elemento*2; //Acá multiplicamos el elemento por 2, javascript lo convierte en número nuevamente (ToNumber)
    elemento =(Math.pow(elemento, indice)); //Elevamos el elemento por su posición (contando de derecha a izquierda)
    numeroEnDecimal += elemento; //Sumamos el valor de cada elemento para obtener el total en DECIMAL  
})
console.log("El número binario " + numeroBinario + " En Decimal es: " + numeroEnDecimal);
    
