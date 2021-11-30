let car: Car;


function submitCar() {
    let errores = 0;
    let numeroMatricula = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/i;
    let soloLetras = /^[A-Z]+$/i;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

	//EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    if(!plateInput.value || !numeroMatricula.test(plateInput.value)){
        alert('Introduce la matricula correctamente (BB 1234 BBB)')
        errores++
    }else if(!brandInput.value || !soloLetras.test(brandInput.value) || brandInput.value.length < 3){
        alert('Introduce la marca correctamente')
        errores++
    }else if(!colorInput.value || !soloLetras.test(colorInput.value) || colorInput.value.length < 3){
        alert('Introduce el color correctamente')
        errores++
    }

    if(errores == 0){
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    }
	
}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}

function submitWheelForm() {
    let errores = 0;
    
	//EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
	//EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    for (let i = 1; i <= 4; i++) {
        let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
        if(validarRuedas(Number(diameterWheel.value)) == false){
            errores++
        }
    }
    if(errores == 0){
        for (let i = 1; i <= 4; i++) {
            let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
            let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);

            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);    
        }

        showWheels();
    }
}
function validarRuedas(diametro: number){
    if(diametro != 1 && diametro != 2){ 
        alert("El diametro de la rueda ha de ser entre 1 y 2")
        return false
    }
    return true
}

function showWheels() {
	//EX4. Optimizar la función showWheels
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    for(let i = 0; i < 4; i++){
        let wheelOutput = <HTMLInputElement>document.getElementById("wheelOutput"+(i+1));
        wheelOutput.innerText = "Wheel "+(i+1)+":  " + " Brand: " + car.wheels[i].brand + " Diameter: " + car.wheels[i].diameter;

    }
    wheelTitle.innerText = "Wheels:";  
}


function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}