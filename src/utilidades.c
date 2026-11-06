#include <math.h>
#include <utilidades.h>
#ifdef __EMSCRIPTEN__
    #include <emscripten/emscripten.h>
#else
    // Si no es Emscripten (es decir, estás en GCC), creamos la macro vacía
    #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE
float calcularAreaCirculo(float radio){
    return M_PI * pow(radio, 2);
}

EMSCRIPTEN_KEEPALIVE
float calcularAreaTriangulo(float base, float altura){
    return (base * altura ) / 2;
}

EMSCRIPTEN_KEEPALIVE
float calcularAreaRectangulo(float base, float altura){
    return (base * altura );
}

EMSCRIPTEN_KEEPALIVE
float calcularAreaExagono(float perimetro, float apotema){
    return (perimetro * apotema ) / 2;
}