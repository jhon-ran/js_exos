//2.3.1. Startup Nation 

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Options de script
let option = prompt(
  "Bienvenu dans ce super programme! Choisi une un script en tapant son numéro : \n" +
  "\n" +
  "  1 - Filtre dans la liste des entrepreneurs qui sont nés dans les années 70. \n" +
  "  2 - Array des prénoms et noms des entrepreneurs. \n" +
  "  3 - Connaître l'âge qu'aurait chaque inventeur aujourd'hui. \n" +
  "  4 - Trier les entrepreneurs par ordre alphabétique du nom de famille. \n" +
  "\n");




//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
function makeSeventies(entrepreneurs) {
console.log("Voilà les entrepreneurs qui sont nés dans les années 70 :")
  entrepreneurs.forEach(item => {
    if (item.year < 1980 && item.year >= 1970) {
      console.log(item.first, item.last, item.year);
    };
  });
}


// Sors une array qui contient le prénom et le nom des entrepreneurs
function fullName(entrepreneurs) {
  console.log("Voici un array avec le prénom et le nom des entrepreneurs :")
  let newArray = [];
  for(let index in entrepreneurs) {
      let temp = entrepreneurs[index].first + " " + entrepreneurs[index].last;
      newArray.push(temp);
      console.log(newArray[index]);
  }
}



// Quel âge aurait chaque inventeur aujourd'hui ?
function calcAge(entrepreneurs){
  console.log("L'âge que chaque inventeur aurait aujourd'hui : ")
  for(let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last, 2020 - entrepreneurs[index].year);
    //console.log(entrepreneurs[ageAttribut]);
  }
}



// Trie les entrepreneurs par ordre alphabétique du nom de famille.
function makeAlpha(entrepreneurs){
  console.log("Voici les entrepreneurs triés par ordre alphabétique du nom de famille :")

  let lastName = [];
  for(let index in entrepreneurs) {
      let tmp = entrepreneurs[index].last + " " + entrepreneurs[index].first;
      lastName.push(tmp);
  }

  lastName.sort();
  let name = [];
  for(let index in lastName) {
  
      name = lastName[index].split(' ');
  
      console.log(name[1] + " " + name[0]);
  }

}




// Menu de scripts
switch (option) {
  case '1':
    makeSeventies(entrepreneurs);
    break;
  case '2':
    fullName(entrepreneurs);
    break;
  case '3':
    calcAge(entrepreneurs);
    break;
  case '4':
    makeAlpha(entrepreneurs);
    break;
  default:
    console.log("Option invalide! Tapez 1, 2, 3 ou 4.");
}