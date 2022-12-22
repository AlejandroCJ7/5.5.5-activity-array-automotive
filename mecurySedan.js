//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends Vehicle {
    constructor(name, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel) {
      super(name, numberOfWheels, maximumSpeed, fuel);
      this.maximumPassengers = maximumPassengers;
      this.passenger = passenger;
    }
  
    loadPassenger(num) {
      if (this.passenger < this.maximumPassengers) {
        this.passenger += num;
        return true;
      }
      return false;
    }
  
    start() {
      if (this.fuel > 10) {
        return true;
      }
      else return false;
    }
  
    scheduleService(mileage) {
      if (mileage > 30000) {
        this.scheduleService = true;
        return true;
      }
      return false;
    }
  }
  
  const A28Mercury = new Car('A28 Mercury', 5, 0, 4, 160, 10);
  