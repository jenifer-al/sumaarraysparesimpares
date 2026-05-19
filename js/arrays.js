
// Buscamos las id


const cajaResultado = document.getElementById("resultado");
  const inputTexto = document.getElementById("texto");


function mostrar_suma_arrays(){


   let input = inputTexto.value;

   // 1. Limpiamos el texto exactamente igual que antes

      if (input.trim() === "") {
        cajaResultado.innerHTML = "Por favor, introduce números separados por comas.";
        return;
    }  
  
    // 2. Convertimos el texto en un array de strings usando la coma como separador
    let arrayTexto = input.split(",");

    // Variables para acumular las sumas
    let sumaPares = 0;
    let sumaImpares = 0;

    // 3. Recorremos el array con un bucle for
    for (let i = 0; i < arrayTexto.length; i++) {
        // Convertimos el trozo de texto actual a un número real
        let numero = Number(arrayTexto[i].trim());

        // Si el usuario metió un espacio o algo que no es un número válido, lo ignoramos
        if (isNaN(numero)) {
            continue; 
        }
// 4. Comprobamos si el número es par o impar
        if (numero % 2 === 0) {
            sumaPares += numero;   // Es par, lo sumamos al saco de los pares
        } else {
            sumaImpares += numero; // Es impar, lo sumamos al saco de los impares
        }


}

    // 5. Mostramos el resultado en el HTML
    cajaResultado.innerHTML = `Suma de pares: <strong>${sumaPares}</strong> <br> 
                               Suma de impares: <strong>${sumaImpares}</strong>`;




};


    



    
   



  

   





