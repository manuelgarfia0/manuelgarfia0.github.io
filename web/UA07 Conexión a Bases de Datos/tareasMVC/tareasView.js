class TareasView {
    constructor() {
        this.taskList = $('#taskList');
    }

    getInputData() {
        return {
            descripcion: $('#taskInput').val(),
            fecha: $('#taskDate').val()
        };
    }

    clearInputFields() {
        $('#taskInput').val('');
        $('#taskDate').val('');
    }

    addTaskToList(tarea) {
        const taskItem = $(`
            <li id="task-${tarea.id}">
                ${tarea.descripcion} - ${tarea.fecha}
                <button class="deleteButton" data-id="${tarea.id}">Eliminar</button>
            </li>
        `);
        this.taskList.append(taskItem);
    }

    removeTaskFromList(id) {
        $(`#task-${id}`).remove();
    }

    bindAddTask(handler) {
        $('#addTaskButton').click(() => {
            const { descripcion, fecha } = this.getInputData();
            if (descripcion && fecha) {
                handler(descripcion, fecha);
                this.clearInputFields();
            }
        });
    }

    bindDeleteTask(handler) {
        this.taskList.on('click', '.deleteButton', (event) => {
            const id = $(event.target).data('id');
            handler(id);
        });
    }
}