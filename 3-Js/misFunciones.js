/**
 * conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param (string) id - id del elemento input en el html
 * @param (number) valor - valor ingresado por el usuario
 * @return Valor que retorna
 */
 convertirUnidades = (id, valor) =>{
    let metros, pulgadas, pie, yardas;

    if(isNaN(valor)){
        alert ("Se ingreso un valor incorrecto: " + id);
        metros = "";
        pulgadas = "";
        pie = "";
        yardas = "";
        
    }else if(id=="metro"){
        metros = valor;
        pulgadas = 39.3701 * valor;
        pie = 3.28084 * valor;
        yardas = 1.09361 * valor;
    }else if(id=="pulgada"){
        pulgadas = valor;
        metros = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yardas = 0.0277778 * valor;
    }else if(id=="pie"){
        pie = valor;
        metros = 0.3048 * valor;
        pulgadas = 12 * valor;
        yardas = 0.333333 * valor;
    }else if(id=="yarda"){
        yardas = valor;
        metros = 0.9144 * valor;
        pulgadas = 36 * valor;
        pie = 3 * valor;
    }

    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yardas;
}

/**
 * conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirGR
 * @param (string) id - id del elemento input en el html
 * @return Valor que retorna
 */

function convertirGR(id){
    let grad, rad;

    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;

    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;

    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}