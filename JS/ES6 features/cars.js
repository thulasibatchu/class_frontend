let cars = [
    {
        model: "Civic",
        price: 22000,
        brand: "Honda",
        color: "Red"
    },
    {
        model: "Corolla",
        price: 21000,
        brand: "Toyota",
        color: "White"
    },
    {
        model: "Model 3",
        price: 35000,
        brand: "Tesla",
        color: "Black"
    },
    {
        model: "Mustang",
        price: 27000,
        brand: "Ford",
        color: "Blue"
    },
    {
        model: "A4",
        price: 40000,
        brand: "Audi",
        color: "Silver"
    },
    {
        model: "Camry",
        price: 25000,
        brand: "Toyota",
        color: "Gray"
    },
    {
        model: "Accord",
        price: 26000,
        brand: "Honda",
        color: "White"
    },
    {
        model: "Model S",
        price: 80000,
        brand: "Tesla",
        color: "Red"
    },
    {
        model: "F-150",
        price: 30000,
        brand: "Ford",
        color: "Black"
    },
    {
        model: "Q5",
        price: 43000,
        brand: "Audi",
        color: "Blue"
    },
    {
        model: "Altima",
        price: 24000,
        brand: "Nissan",
        color: "Gray"
    },
    {
        model: "CX-5",
        price: 28000,
        brand: "Mazda",
        color: "Red"
    },
    {
        model: "Impreza",
        price: 23000,
        brand: "Subaru",
        color: "Blue"
    },
    {
        model: "Golf",
        price: 27000,
        brand: "Volkswagen",
        color: "White"
    }
];
let white_cars=[]
for(let car of cars){
    if(car.color ==='White'){
        white_cars.push(car)
    }
}

// let white_cars=cars.filter(car=>car.color!=='White')
// console.log(white_cars.length)
console.log(white_cars)

