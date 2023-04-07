let nbEtapes = 4;
let sequence = [];

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
        bleu.classList('off')===''
    }
    else{
        bleu.classList('off')==='off'
    }

}

function startgame(){
    setTimeout(allumerouge, 1000)
    setTimeout(allumevert, 2000)
    setTimeout(allumejaune, 3000)
    setTimeout(allumebleu, 4000)
    setTimeout(finish, 5000)
    genererSequence(sequence)
    console.log(sequence)

}

function allumerouge(){
    let rouge = document.getElementById("rouge");
    rouge.classList.remove("off");
}

function allumevert(){
    
    let vert = document.getElementById("vert");
    vert.classList.remove("off");
}

function allumejaune(){
    
    let jaune = document.getElementById("jaune");
    jaune.classList.remove("off");
}

function allumebleu(){
    
    let bleu = document.getElementById("bleu");
    bleu.classList.remove("off");
}
function finish(){
    bleu.classList.add("off");
    jaune.classList.add("off");
    vert.classList.add("off");
    rouge.classList.add("off");
}
