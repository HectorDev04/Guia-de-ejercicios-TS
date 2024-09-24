class Cuenta {
    constructor(
        public nombre: string,
        public cantidad: number,
        public tipoCuenta: string,
        public numeroCuenta: string
    ) { }

    depositar(cantidad: number) {
        if (cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}`);
        }
    }

    retirar(valor: number) {
        if (valor <= 0) {
            console.log('El valor a retirar debe ser mayor a cero.');
        } else if (valor > this.cantidad) {
            console.log('Fondos insuficientes.');
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Saldo actual: $${this.cantidad}`);
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoCuenta}, Número de cuenta: ${this.numeroCuenta}, Saldo: $${this.cantidad}`);
    }
}

const cuenta = new Cuenta('Hector Rodriguez', 100, 'Corriente', '123456789');
cuenta.depositar(3); // Salida: El valor a depositar debe ser mayor a $5.00
cuenta.depositar(10); // Salida: Se ha depositado correctamente: $10
cuenta.retirar(5); // Salida: Se ha retirado: $5. Saldo actual: $105
cuenta.mostrarDatos(); // Salida: Nombre: Hector Rodriguez, Tipo de cuenta: Corriente, Número de cuenta: 123456789, Saldo: $105