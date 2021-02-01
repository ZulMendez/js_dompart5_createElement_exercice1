// 1
let maDiv = document.querySelector('#content');

let titre = document.createElement('h2');
titre.innerText = "Part 6 - Exercice 1";

maDiv.appendChild(titre);

// 2
let para = document.createElement('p');
para.innerText = 'lorem ipsum';
maDiv.appendChild(para);

// 3
let titre2 = document.createElement('h1');
titre2.innerText = "Le DOM - Création de HTML";

maDiv.appendChild(titre2);
// méthode 1
maDiv.prepend(titre2);
// méthode 2 
maDiv.insertBefore(titre2, titre);

// 4
let maDiv2 = document.getElementById('secondaire')
maDiv2.innerHTML = maDiv.innerHTML;

let myh2 = document.querySelectorAll('h2')[1]
myh2.innerText = "Part 6 - Exercice 2 "

// 5
let body = document.body;
let matiere = document.createElement('div');
matiere.setAttribute('id', 'matiere');

body.appendChild(matiere);
body.insertBefore(matiere, maDiv2.nextElementSibling)


let listOrd = document.createElement('ol');
matiere.appendChild(listOrd);

// méthode 1 
let maMatiere = ['html', 'css', 'javascript']
//for each
maMatiere.forEach(el => {
    let myLi = document.createElement('li')
    myLi.innerText = el
    listOrd.appendChild(myLi)
});

// méthode 2 
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');

listOrd.append(list1, list2, list3);

list1.innerText = "Manipulation d'éléments";
list2.innerText = "Récuperation d'éléments";
list3.innerText = "Events";


