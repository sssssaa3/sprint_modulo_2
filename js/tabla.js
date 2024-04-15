//importamos base de datos
import productos from "./db.js"

$("document").ready(() => {

    //funcion que crea una fila por cada elemento de la base de datos
    function createTr(nombre, marca, categoria, precio, stock) {
        let tr = $("<tr></tr>");
        let tdNombre = $("<td></td>").text(nombre);
        let tdMarca = $("<td></td>").text(marca);
        let tdCategoria = $("<td></td>").text(categoria);
        let tdPrecio = $("<td></td>").text(precio);
        let tdStock = $("<td></td>").text(stock);

        tdNombre.attr("scope", "col");
        tdMarca.attr("scope", "col");
        tdCategoria.attr("scope", "col");
        tdPrecio.attr("scope", "col");
        tdStock.attr("scope", "col");

        tr.append(tdNombre, tdMarca, tdCategoria, tdPrecio, tdStock);
        $("#tbody").append(tr)

    }

    //recorremos el array y creamos una fila en tabla por cada productos en la base de datos
    productos.forEach((p) => {
        createTr(p.nombreProducto, p.marca, p.categoria, p.precio, p.stock)

    })

    $('#myTable').DataTable();
})