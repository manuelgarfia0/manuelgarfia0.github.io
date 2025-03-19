class TareasController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
    }

    handleAddTask(descripcion, fecha) {
        const tarea = this.model.setTarea(descripcion, fecha);
        this.view.addTaskToList(tarea);
    }

    handleDeleteTask(id) {
        this.model.removeTarea(id);
        this.view.removeTaskFromList(id);
    }
}