const carMakes: string[] = ['Ford', 'Toyota', 'Honda'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['civic']];
// Help with inference when extracting values
const car2 = carMakes[0];
const myCar = carMakes.pop();

// Prevent incompatible values
// carMakes.push(100);

// Help with 'map'
carMakes.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// const carMakers: string[] = [];
// const dates = [new Date(), new Date()];
// const carsByMake: string[][] = [];
