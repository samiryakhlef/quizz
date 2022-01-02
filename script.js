start();
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start() {
  const data = await getJson(); // Récupère le tableau json

  // Mélange le tableau json
  shuffleArray(data);

  // Affiche les question et les propositions  

  //CETTE METHODE FONCTION SANS LE SOUCIS "UNDEFINED"

  // document.getElementById("question1").innerHTML = data[0].question;
  /* document.getElementById("label_response1").innerHTML =
     data[0].propositions[0];
   document.getElementById("label_response2").innerHTML =
     data[0].propositions[1];
   document.getElementById("label_response3").innerHTML =
     data[0].propositions[2];
   document.getElementById("label_response4").innerHTML =
document.getElementById("question2").innerHTML = data[1].question;
document.getElementById("label_reponse1").innerHTML = data[1].propositions[0];
document.getElementById("label_reponse2").innerHTML = data[1].propositions[1];
document.getElementById("label_reponse3").innerHTML = data[1].propositions[2];
document.getElementById("label_reponse4").innerHTML = data[1].propositions[3];
document.getElementById("question3").innerHTML = data[2].question;
document.getElementById("label_rponse1").innerHTML = data[2].propositions[0];
document.getElementById("label_rponse2").innerHTML = data[2].propositions[1];
document.getElementById("label_rponse3").innerHTML = data[2].propositions[2];
document.getElementById("label_rponse4").innerHTML = data[2].propositions[3];
document.getElementById("question4").innerHTML = data[3].question;
document.getElementById("label_ponse2").innerHTML = data[3].propositions[1];
document.getElementById("label_ponse1").innerHTML = data[3].propositions[0];
document.getElementById("label_ponse3").innerHTML = data[3].propositions[2];
document.getElementById("label_ponse4").innerHTML = data[3].propositions[3];*/

//PROBLEME SUR LA 4EME PROPOSITION "UNDEFINED"
// POURTANT LA BOUCLE EST BONNE 
//"?????-?????-"

  //  question 1//
  document.getElementById("question1").innerHTML = data[0].question;
  //  boucles Propsition 0
  for (var i = 1; i <= 4; i++) {
    document.getElementById("label_response" + i).innerHTML = data[0].propositions[i];
  }

  //question 2
  document.getElementById("question2").innerHTML = data[1].question;
  // boucles propositions 1
  for (var i = 1; i <= 4; i++) {
    document.getElementById("label_reponse" + i).innerHTML = data[1].propositions[i];
  }

  //question 3
  document.getElementById("question3").innerHTML = data[2].question;
  // boucles proposition 3
  for (i = 1; i <= 4; i++) {
    document.getElementById("label_rponse" + i) = data[2].propositions[i];
  }

  // question 4 
  document.getElementById("question4").innerHTML = data[3].question;
  // boucles Propsition4
  for (i = 1; i <= 4; i++) {
    document.getElementById("label_ponse").innerHTML = data[3].propositions[i];
  }


  // exemple pour refactoriser
  // for(var i = 1; i <= 4; i++) {
  //   document.getElementById("label_response" + i).innerHTML = data[1].propositions[i];
  // }

}

// Fonction RÉCUPÉRATION DU FICHIER JSON contenant le quiz
// en “async” car elle utilise fetch() et “await”
async function getJson() {
  // Récupère les données avec la fonction fetch()
  // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
  const data = await fetch("http://localhost:5500/quiz.json");

  return data.json(); // Retourne les données au format Json
}

// Fonction MÉLANGE ALÉATOIRE du tableau
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}






//document.querySelector('form').addEventListener('submit', function (e) {
//e.preventDefault();
// je définie une variable score = 0
//var score = 0;
// je récupère toutes les réponses du formulaire (input selectionnés par l'utilisateur)
//var formData = document.querySelector('#form').value; 
// pour chaque input, je récupère la valeur de l'input (input.value)
//var inputData = document.querySelector('input').value;
// pour chaque input, je récupềre l'id de la question (input.name)
//inputData = parseInt(document.querySelector('#input.name').value)
// pour chaque input, je récupère la bonne réponse dans le json (le name de l'input = id de la question dans le json)
//document.querySelector('input').data.json(inputData).reponse;
// si la valeur de l'input est égale à la bonne réponse, je rajoute la classe "good" à l'input
// et j'incrémente le score
//if ()
// si la valeur de l'input est différente de la bonne réponse, je rajoute la classe "bad" à l'input

// j'affiche le score dans la div id "score"

/*for (var i = 0; i < boutons.length; i++){
  var bouton = boutons[i];
  bouton.addEventListener('click', function(e){
    if (input.value === true)
    return document.getElementsByClassName('good').add('green').click();
    else (input.value === false)
    return document.getElementsByClassName('bad').add('red').click(e);
  })
}*/


// changer les couleur des div #bad et #good à la validation du form
