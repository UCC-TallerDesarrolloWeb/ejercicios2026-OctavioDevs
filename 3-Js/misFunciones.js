/**
 * Conversión de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id - id del elemento input en el HTML
 * @param {number} valor - valor ingresado por el usuario
 */
const convertirUnidades = (id, valor) => {

    let metros, pulgadas, pie, yardas;

    valor = valor.replace(",",".");

    if (isNaN(valor)) {

        alert("Se ingresó un valor incorrecto: " + id);

        metros = "";
        pulgadas = "";
        pie = "";
        yardas = "";

    } else if (id === "metro") {

        metros = valor;
        pulgadas = 39.3701 * valor;
        pie = 3.28084 * valor;
        yardas = 1.09361 * valor;

    } else if (id === "pulgada") {

        pulgadas = valor;
        metros = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yardas = 0.0277778 * valor;

    } else if (id === "pie") {

        pie = valor;
        metros = 0.3048 * valor;
        pulgadas = 12 * valor;
        yardas = 0.333333 * valor;

    } else if (id === "yarda") {

        yardas = valor;
        metros = 0.9144 * valor;
        pulgadas = 36 * valor;
        pie = 3 * valor;
    }

    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = pie.toFixed(2);
    document.getElementById("yarda").value = yardas.toFixed(2);
};


/**
 * Conversión entre grados y radianes
 * @method convertirGR
 * @param {string} id - id del elemento input en el HTML
 */
function convertirGR(id) {

    let grad, rad;

    if (id === "grados") {

        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;

    } else if (id === "radianes") {

        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


/**
 * Mostrar u ocultar un div dependiendo del radio button seleccionado
 * @method mostrarOcultar
 * @param {string} valor - valor del radio button seleccionado
 */
const mostrarOcultar = (valor) => {

    const displayDiv = valor === "val_mostrar" ? "block" : "none";

    document.getElementById("unDiv").style.display = displayDiv;
};


/**
 * Suma dos números
 * @method sumar
 */
const sumar = () => {

    let sum1, sum2;

    sum1 = document.getElementById("nums1").value;
    sum2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value =
        parseFloat(sum1) + parseFloat(sum2);
};


/**
 * Resta dos números
 * @method restar
 */
const restar = () => {

    let res1, res2;

    res1 = document.getElementById("numr1").value;
    res2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value =
        parseFloat(res1) - parseFloat(res2);
};


/**
 * Multiplica dos números
 * @method multiplicar
 */
const multiplicar = () => {

    let mul1, mul2;

    mul1 = document.getElementById("numm1").value;
    mul2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value =
        parseFloat(mul1) * parseFloat(mul2);
};


/**
 * Divide dos números
 * @method dividir
 */
const dividir = () => {

    let div1, div2;

    div1 = document.getElementById("numd1").value;
    div2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value =
        parseFloat(div1) / parseFloat(div2);
};