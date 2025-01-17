// Iteration 1: Names and Input

let hacker1 = "Juliana"; 
console.log (`"The driver's name is ${hacker1}".`);

let hacker2 = "Larissa"; 
console.log(`"The navigator's name is ${hacker2}".`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length ){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1

let newNameSpace = "";

for (let i = 0; i < hacker1.length; i++){
    newNameSpace = newNameSpace + hacker1[i] + " ";
    
} 

console.log(newNameSpace.toUpperCase())



//3.2
/*let newNameOrder = hacker2.split("").reverse().join("");
console.log(newNameOrder);


ou, a seguir */

let newNameOrder = "";

for (let j = hacker2.length - 1; j >= 0; j--){   //começa a contar do 0, mas na verdade são 7 letras, contando 1,2,3,4,5,6,7
    newNameOrder = newNameOrder + hacker2[j];
}

console.log(newNameOrder); 


//3.3
let classificacao = "Juliana".localeCompare("Larissa")
console.log(classificacao)   
//str2 = larissa é maior, vem depois de j
//str1 = juliana é menor, vem antes de L
//retornou -1 

if (classificacao === -1){
    console.log(`The driver's name goes first.`)
} else if (classificacao === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (classificacao === 0){
    console.log(`What?! You both have the same name?`)
}


