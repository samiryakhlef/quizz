start();

// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start() {
  var data = await getJson(); // Récupère le tableau json

  // Mélange le tableau json
  shuffleArray(data);

  // Coupe le tableau pour ne garder que les 4 premières questions
  data = data.slice(0, 4);

  // Fonction RÉCUPÉRATION DU FICHIER JSON contenant le quiz
  // en “async” car elle utilise fetch() et “await”
  async function getJson() {
    // Récupère les données avec la fonction fetch()
    // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
    const data = await fetch("http://localhost:5500/quiz.json");

    return data.json(); // Retourne les données au format Json
  }

  // Affiche les question et les propositions

  //CETTE METHODE FONCTION SANS LE SOUCIS "UNDEFINED"

  document.querySelector("#question1 h2").innerHTML = data[0].question;
  document.getElementById("label_response1").innerHTML =data[0].propositions[0];
  document.getElementById("label_response2").innerHTML =data[0].propositions[1];
  document.getElementById("label_response3").innerHTML =data[0].propositions[2];
  document.getElementById("label_response4").innerHTML =data[0].propositions[3];

  document.querySelector("#question2 h2").innerHTML = data[1].question;
  document.getElementById("label_reponse1").innerHTML = data[1].propositions[0];
  document.getElementById("label_reponse2").innerHTML = data[1].propositions[1];
  document.getElementById("label_reponse3").innerHTML = data[1].propositions[2];
  document.getElementById("label_reponse4").innerHTML = data[1].propositions[3];

  document.querySelector("#question3 h2").innerHTML = data[2].question;
  document.getElementById("label_rponse1").innerHTML = data[2].propositions[0];
  document.getElementById("label_rponse2").innerHTML = data[2].propositions[1];
  document.getElementById("label_rponse3").innerHTML = data[2].propositions[2];
  document.getElementById("label_rponse4").innerHTML = data[2].propositions[3];

  document.querySelector("#question4 h2").innerHTML = data[3].question;
  document.getElementById("label_ponse2").innerHTML = data[3].propositions[1];
  document.getElementById("label_ponse1").innerHTML = data[3].propositions[0];
  document.getElementById("label_ponse3").innerHTML = data[3].propositions[2];
  document.getElementById("label_ponse4").innerHTML = data[3].propositions[3];

  document.querySelector("form").addEventListener("submit", validation);

  function validation(event) {
    event.preventDefault();

    // je définie une variable score = 0
    var score = 0;

    // Compte le score en parcourant les 4 questions
    for (let qIndex = 0; qIndex < data.length; qIndex++) {
      // Récupére les propositions json
      var propositions = data[qIndex].propositions;

      // SelectorAll des 4 <input> de la question ('#question0 input')
      var input = document.querySelectorAll("#question" + (qIndex + 1) + " input");

      for (let propIndex = 0; propIndex < propositions.length; propIndex++) {
        // Définit la value de l'<input>
        input[propIndex].setAttribute("value", propositions[propIndex]);
      }
      // je récupère toutes les réponses de cette question
      // (input selectionné par l'utilisateur)
      inputChecked = document.querySelector(
        "input[name=question" + (qIndex + 1) + "]:checked"
      );
      
      // Si la réponse n'est pas vide
      if (inputChecked) {
        var answer = inputChecked.value; // Réponse choisie

        // pour chaque input, je récupère la bonne réponse dans le json (le name de l'input = id de la question dans le json)
        var goodAnswer = data[qIndex].reponse; // Bonne réponse

        // Si la réponse est bonne
        if (answer == goodAnswer) {
          score++; // +1 point
        }
      }
    }
    document.getElementById("score").innerHTML = score;
  }

  // et j'incrémente le score

  //if ()
  // si la valeur de l'input est différente de la bonne réponse, je rajoute la classe "bad" à l'input
  // j'affiche le score dans la div id "score"
  // VALIDATION DU QUIZ*/
}

// Fonction MÉLANGE ALÉATOIRE du tableau
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}