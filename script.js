const PI = 3.1415;
const Radius = 5; 
const Area = PI * Radius * Radius; // 78.53750000000001
const plantSpace = 0.8;
const startPlants = 20;
const maxPlants = Math.floor(Area / plantSpace); // equals 98
console.log("Area: ", Area);
console.log("Max Plants: ", maxPlants);

// 80% of the max capacity
const eigthyPercentOfMax = maxPlants * 0.8;
console.log("80 percent of Max Cap: ", eigthyPercentOfMax);

// 50% of cap
const fiftyPercentofMAx = maxPlants * 0.5;
console.log("50 percent of Max Cap: ", fiftyPercentofMAx);

// week 1
let totalNumberofPlants = startPlants * 2;
console.log("Total Number of Plants week 1: ", totalNumberofPlants);

if (totalNumberofPlants > eigthyPercentOfMax) {
  console.log("Needs to be Pruned");
} else if (
  totalNumberofPlants >= fiftyPercentofMAx &&
  totalNumberofPlants <= eigthyPercentOfMax
) {
  console.log("Monitor");
} else {
  console.log("Planted");
}

// after 2 weeks

totalNumberofPlants = totalNumberofPlants * 2;
console.log("Total Number of Plants week 2: ", totalNumberofPlants);

// after 3 weeks
totalNumberofPlants = totalNumberofPlants * 2;
console.log("Total Number of Plants week 3: ", totalNumberofPlants);

//==============================//
