console.log("Aplicacion Calculadora");
function sumar(){
    const forma= document.getElementById("forma");
    let OperandoA=forma['OperandoA'];
    let OperandoB=forma['OperandoB'];
    let resultado = parseInt(OperandoA.value) + parseInt(OperandoB.value);
    if(isNaN(resultado))
        resultado= "La operacion no inuyr numeros"
    document.getElementById('resultado').innerHTML=` Resultado : ${resultado}`;
}