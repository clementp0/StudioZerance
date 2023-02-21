
## StudioZerance - Test

Aucun backend, car cela me semblait être "setup un porte-avions pour faire de la pèche".
J'ai donc utilisé, **HTML, CSS, JS, SwiperJS, Genderize**
JS utilisé uniquement pour le Slider et le formulaire de contact. 

**Execution** :

Utiliser index.html

**Structure** :
```markdown
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── mobile.css
│   ├── js/
│   │   ├── script.js
│   ├── img/
│   │   ├── portfolio/
│   │   ├── slide/
│   │   ├── *.png
│   ├── font/
├── index.html
└── .gitignore
```

## Temps passé

|  Section |  Base | Correctif(s) | Responsive |Total|
|--|--|--|--|--|
|Header & Banner |1h|/|30min|1h30|
|Porfolio |30min|/|5min|35min|
|Slider |30min|1h..|5min|1H35|
|Text Infinite |10min|30min|1min|40min|
|Contact & Api |1h|10min|1min|1h40|
|Readme, mise en forme |30min|/|/|30min|
|Total ||||~6hxx|

## Difficultés 

 - **Slider**.. Malheureusement j'ai une erreur que je ne parviens pas à fix sur ce délais sur la lib "SwiperJS". Sur la dernière slide (la deuxième) la slide suivante (qui est en fait la premiere de ma loop) n'est pas encore load et donc laisse une erreur d'affichage qui ce manifeste par un espace vide. Des que l'utilisateur effectue un mouvement sur le slider, la slide ce load et le problème est fix. Mais cela n'est visuellement pas propre. 
Piste : tester d'autres libs.
 
 - **Infinite Text** Pas réellement de difficultés, mais un problème de reflexion initial sur la manière de le réaliser. Initialement j'ai voulu créer cet effet de "Marquee" en utilisant un seul item avec le texte présent plusieurs fois.. Mais ce n'était pas une manière optimal car ni fluide, ni responsive. Je l'ai ensuite fix rapidement en utilisant des pseudo-éléments.

## Formulaire de contact 

Le formulaire de contact est constitué du formulaire en lui même, ET une popup !
Le formulaire affiche une alert JS si il n'est pas remplis. 
Le formulaire s'ouvre via le petit btn en fixed en bas a droite ou via, le menu via le lien "Contact". Il se referme par la croix ou un click sur n'importe quel élément externe a elle même. 
La popup s'ouvre lors du sumbit du form. Elle se referme par la croix ou un click sur n'importe quel élément externe au formulaire. 

La popup affiche le code en suivant vos directives 
« Rosebud » si le sexe est masculin
« We rob banks » si le sexe est féminin
« It’s a trap ! » si le sexe n’est pas déterminé ou s’il y a une erreur.

## Responsive Mobile
Aucun soucis particulier. 
Voici les modifications vis à vis de la version Desktop : 

 - Nav menu + Burger (css uniquement)
 - Banner (taille du h1)
 - Portfolio (taille grid)
 - Slider (les slides sont en full width pour éviter la saturation visuelle)
 - Infinite Text (taille font) 

J'ai laissé volontairement le "Potichat" superposer le contenu de la Banner.

## Screenshots

![Screenshots](https://i.ibb.co/9ZgPXVS/Screenshots.png)

## Conclusion

Ce fut trés intéressant a réaliser de plus avec les contraintes temporelles et technique. Et "marrant" de voir que mes moments de difficultés ce situaient sur des éléments que je n'aurais pas imaginé. 

Merci pour votre confiance !

## Sources
[SwiperJS](https://swiperjs.com/)
[Genderize.IO](https://genderize.io/)

