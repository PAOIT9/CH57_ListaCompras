const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");



let cont = 0;
let costoTotal = 0;
let totalEnProductos = 0;

function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }// tenga informacion

    if (isNaN(txtNumber.value)) {
        return false;
    }//tiene que ser un numero   

    if (Number(txtNumber.value) <= 0) {
        return false;
    }//mayor a 0   

    return true;
}//Validar Cantidad

function getPrecio() {
    return Math.round(Math.random() * 10000) / 100;
}//Get precio

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtName.style.border = "";
    txtNumber.style.border = "";
    //name
    //validar que tenda informacion minimo 3 letras
    if (txtName.value.length < 3) {
        txtName.style.border = "medium red solid";
        //mensaje de error 
        alertValidacionesTexto.innerHTML =
            "<strong> El nombre del producto no es correcto</strong></br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }//<3
    if (!validarCantidad()) {
        txtNumber.style.border = "medium red solid";
        alertValidacionesTexto.innerHTML +=
            "<strong> La cantidad no es correcta</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;

    }//! validarcantidad

    if (isValid) {
        cont++;
        let precio = getPrecio();
        let row = `<tr>
        <td>${cont}</td>
         <td>${txtName.value}</td>
          <td>${txtNumber.value}</td>
           <td>${precio}</td>
                     </tr>
        `;

        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText = cont;
        totalEnProductos += Number(txtNumber.value);
        productosTotal.innerText = totalEnProductos;
        costoTotal += precio * Number(txtNumber.value);
        //costoTotal.toFixed(2)// centavos forma facil // precioTotal.innerText "$ "+ costoTotal.toFixed(2);
        precioTotal.innerText = new Intl.NumberFormat("es-MX",
            { style: "currency", currency: "MXN" }).format(costoTotal);
        txtName.value = "";
        txtNumber.value = "";
        txtName.focus();
    }//isValid

});//btnAgregar click 
