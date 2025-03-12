class megaController{
    constructor() {
        this.model =  new megaModel();     // Instancia del modelo
        this.view = new megaView();       // Instancia de la vista
        this.updateView();      // Llamo a la vista por primera vez para mostrar los datos si los hubiera
    }
    createItem(){
        let obj=this.view.getDatos();
        this.model.addItem(obj);
        this.updateView();
    }           // Función para crear crear un item
    eliminaItem(idTR) {
        this.model.deleteItem(idTR);
        this.updateView();
    }           // Función para eliminar un item
    updateView(){
        let lista=this.model.getLista();
        this.view.render(lista);
    }           // Función para actualizar la vista con los datos existentes
}