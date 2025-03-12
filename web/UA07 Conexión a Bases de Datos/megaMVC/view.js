class megaView {
    getDatos() {
        let nombre = $("#nombre").val();
        let apellidos = $("#apellidos").val();
        let edad = $("#edad").val();
        let ciudad = $("#ciudad").val();
        return {
            "nombre": nombre,
            "apellidos": apellidos,
            "edad": edad,
            "ciudad": ciudad
        };
    }       // Obtengo los datos
    render(lista) {
        let tabla = document.createElement("table");
        let thead = document.createElement("thead");
        let trHead = document.createElement("tr");
        let cabecera = ["Nombre", "Apellidos", "Edad", "Ciudad"];
        for (let i = 0; i < cabecera.length; i++) {
            let tdHead = document.createElement("th");
            tdHead.innerHTML = cabecera[i];
            trHead.appendChild(tdHead);
        }
        thead.appendChild(trHead);
        tabla.appendChild(thead);
        let tbody = document.createElement("tbody");
        for (let i = 0; i < lista.length; i++) {
            let trBody = document.createElement("tr");
            trBody.setAttribute("id", i);
            trBody.appendChild(this.pintaTd(lista[i].nombre));
            trBody.appendChild(this.pintaTd(lista[i].apellidos));
            trBody.appendChild(this.pintaTd(lista[i].edad));
            trBody.appendChild(this.pintaTd(lista[i].ciudad));
            trBody.addEventListener("click", function () {
                controller.eliminaItem(this.id);
            });
            tbody.appendChild(trBody);
        }
        tabla.appendChild(tbody);
        $("#tabla").html(tabla);
        this.mostrarEstadisticas(lista);
    }       // Renderizo o muestro la vista
    pintaTd(item) {
        let td = document.createElement("td");
        td.innerHTML = item;
        return td;
    }       // Pinto una celda
    mostrarEstadisticas(lista) {
        let suma = 0;
        let cont = 0;
        let max = 0;
        let min = 999;
        lista.forEach(
            function (elemento) {
                cont++;
                suma = suma + parseInt(elemento.edad);
                if (elemento.edad > max) {
                    max = elemento.edad;
                }
                if (elemento.edad < min) {
                    min = elemento.edad;
                }
                let pSuma = "<p>Suma: " + suma + "</p>";
                let pMedia = "<p>Media: " + (suma / cont) + "</p>";
                let pMax = "<p>Max: " + max + "</p>";
                let pMin = "<p>Min: " + min + "</p>";
                $("#resultados").html(pSuma + pMedia + pMax + pMin);
            }
        )
    }

}