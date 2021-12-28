

start();
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start() {
  const data = await getJson(); // Récupère le tableau json

  // Mélange le tableau json
  shuffleArray(data);

  // Affiche les question dans la div id "question1","question2","question3","question4"
  document.getElementById("question1").innerHTML = (data[0].question);
  document.getElementById("question2").innerHTML = (data[1].question);
  document.getElementById("question3").innerHTML = (data[2].question);
  document.getElementById("question4").innerHTML = (data[3].question);
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
