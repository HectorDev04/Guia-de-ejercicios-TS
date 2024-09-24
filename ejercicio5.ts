abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) { }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    abstract mostrarDatos(): void; // Método abstracto que debe ser implementado en las subclases
}

class Empleado extends Persona {
    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        public sueldo: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Sueldo: $${this.sueldo}`);
    }
}

// Ejemplo de uso:
const empleado = new Empleado('Hector', 'Rodriguez', 'Calle Falsa 123', '1234567890', 30, 5000);
empleado.mostrarDatos();