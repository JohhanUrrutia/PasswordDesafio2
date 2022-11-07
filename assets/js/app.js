var inputUno = document.getElementById("inputUno")
var inputDos = document.getElementById("inputDos")
var inputTres = document.getElementById("inputTres")
var botonIngresar = document.getElementById("botonIngresar")
var validacionFinal = document.getElementById("validacionFinal")

botonIngresar.addEventListener("click", ()=>{
    if (inputUno.value == 9 && inputDos.value == 1 && inputTres.value == 1){
        validacionFinal.innerHTML = "Password 1 Correcto"
        validacionFinal.style.color = "green";
    }else if (inputUno.value == 7 && inputDos.value == 1 && inputTres.value == 4){
        validacionFinal.innerHTML = "Password 2 Correcto"
        validacionFinal.style.color = "green";
    } else{
        validacionFinal.innerHTML = "Password Incorrecto"
        validacionFinal.style.color = "red";
    }
})