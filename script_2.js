
//2.2.1 Calculs rapides
//Factorial

function factorialize(number) {
  var result = number;
  if (number === 0 || number === 1) 
    return 1; 
  while (number > 1) { 
    number--;
    result *= number;
  }
  return result;

}

factorialize(number = prompt("De quel nombre veux-tu calculer la factorielle ?"));
console.log(`Le résultat est : ${factorialize(number)}`);