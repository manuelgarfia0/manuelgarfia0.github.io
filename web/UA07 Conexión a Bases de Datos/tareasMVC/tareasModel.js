class TareasModel {
    constructor() {
        this.tareas = []; // Lista de tareas
        this.contador = 1; // Contador para generar IDs únicos
    }

    // Crear una nueva tarea
    crearTarea(descripcion, fecha) {
        const nuevaTarea = new Tarea(this.contador++, descripcion, fecha);
        this.tareas.push(nuevaTarea);
        console.log("Tarea añadida:", nuevaTarea); // Mostrar la tarea añadida en la consola
        this.mostrarTareasEnConsola();
        return nuevaTarea;
    }

    // Leer todas las tareas
    obtenerTareas() {
        console.log("Obteniendo las tareas:", this.tareas); // Mostrar todas las tareas en la consola
        return this.tareas;
    }

    // Leer una tarea específica por ID
    obtenerTareaPorId(id) {
        const tarea = this.tareas.find(tarea => tarea.getId() === id) || null;
        console.log(`Obteniendo tarea con ID ${id}:`, tarea); // Mostrar la tarea obtenida en la consola
        return tarea;
    }

    // Actualizar una tarea por ID
    actualizarTarea(id, nuevaDescripcion, nuevaFecha) {
        const tarea = this.obtenerTareaPorId(id);
        if (tarea) {
            if (nuevaDescripcion) tarea.setDescripcion(nuevaDescripcion);
            if (nuevaFecha) tarea.setFecha(nuevaFecha);
            console.log(`Tarea actualizada con ID ${id}:`, tarea); // Mostrar la tarea actualizada en la consola
            this.mostrarTareasEnConsola();
            return tarea;
        }
        return null;
    }

    // Eliminar una tarea por ID
    eliminarTarea(id) {
        const indice = this.tareas.findIndex(tarea => tarea.getId() === id);
        if (indice !== -1) {
            const tareaEliminada = this.tareas.splice(indice, 1)[0];
            console.log(`Tarea eliminada con ID ${id}:`, tareaEliminada); // Mostrar la tarea eliminada en la consola
            this.mostrarTareasEnConsola();
            return tareaEliminada;
        }
        return null;
    }

    // Mostrar todas las tareas en la consola
    mostrarTareasEnConsola() {
        console.log(this.tareas);
    }
}