// Compter le nombre de message dynamiquement

var messagesCount = document.getElementsByTagName("h6").length; // Compter tous les paraphes p pour obtenir le nombre de message ou le nombre d ebalises h6

//Afficher dynamiquement le nombre de messages de la balise avec ID "countMessages"
document.getElementById("countMessages").textContent = messagesCount;

// Rendre les corbeilles clicables afin de supprimer le message associé

for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
  document
    .getElementsByClassName("trash")
    [i].addEventListener("click", function () {
      this.parentNode.remove();
      var messagesCount = document.getElementsByTagName("p").length;
      document.getElementById("count").textContent = messagesCount;
    });
}
