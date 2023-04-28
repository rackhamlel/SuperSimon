# Création du Super Simon
## -besoin 
Création d'un jeux Super Simon :
Un jeu de mémoire basé sur des couleurs, le jeu vas proposer une suite de couleur et si le joueur arrive a la repproduire, le jeu referra ca suite de couleur plus une nouvelle jusqu'a ce que le joueur comméte une faute.

## -support
Ont utilisera javascript pour ce jeu. Sur une page Html. 
## -régle
Simon est un jeu de société électronique de forme circulaire comportant quatre grosses touches de couleurs différentes, rouge, vert, bleu et jaune.

Le jeu, électronique, éclaire une des quatre couleurs et produit un son toujours associé à cette couleur.

Le joueur doit alors appuyer sur la touche de la couleur qui vient de s'allumer dans un délai assez court.

Le jeu répète la même couleur et le même son, puis ajoute au hasard une nouvelle couleur.

Le joueur doit reproduire cette nouvelle séquence.

Chaque fois que le joueur reproduit correctement la séquence, le jeu ajoute une nouvelle couleur.

## arborescence
- README.md - ce dossier
- index.html - page html qui contient le jeu
- script.js - script du jeu et intéraction
- style.css - mise en forme de la page
## algortihme 
* Au départ tous les boutons sont éteints.
* On définit une séquence vide (tableau vide)

* Quand on commence (appui sur start)
 * L'ordinateru génére une séquence aléatoire de X étapes
  * sequence = X, X, X,....
  * sequence = entier aléatoire entre 0 et 3.
 * On lance la séquence 
  * Parcours le tableau de séquence 
  * On allume la couleur correspondante pour chaque case pendant une durée courte, ensuite une nouvelle couleur ou la même s'allume, ainsi de suite...
 * Tour de l'utilisateur 
  * On écoute les clics de l'utilisateur et a chaque fois on les compare avec la séquence de l'ordinateur
  * A chaque clic réussi (correspondance avec l'étape de la séquence), on observe l'étape suivante
  *si l'utilisateur se trompe --> Game Over
  *si l'utilisateur réussi -> étape suivante

## Nouvelle compétance
 

  - selecteur css
  - utilisation de la console du navigateur
 ### javascript :   
  - changer le contenue css avec une fontion
  - utilisation de nouvelle fonction 
  
