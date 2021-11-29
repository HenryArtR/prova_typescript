"use strict";
var car;
function submitCar() {
    var errores = 0;
    var numeroMatricula = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
    var soloLetras = /^[a-zA-Z]$/;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    if (plateInput.value == "" || numeroMatricula.test(plateInput.value)) {
        errores++;
        alert('Introduce la matricula correctamente (ES 1234 BBB)');
        return false;
    }
    else if (brandInput.value == "" || soloLetras.test(brandInput.value) || brandInput.value.length < 3) {
        errores++;
        alert('Introduce la marca correctamente');
        return false;
    }
    else if (colorInput.value == "" || soloLetras.test(colorInput.value) || colorInput.value.length < 3) {
        errores++;
        alert('Introduce el color correctamente');
        return false;
    }
    console.log(errores);
    car = new Car(plateInput.value, colorInput.value, brandInput.value);
    showVehicle();
    showWheelForm();
    return true;
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
        var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
        car.addWheel(wheel_generica);
        if (wheel_generica.diameter != 1 && wheel_generica.diameter != 2) {
            alert("El diametro de la rueda ha de ser entre 1 y 2");
            return false;
        }
    }
    console.log(car);
    showWheels();
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
