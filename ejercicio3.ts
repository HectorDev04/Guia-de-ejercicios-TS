class Cancion {
    private autor: string;

    constructor(public titulo: string, public genero: string, autor: string) {
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string) {
        this.autor = autor;
    }

    mostrarDatos() {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

const cancion = new Cancion('Shape of You', 'Pop', 'Ed Sheeran');
cancion.mostrarDatos();