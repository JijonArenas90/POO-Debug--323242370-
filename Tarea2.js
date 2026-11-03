class Coche {
    constructor(modelo) {
        this.modelo = modelo
    }

    encendido(){
        console.log("Encender Autou")
    }
}

const miCoche = new Coche("Nissan Sentra")

miCoche.encendido()