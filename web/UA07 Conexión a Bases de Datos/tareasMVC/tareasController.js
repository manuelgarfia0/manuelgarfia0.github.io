class TareasController {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        // Vincular eventos de la vista con los métodos del controlador
        this.vista.vincularAñadirTarea(this.manejarAñadirTarea.bind(this));
        this.vista.vincularEliminarTarea(this.manejarEliminarTarea.bind(this));

        // Inicializar la vista con las tareas existentes
        this.cargarTareasIniciales();
    }

    // Cargar las tareas iniciales desde el modelo y mostrarlas en la vista
    cargarTareasIniciales() {
        const tareas = this.modelo.obtenerTareas(); // Obtener tareas del modelo
        tareas.forEach(tarea => this.vista.añadirTareaALista(tarea));
    }

    // Manejar la adición de una nueva tarea
    manejarAñadirTarea(descripcion, fecha) {
        const tarea = this.modelo.crearTarea(descripcion, fecha); // Crear tarea en el modelo
        this.vista.añadirTareaALista(tarea); // Añadir tarea a la vista
    }

    // Manejar la eliminación de una tarea
    manejarEliminarTarea(id) {
        const tareaEliminada = this.modelo.eliminarTarea(id); // Eliminar tarea del modelo
        if (tareaEliminada) {
            this.vista.eliminarTareaDeLista(id); // Eliminar tarea de la vista
        }
    }
}