// Compter le nombre de message dynamiquement

let messagesCount = document.getElementsByTagName("h6").length; // Compter tous les paraphes p pour obtenir le nombre de message ou le nombre d ebalises h6

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

// Ajouter un évènement sur le clic du boutton add message // Ajout d'un nouveau message
document.getElementById("btn-add").addEventListener("click", function () {
  console.log("click detecté sur le bouton add message");
  console.log(document.getElementById("add-message").value);
  // Création d'un élément DIV afin d'ajouter un nouveau message
  var mainDiv = document.createElement("div");
  mainDiv.className = "row";
  document.body.appendChild(mainDiv); //Ajouter l'element à la fin du body

  // Ajouter l'image de profil
  var image = document.createElement("img");
  image.className = "avatar";
  image.src = "./assets/avatar-1.jpg";
  mainDiv.appendChild(image);

  // Ajouter la div qui comprendra le message
  var mainMessageDIV = document.createElement("div");
  mainDiv.appendChild(mainMessageDIV);

  // Ajout du titre H6 de l'auteur
  var h6 = document.createElement("h6");
  h6.textContent = "Eric Dupont";
  mainMessageDIV.appendChild(h6);

  // Ajout du texte
  var content = document.createElement("p");
  content.textContent = document.getElementById("add-message").value;
  mainMessageDIV.appendChild(content);

  // Ajout de la corbeille
  var trash = document.createElement("img");
  trash.src = "./assets/trash.png";
  trash.className = "trash";
  mainDiv.appendChild(trash); // attention elle n'est pas clickable à ce moment

  // Vider le champ de saisie après l'ajout d'un message
  document.getElementById("add-message").value = " ";

  // Mettre à jour le nombre de message après l'ajout d'un message
  let messagesCount = document.getElementsByTagName("h6").length;
  document.getElementById("countMessages").textContent = messagesCount;

  // Ajouter une nouvelle écoute sur la nouvelle corbeille créée
    trash.addEventListener('click',
        function(){ //fonction de callback
            this.parentNode.remove();
            // Mettre a jour le nombre de messages
            let messagesCount = document.getElementsByTagName("h6").length;
            document.getElementById("countMessages").textContent =
              messagesCount;
        })
});
