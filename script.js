// initialisation des variables
let nbEtapes = 4;
let n = 0 ;
let sequence = [];
let couleur = {
    0 : 'rouge',
    1 : 'vert',
    2 : 'jaune',
    3 : 'bleu',

}
// début du jeu quand ont appui sur start
let boutonStart = document.getElementById('start');
addEventListener('bleu',pushbleu);
boutonStart.addEventListener('click', startgame);
const nbCouleurs = 4


function genererSequence(){
    for (let i=0; i< nbEtapes; i++){
        // generer d'un nombre entier aléatoire avec max4.
        sequence[i]= Math.floor(Math.random()*nbCouleurs);
    }

    return sequence;
}
function pushbleu(){
    if (bleu.classList('off')==='off'){
        bleu.classList('off')==='on';
    }

}

function startgame(){
    
    genererSequence()
    console.table(sequence)
    lancersequence()

}

function lancersequence(){
    for (var i = 0; i < sequence.length ; i++) {
        //time out pour les différents boutons
        if (sequence[i]== 0){
            allumerouge()           
        }
        else if (sequence[i]== 1){
            allumevert()  
        }
        else if (sequence[i]== 2){
            allumejaune()  
        }
        else if (sequence[i]== 3){
            allumebleu()
        }
        
        
    }
    //finish();
}

//LES BOUTONS

// ROUGE
function allumerouge(){
    let rouge = document.getElementById("rouge");
    rouge.classList.remove("off");
}
// VERT
function allumevert(){
    
    let vert = document.getElementById("vert");
    vert.classList.remove("off");
}
// JAUNE
function allumejaune(){
    
    let jaune = document.getElementById("jaune");
    jaune.classList.remove("off");
}
// BLEU
function allumebleu(){
    
    let bleu = document.getElementById("bleu");
    bleu.classList.remove("off");
}
// END
function finish(){
    bleu.classList.add("off");
    jaune.classList.add("off");
    vert.classList.add("off");
    rouge.classList.add("off");
}
