#include "conversiones.h"
#ifdef __EMSCRIPTEN__
    #include <emscripten/emscripten.h>
#else
    // Si no es Emscripten (es decir, estás en GCC), creamos la macro vacía
    #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE    
float celsiusAFahrenheit(float c)
{
    return c * 9.0f / 5.0f + 32.0f;
}

EMSCRIPTEN_KEEPALIVE
float fahrenheitACelsius(float f)
{
    return (f - 32.0f) * 5.0f / 9.0f;
}
