// answer7

function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius; // πr² formula
    return area.toFixed(2);
}

let radius = 10; 
let area = calculateCircleArea(radius);
console.log(`The area of the circle is: ${area} square units`);
