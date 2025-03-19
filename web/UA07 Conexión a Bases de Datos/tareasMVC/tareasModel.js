class Tareas {
    constructor() {
        this.lista = [];
        this.contador = 1;
    }

    getTareas() {
        return this.lista;
    }

    getTarea(id) {
        let encontrado = this.buscaId(id);
        if (encontrado >= 0) {
            return this.lista[encontrado];
        }
        return null;
    }

    setTarea(descripcion, fecha) {
        let obj = {
            id: this.contador++,
            descripcion: descripcion,
            fecha: fecha,
            estado: false,
        };
        this.lista.push(obj);
        return obj;
    }

    removeTarea(id) {
        let encontrado = this.buscaId(id);
        if (encontrado >= 0) {
            return this.lista.splice(encontrado, 1);
        }
        return null;
    }

    buscaId(id) {
        return this.lista.findIndex(tarea => tarea.id === id);
    }
}