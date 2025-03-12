class megaModel{
    constructor(){
        this.lista = [];        // Base de datos
    }
    getLista(){
        return this.lista;
    }           // Devuelve la base de datos
    addItem(item){
        this.lista.push(item);
    }        // Agrega un item
    deleteItem(index){
        this.lista.splice(index,1);
    }    // Elimina un item
}