//2.3.2. Bibliothécaire 

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?
function isRented(books){
  let booksRentedArray = []

  books.forEach(item => {
    booksRentedArray.push(item.rented);
  });

  function isRentedOnce(element) {
    return element > 0;
  }

  if (booksRentedArray.every(isRentedOnce)) {
    console.log("Les livres ont tous étaient empruntés au moins une fois !");
  } else {
    console.log("Ils n'ont pas tous étaient empruntés");
  };
}

isRented(books);


//Quel est livre le plus emprunté ?
function mostRead(books){
  let mostRead = "";
  let k = 0;
  console.log("Le livre le plus emprunté :");
  books.forEach(book => {
      if (book.rented > k) {
          k = book.rented;
          mostRead = book.title;
      }
    });
  console.log(mostRead);

}

mostRead(books);

//Quel est le livre le moins emprunté ?

function lessRented(books) {
  console.log("Le livre le moins emprunté :");
  let booksRentedArray = books.sort(function (a, b) {
    return a.rented - b.rented;
  });

  let textToReturn = booksRentedArray[0].title;
  console.log(textToReturn);
}

lessRented(books);

//Trouve le livre avec l'ID: 873495 ;

function findBook(books){
  let findBook = books.find(item => item.id == 873495);
  console.log("Le livre avec l'ID: 873495 est : " + findBook.title);

}

findBook(books)

//Supprime le livre avec l'ID: 133712 
function deleteBook(books){
  
  let bookDelete = books.findIndex(item => item.id === 133712);
  console.log("Le livre avec l'ID 133712 a été suprimé" );
  books.splice(bookDelete,1);
  console.log(books);
  
}

deleteBook(books);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
function sortBook(books) {
  console.log("Voici la liste para ordre alphabétique");
  let booksNameArray = [];

  books.forEach(item =>{
    booksNameArray.push(item.title);
  });
  console.log(booksNameArray.sort());
}

sortBook(books)