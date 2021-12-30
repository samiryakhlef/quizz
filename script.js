start();
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start() {
  const data = await getJson(); // Récupère le tableau json

  // Mélange le tableau json
  shuffleArray(data);

  // Affiche les question dans la div id "question1","question2","question3","question4"
  document.getElementById("question1").innerHTML = data[0].question;
  document.getElementById("label_response1").innerHTML =
    data[0].propositions[0];
  document.getElementById("label_response2").innerHTML =
    data[0].propositions[1];
  document.getElementById("label_response3").innerHTML =
    data[0].propositions[2];
  document.getElementById("label_response4").innerHTML =
    data[0].propositions[3];
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
  document.getElementById("label_ponse4").innerHTML = data[3].propositions[3];
}

// Fonction de RÉCUPÉRATION DU FICHIER JSON contenant le quiz
// également en “async” car elle utilise fetch() et “await”
async function getJson() {
  // Récupère les données avec la fonction fetch()
  // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
  const data = await fetch("http://localhost:5500/quiz.json");

  return data.json(); // Retourne les données au format Json
}

// Fonction de MÉLANGE ALÉATOIRE du tableau
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

// évènement au click du bouton valider

document.querySelector('#form').addEventListener('submit', function (e) {
  var label = document.getElementByTagName('label')
  if (label.value === true) {
    document.getElementById('good').add('green')
  }
})

/*for (var i = 0; i < boutons.length; i++){
    var bouton = boutons[i];
    bouton.addEventListener('click', function(e){
      if (input.value === true)
      return document.getElementsByClassName('good').add('green').click();
      else (input.value === false)
      return document.getElementsByClassName('bad').add('red').click(e);
    })
}*/
