function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// adding prototype method
Car.prototype.showDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Usage
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.showDetails();
car2.showDetails();
