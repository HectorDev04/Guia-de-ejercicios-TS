class CabeceraPagina {
    constructor(
        public titulo: string,
        public color: string,
        public fuente: string,
        public alineacion: string = 'center' // Valor por defecto si no se especifica
    ) { }

    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`);
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina('Mi Página', 'blue', 'Arial');
cabecera.imprimirPropiedades();