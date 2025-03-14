class tareasController{
    constructor(){
        this.tareasModel = new tareasModel();
    }

    getTareas(){
        return this.tareasModel.getTareas();
    }

    addTarea(tarea){
        this.tareasModel.addTarea(tarea);
    }

    deleteTarea(id){
        this.tareasModel.deleteTarea(id);
    }

    updateTarea(id, tarea){
        this.tareasModel.updateTarea(id, tarea);
    }
}