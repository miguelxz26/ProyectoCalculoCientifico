#include <stdio.h>
#include "operaciones.h"
#include "conversiones.h"
#include <utilidades.h>

int main(void)
{
    float c = 25.0f;
    float f = celsiusAFahrenheit(c);
    float f2=25.0f;
    float c2=fahrenheitACelsius(f2);
    float radio = 12;
    float areacirculo = calcularAreaCirculo(radio);
    float areatriangulo = calcularAreaTriangulo(10, 5);
    float areaRectangulo = calcularAreaRectangulo(10, 5);
    float base = 5;
    float exponente = 2;
    float p = potencia(base, exponente);
    float numero = 25;
    float r = raizCuadrada(numero);
    float perimetro = 12;
    float apotema = 2;
    float areaExagono = calcularAreaExagono(perimetro, apotema);

    printf("Celsius: %.2f\n", c);
    printf("Fahrenheit: %.2f\n", f);
    printf("conversion fahrenheit %.2f  a celsius %.2f\n", f2, c2);
    printf("2 + 3 = %.2f\n", sumar(2, 3));
    printf("el area del circulo es :%.2f\n",areacirculo);
    printf("el area del triangulo es :%.2f\n",areatriangulo);
    printf("el area del rectangulo es :%.2f\n",areaRectangulo);
    printf("la potencia es:%.2f\n", p);
    printf("la raiz cuadrada de %.2f es %.2f\n", numero, r);
    printf("El exagono con perimetro: %.2f y apotema: %.2f tiene un area de: %.2f\n", perimetro, apotema, areaExagono);

    printf("\nPresiona ENTER para salir...");
    getchar(); 
    return 0; 
}
