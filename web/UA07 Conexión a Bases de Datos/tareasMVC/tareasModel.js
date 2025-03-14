class Tareas {

    constructor() {
        this.lista = [];
        this.contador = 1;
    }

    getTareas() {
        return this.lista;
    }

    getTarea(id) {
        let encontrado = false;
        let resultado = [];
        encontrado = this.buscaId(id)
        if (encontrado >= 0)
            resultado = this.lista[encontrado];
        return resultado;
    }

    setTarea(descripcion) {
        let obj = {
            id: this.contador++,
            descripcion: descripcion,
            fecha: new Date(),
            estado: false,
        }
        this.lista.push(obj);
    }

    removeTarea(id){
        let encontrado = false;
        let resultado = [];
        encontrado = this.buscaId(id)
        if (encontrado >= 0)
            resultado = this.lista.splice(encontrado, 1);
        return resultado
    }

    removeAllTareas() {
        this.lista = [];
    }

    updateTarea(id, descripcion, estado) {
        let encontrado = false;
        let resultado = [];
        encontrado = this.buscaId(id)
        if (encontrado >= 0) {
            this.lista[encontrado].descripcion = descripcion;
            this.lista[encontrado].estado = estado;
            resultado = this.lista[encontrado];
        }
        return resultado;
    }

    buscaId(id) {
        let i = -1;
        let encontrado = false;
        do {
            i++;
            encontrado = (this.lista[i].id === id);
        } while (!encontrado && i < this.lista.length);
        if (encontrado)
            return i;
        return -1;   // Devuelve la posición encontrada
    }
}