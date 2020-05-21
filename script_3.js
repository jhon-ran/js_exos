
// 2.2.2 Pyramide de Mario


let rows = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let brick = "#";
let i = 1

while (i <= rows) {
    let line  = "";
    for (let k = 0; k < (rows-i); k++) {
        line += " "  
    }
    for (let index = 0; index < i; index++) {
        line = line + brick;
    }
    i++;
    console.log(line);
}