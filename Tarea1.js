class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }

    maullar() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}

// Se agregó la palabra clave 'new' aquí:
const miGato = new Gato("Pelusa"); 
miGato.maullar(); // Salida: Pelusa dice: ¡Miau!