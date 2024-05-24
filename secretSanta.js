let givers = [
    "Megan",
    "John",
    "Gretchen",
    "Alois",
    "Eric",
    "Rachel",
    "Bridget",
    "Andy",
    "Matt",
    "Kevin",
    "Loren",
];

let recipients = [
    {
        name: "Emilia", 
        parent1: "Gretchen",
        parent2: "Alois"
    }, 
    {
        name: "Charlotte",
        parent1: "Gretchen",
        parent2: "Alois"
    }, 
    {
        name: "Lucy",
        parent1: "Gretchen",
        parent2: "Alois"
    },
    {
        name: "William",
        parent1: "Bridget",
        parent2: "Andy"
    },
    {
        name: "Weston",
        parent1: "Eric",
        parent2: "Rachel"
    },
    {
        name: "Eleanor",
        parent1: "Eric",
        parent2: "Rachel"
    },
    {
        name: "Addie",
        parent1: "Megan",
        parent2: "John"
    },
    {
        name: "Bella",
        parent1: "Megan",
        parent2: "John"
    },
    {
        name: "Iris",
        parent1: "Megan",
        parent2: "John"
    },
    {
        name: "Oscar",
        parent1: "Megan",
        parent2: "John"
    },
    {
        name: "Iggy",
        parent1: "Megan",
        parent2: "John"
    },
];

function diceRoll() {
    myNumber = Math.floor(Math.random() * (recipients.length));
    return myNumber
}

//console.log(diceRoll())
//random# as index for array, then another random# for item in array, then remove that item from array

// for (i=0; i<givers.length; i++) {
//     console.log(`${givers[i]} : ${recipients[i].name}`)
// }


for (i=0; i<givers.length; i++) {   
    let kidChoice = (recipients[diceRoll()]);
    while (givers[i] == kidChoice.parent1 || givers[i] == kidChoice.parent2) {
        kidChoice = (recipients[diceRoll()]);
    } 
    //console.log("before " + recipients.length)
    
      
    console.log(`${givers[i]}: ${kidChoice.name}`)
    recipients.splice((recipients.indexOf(kidChoice)),1)
    //console.log("after " + recipients.length) 
}

// console.log("before: " + recipients.length)
// recipients.splice(0,1)
// console.log("after: " + recipients.length)
// recipients.splice(0,1)
// console.log("after: " + recipients.length)
// recipients.splice(0,1)
// console.log("after: " + recipients.length)