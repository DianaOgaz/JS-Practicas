var car = {
    marca: "Toyota",
    modelo: "Ashu",
    año: 2023,
    licensePlate: "simon"

};
function solution(car) {
    // Tu código aquí 👈
    if (Boolean(car.licensePlate)) {
        car.drivingLicence = true;
        console.log(car)
    } else {
        car.drivingLicence = false;
        console.log(car)
    }
}
solution(car);

