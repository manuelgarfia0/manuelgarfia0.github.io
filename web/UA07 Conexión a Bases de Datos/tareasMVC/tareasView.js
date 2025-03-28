class TareasView {
    constructor() {
        this.listaTareas = $('#taskList'); // Lista de tareas en el DOM
    }

    // Obtener los datos de entrada del formulario
    obtenerDatosEntrada() {
        return {
            descripcion: $('#taskInput').val(),
            fecha: $('#taskDate').val()
        };
    }

    // Limpiar los campos de entrada del formulario
    limpiarCamposEntrada() {
        $('#taskInput').val('');
        $('#taskDate').val('');
    }

    // Añadir una tarea a la lista en la vista
    añadirTareaALista(tarea) {
        const elementoTarea = $(`
            <li id="task-${tarea.getId()}">
                <span>${tarea.getId()}. ${tarea.getDescripcion()} --> ${tarea.getFecha()}</span>
                <button class="deleteButton" data-id="${tarea.getId()}">Eliminar</button>
            </li>
        `);
        this.listaTareas.append(elementoTarea);
    }

    // Eliminar una tarea de la lista en la vista
    eliminarTareaDeLista(id) {
        $(`#task-${id}`).remove();
    }

    // Vincular el evento de añadir tarea con un manejador
    vincularAñadirTarea(manejador) {
        $('#addTaskButton').click(() => {
            const { descripcion, fecha } = this.obtenerDatosEntrada();
            if (descripcion && fecha) {
                manejador(descripcion, fecha); // Llamar al controlador
                this.limpiarCamposEntrada(); // Limpiar los campos de entrada
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Vincular el evento de eliminar tarea con un manejador
    vincularEliminarTarea(manejador) {
        this.listaTareas.on('click', '.deleteButton', (event) => {
            const id = $(event.target).data('id'); // Obtener el ID de la tarea
            manejador(id); // Llamar al controlador
        });
    }
}