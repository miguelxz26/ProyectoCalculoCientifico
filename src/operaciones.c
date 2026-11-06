#include "operaciones.h"
#include <math.h>
#ifdef __EMSCRIPTEN__
    #include <emscripten/emscripten.h>
#else
    // Si no es Emscripten (es decir, estás en GCC), creamos la macro vacía
    #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE
float sumar(float a, float b)
{
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
float restar(float a, float b)
{
    return a - b;
}

EMSCRIPTEN_KEEPALIVE
float multiplicar(float a, float b)
{
    return a * b;
}

EMSCRIPTEN_KEEPALIVE
float dividir(float a, float b)
{



    if (b == 0)
        return 0;

    return a / b;
}

EMSCRIPTEN_KEEPALIVE
float potencia(float a, float b)
{
    return pow(a, b);
}


EMSCRIPTEN_KEEPALIVE
float raizCuadrada(float a)
{
    if (a < 0)
    return 0;

    return sqrt(a);
}

