class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        // Usando un bucle para calcular la potencia
        let resultado = 1;
        for (let i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));