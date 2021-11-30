"use strict";
var car;
function submitCar() {
    var errores = 0;
    var numeroMatricula = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/i;
    var soloLetras = /^[A-Z]+$/i;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    if (!plateInput.value || !numeroMatricula.test(plateInput.value)) {
        alert('Introduce la matricula correctamente (BB 1234 BBB)');
        errores++;
    }
    else if (!brandInput.value || !soloLetras.test(brandInput.value) || brandInput.value.length < 3) {
        alert('Introduce la marca correctamente');
        errores++;
    }
    else if (!colorInput.value || !soloLetras.test(colorInput.value) || colorInput.value.length < 3) {
        alert('Introduce el color correctamente');
        errores++;
    }
    if (errores == 0) {
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    }
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    var errores = 0;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (var i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        if (validarRuedas(Number(diameterWheel.value)) == false) {
            errores++;
        }
        if (errores == 0) {
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
    }
    if (errores == 0) {
        showWheels();
    }
}
function validarRuedas(diametro) {
    if (diametro != 1 && diametro != 2) {
        alert("El diametro de la rueda ha de ser entre 1 y 2");
        return false;
    }
    return true;
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    for (var i = 0; i < 4; i++) {
        var wheelOutput = document.getElementById("wheelOutput" + (i + 1));
        wheelOutput.innerText = "Wheel " + (i + 1) + ":  " + " Brand: " + car.wheels[i].brand + " Diameter: " + car.wheels[i].diameter;
    }
    wheelTitle.innerText = "Wheels:";
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
