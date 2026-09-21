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