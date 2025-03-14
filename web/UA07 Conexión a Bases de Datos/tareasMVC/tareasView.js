class tareasView{
    constructor(){
        this.tareas = [];
    }

    render(tareas){
        this.tareas = tareas;
        let html = '';
        this.tareas.forEach(tarea => {
            html += `
                <div class="tarea">
                    <h3>${tarea.titulo}</h3>
                    <p>${tarea.descripcion}</p>
                </div>
            `;
        });
        document.getElementById('tareas').innerHTML = html;
    }
}