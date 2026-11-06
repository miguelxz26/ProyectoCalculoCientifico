# Proyecto C + WebAssembly

## Objetivo
Compilar un programa modular en C hacia WebAssembly.

## Tecnologías
- C (Para compilar se utilizo GCC (GNU Compiler Collection))
- Emscripten
- WebAssembly
- HTML
- CSS
- JavaScript
- Vercel

## Compilación
#Para compilar el archivo .exe:
>>gcc -Iinclude src/main.c src/operaciones.c src/conversiones.c src/utilidades.c -o ProyectoCalculoCientifico.exe

#Para compilar en Emscripten (dos etapas) se tiene que compilar una linea a una.                                                                           
>> emcc -Iinclude -c src/operaciones.c -o build/operaciones.o
>> emcc -Iinclude -c src/conversiones.c -o build/conversiones.o
>> emcc -Iinclude -c src/utilidades.c -o build/utilidades.o

#Para compilar el wasm y javascript
>>emcc build/conversiones.o build/operaciones.o build/utilidades.o -o public/ProyectoCalculoCientifico.js -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s EXPORTED_FUNCTIONS='["_celsiusAFahrenheit", "_fahrenheitACelsius", "_calcularAreaCirculo", "_calcularAreaTriangulo", "_calcularAreaRectangulo", "_calcularAreaExagono", "_sumar", "_restar", "_multiplicar", "_dividir", "_potencia", "_raizCuadrada"]'

Nota: Se agrega el EXPORTED_RUNTIME_METHODS y EXPORTED_FUNCTIONS para incluir los metodos y llamada en el JavaScript

## Servidor local ejecutar en la consola.
python -m http.server 8000
Link: http://localhost:8000/public/
para detener el servidor local CTRL + C

## Despliegue
Publicación mediante GitHub + Vercel.
