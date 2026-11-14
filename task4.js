let car = {};

car.model = "BMW";
car.speed = 120;

car.run = function() {
    console.log(`${this.model} їде зі швидкістю ${this.speed}`);
};

car.stop = function() {
    console.log(`${this.model} зупинилася`);
};

car.run();
car.stop();
