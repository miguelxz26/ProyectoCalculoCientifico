document.addEventListener("DOMContentLoaded", () => {
    const selectOperacion = document.getElementById("operacion");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const labelA = document.getElementById("labelA");
    const labelB = document.getElementById("labelB");
    const btnConvertir = document.getElementById("btnConvertir");
    const pResultado = document.getElementById("resultado");

    // VALIDACIÓN: Si falta algún elemento, mostrará un error claro en consola en lugar de romperse.
    if (!selectOperacion || !inputA || !inputB || !labelA || !labelB || !btnConvertir || !pResultado) {
        console.error("Error: Uno o más elementos del DOM no fueron encontrados. Revisa los IDs en tu HTML.");
        return;
    }

    // Función que muestra u oculta el segundo input según la operación elegida
    function actualizarInterfaz() {
        const operacion = selectOperacion.value;
        pResultado.textContent = "";

        // Operaciones que solo necesitan UN número
        if (operacion === "celsiusAFahrenheit" || operacion === "fahrenheitACelsius" || operacion === "calcularAreaCirculo" || operacion === "raizCuadrada") {
            inputB.style.display = "none";
            labelB.style.display = "none";

            // Cambiar los textos de ayuda según lo que se pida
            if (operacion === "celsiusAFahrenheit") labelA.textContent = "Grados Celsius (°C):";
            if (operacion === "fahrenheitACelsius") labelA.textContent = "Grados Fahrenheit (°F):";
            if (operacion === "calcularAreaCirculo") labelA.textContent = "Radio del círculo:";
            if (operacion === "raizCuadrada") labelA.textContent = "Número:";
        } 
        // Operaciones que necesitan DOS números
        else {
            inputB.style.display = "block";
            labelB.style.display = "block";

            if (operacion === "calcularAreaTriangulo") {
                labelA.textContent = "Base:";
                labelB.textContent = "Altura:";
            } else if (operacion === "calcularAreaRectangulo") {
                labelA.textContent = "Base:";
                labelB.textContent = "Altura:";
            } else if (operacion === "calcularAreaExagono") {
                labelA.textContent = "Perímetro:";
                labelB.textContent = "Apotema:";
            } else if (operacion === "sumar") {
                labelA.textContent = "Número A:";
                labelB.textContent = "Número B:";
            } else if (operacion === "restar") {
                labelA.textContent = "Número A:";
                labelB.textContent = "Número B:";
            } else if (operacion === "multiplicar") {
                labelA.textContent = "Número A:";
                labelB.textContent = "Número B:";
            } else if (operacion === "dividir") {
                labelA.textContent = "Número A:";
                labelB.textContent = "Número B:";
            } else if (operacion === "potencia") {
                labelA.textContent = "Base:";
                labelB.textContent = "Exponente:";
            }
        }
    }

    // Función principal para realizar el cálculo llamando a C mediante WebAssembly
    function realizarCalculo() {
        const operacion = selectOperacion.value;
        const valorA = parseFloat(inputA.value);
        const valorB = parseFloat(inputB.value);

        // Validación básica de números
        if (isNaN(valorA)) {
            pResultado.textContent = "Por favor, introduce un número válido.";
            return;
        }

        try {
            // Verificamos que WebAssembly esté cargado
            if (typeof Module !== 'undefined' && Module.ccall) {
                let resultadoWasm;

                // Llamamos explícitamente a cada función según la opción seleccionada
                if (operacion === "celsiusAFahrenheit") {
                    resultadoWasm = Module.ccall('celsiusAFahrenheit', 'number', ['number'], [valorA]);
                    pResultado.textContent = `${valorA} °C equivalen a ${resultadoWasm.toFixed(2)} °F`;
                } 
                else if (operacion === "fahrenheitACelsius") {
                    resultadoWasm = Module.ccall('fahrenheitACelsius', 'number', ['number'], [valorA]);
                    pResultado.textContent = `${valorA} °F equivalen a ${resultadoWasm.toFixed(2)} °C`;
                } 
                else if (operacion === "calcularAreaCirculo") {
                    resultadoWasm = Module.ccall('calcularAreaCirculo', 'number', ['number'], [valorA]);
                    pResultado.textContent = `El área del círculo es: ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "raizCuadrada") {
                    resultadoWasm = Module.ccall('raizCuadrada', 'number', ['number'], [valorA]);
                    pResultado.textContent = `La raíz cuadrada es: ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "calcularAreaTriangulo") {
                    resultadoWasm = Module.ccall('calcularAreaTriangulo', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `El área del triángulo es: ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "calcularAreaRectangulo") {
                    resultadoWasm = Module.ccall('calcularAreaRectangulo', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `El área del rectángulo es: ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "calcularAreaExagono") {
                    resultadoWasm = Module.ccall('calcularAreaExagono', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `El área del hexágono es: ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "sumar") {
                    resultadoWasm = Module.ccall('sumar', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `Resultado: ${valorA} + ${valorB} = ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "restar") {
                    resultadoWasm = Module.ccall('restar', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `Resultado: ${valorA} - ${valorB} = ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "multiplicar") {
                    resultadoWasm = Module.ccall('multiplicar', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `Resultado: ${valorA} * ${valorB} = ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "dividir") {
                    resultadoWasm = Module.ccall('dividir', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `Resultado: ${valorA} / ${valorB} = ${resultadoWasm.toFixed(2)}`;
                } 
                else if (operacion === "potencia") {
                    resultadoWasm = Module.ccall('potencia', 'number', ['number', 'number'], [valorA, valorB]);
                    pResultado.textContent = `Resultado: ${valorA} elevado a ${valorB} = ${resultadoWasm.toFixed(2)}`;
                }

            } else {
                pResultado.textContent = "Error: WebAssembly no está listo.";
            }
        } catch (error) {
            console.error(error);
            pResultado.textContent = "Ocurrió un error al ejecutar la función.";
        }
    }

    // Eventos
    selectOperacion.addEventListener("change", actualizarInterfaz);
    btnConvertir.addEventListener("click", realizarCalculo);

    // Inicializar al cargar la página
    actualizarInterfaz();
});