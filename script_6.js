//2.4.1. Code la vie

// Make constants
const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"];
const leucine = ["UUA", "UUG"];
const phenylalanine = ["UUU", "UUC"];
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const tyrosine = ["UAU", "UAC"];

// Options à transformer
let option = prompt(
  "Choisisze la chaîne ARN à transformer en acide aminé \n" +
  "  1 - UUACGCAGUAGA \n" +
  "  2 - CCGUCGUUGCGCUACAGC \n" +
  "  3 - CCUCGCCGGUACUUCUCG \n"
);

function translateARN(acideAmine){
  //if user input change to acideAmineArray = acideAmine.toUpperCase().match(/.{1,3}/g);
  acideAmineArray = acideAmine.match(/.{1,3}/g);
  console.log("Tu a chosi cette chaîne ARN : ")
  console.log(acideAmineArray.join('-'));

  let convertAcide = [];

  acideAmineArray.forEach(item => {
    if (serine.includes(item)) {
      convertAcide.push("serine");
    } else if (proline.includes(item)) {
      convertAcide.push("proline");
    } else if (leucine.includes(item)) {
      convertAcide.push("leucine");
    } else if (phenylalanine.includes(item)) {
      convertAcide.push("phenylalanine");
    } else if (arginine.includes(item)) {
      convertAcide.push("arginine");
    } else if (tyrosine.includes(item)) {
      convertAcide.push("tyrosine");
    } else {
      convertAcide.push("false");
    };
  });

  console.log("Voilà ta chaîne transformé en acide aminé :"); 
  console.log(convertAcide.join('-'));

}


// Menu de scripts
switch (option) {
  case '1':
    translateARN("UUACGCAGUAGA")
    break;
  case '2':
    translateARN("CCGUCGUUGCGCUACAGC")
    break;
  case '3':
    translateARN("CCUCGCCGGUACUUCUCG")
    break;
  default:
    console.log("Option invalide! Tapez 1, 2 ou 3.");
}