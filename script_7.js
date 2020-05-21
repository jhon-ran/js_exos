//2.4.2. Acné-Bot

let question = prompt("Bonjour, jes suis un bot ado, quoi de neuf ? ");

// quesion = "Ouais Ouais..." ;
if (question.match(/[?]/g)) { 
    console.log("Ouais Ouais...");

// Réponse "Pwa, calme-toi...
} else if (question.match(/^[^a-z]+$/)) { 
    console.log("Pwa, calme-toi...")

// messsage contient le mot "Fornite" = "on s' fait une partie soum-soum ?"
} else if (question.includes("Fornite") || question.includes("fornite"))  {
    console.log("on s' fait une partie soum-soum ?");

// message vide, = "t'es en PLS ?"
} else if (question === '') {
    console.log("t'es en PLS ?")

// autre phrase = "balek." ;
} else {
    console.log("balek.");
}