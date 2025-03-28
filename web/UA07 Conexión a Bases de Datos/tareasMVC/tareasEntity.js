class Tarea{
    constructor(id, descripcion, fecha){
        if(id > 0){
            this.id = id
        }
        if(descripcion != null && descripcion != undefined){
            this.descripcion = descripcion
        }
        this.fecha = fecha
    }
    getId(){
        return this.id
    }
    getDescripcion(){
        return this.descripcion
    }
    getFecha(){
        return this.fecha
    }
    setId(id){
        this.id = id
    }
    setDescripcion(descripcion){
        this.descripcion = descripcion
    }
    setFecha(fecha){
        this.fecha = fecha
    }
}