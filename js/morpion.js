let tableZone = [];

function commencer() {

    joueurs = ['X', 'O'];

    joueur = joueurs[0];

};

commencer();

function jouer(zone) { //Recupère le nom de la zone cliquée via "zone"

    //Si le joueur et egale au joueur 'X'
    if (joueur === joueurs[0]) {
        //Si la case et deja pleine (class filled)
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche une alerte
            alert("NON !");
        } else {

            //Sinon on definit le background de la case avec l'image Croix
            document.getElementById(zone).style.backgroundImage = "url(image/croix.png)";
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = "  ";
//On ajoute les cases pleines dans un tableau
            let zoneFilled = tableZone.push(zone);
            //On passe la main au joueur 'RONDS'
            joueur = joueurs[1];
        }
    }
    else if (joueur === joueurs[1]) { //Si le joueur et egale au joueur 'O'
        //Si la case et dejà pleine (class filled)
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche un alerte
            alert("NON !");

        } else {

            //Sinon on definit le background de la case avec l'image Rond
            document.getElementById(zone).style.backgroundImage = "url(image/rond.png)";
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = " ";
            //On ajoute les cases pleines dans un tableau
            let zoneFilled = tableZone.push(zone);
        
            //On passe la main au joueur 'CROIX'
            joueur = joueurs[0];
        }
    }
    ;
    //On fait un check :)
    checking();
}
;

function checking() {
   
    one = document.getElementById('Zonea1').textContent;
    two = document.getElementById('Zonea2').textContent
    three = document.getElementById('Zonea3').textContent;
    four = document.getElementById('Zoneb1').textContent;
    five = document.getElementById('Zoneb2').textContent;
    six = document.getElementById('Zoneb3').textContent;
    seven = document.getElementById('Zonec1').textContent;
    eight = document.getElementById('Zonec2').textContent;
    nine = document.getElementById('Zonec3').textContent;

    if (one === two && one === three ||
        four === five && four === six ||
        seven === eight && seven === nine ||
        one === five && one === nine ||
        three === five && three === seven ||
        one === four && one === seven ||
        two === five && two === eight ||
        three === six && three === nine) {

        if (joueur === joueurs[0]) {
            alert('trop fort joueur 2 !');

        }

        else if (joueur === joueurs[1]) {
            alert('quel talent joueur 1 !');

        }

        //Rendre visible le bouton rejouer
        boutonVisible();
     
    } else if (tableZone.length >= 9) {

        alert("Vous avez perdu !")
        boutonVisible();

    } else {

        //Cacher le bouton
        document.getElementById("rejouer").style.visibility = "hidden";
        document.getElementById("rejouer").onclick = function () {
            location.reload();
        }
    }
};


function boutonVisible() {

    document.getElementById("rejouer").style.visibility = "visible";
    document.getElementById("rejouer").onclick = function () {
        location.reload();
    }

}