# JQuery ++

Dans ce document, nous allons voir les notions avancées de JQuery. 
Mon travail va porter sur les plugins JQuery.

## Lien avec RIA

## Description de la problématique et du contexte

### Pourquoi faire un plugin ?
L'utilisation d'un plugin a pour but de permettre une portabilité de notre fonction et réduire les conflits avec notre code à nous.
Le code doit être fait pour être utilisé sur différents sites et avoir le moins de modifications possible a faire. Notre code devrait donc fonctionner sur tout les sites et nous évitons de recréer notre fonction.

### Pourquoi un slider ?
En effet, un slider n'est pas "révolutionnaire" mais sur la grande majorité des sites pour des clients, il est demandé d'avoir des intéractions pour montrer nos réalisations, travaux, produits. Il me semblait donc utile de comprendre un peu comment tout cela fonctionne.


## Références théoriques
- [Comment créer un plugin Jquery](https://learn.jquery.com/plugins/basic-plugin-creation/)
- [Pourquoi les plugins JQuery](https://www.sitepoint.com/why-we-develop-jquery-plugins/)

## Résumé


## Références supplémentaires
[Aller plus loin](https://learn.jquery.com/plugins/stateful-plugins-with-widget-factory/)


### Qu'est-ce qu'un plugin JQuery ?
Un plugin JQuery est simplement une nouvelle methode qui utilise des objets JQuery. Pour créer un nouvel objet JQuery, nous devons appeler 

```jquery 
JQuery()
```
Qui va hériter des méthodes JQuery.
L'idée d'un plugin est de faire quelque chose avec une collection d'éléments. Nous pourrions considerer les méthodes existantes comme des plugins 
```jquery 
.fadeOut()
```
ou
```jquery 
.addClass()
```

## Créer son propre plugin

Pour créer un plugin, nous devrons ajouter une fonction au nom de notre plugin.

```jquery 
$.fn.greenify = function() {
    this.css( "color", "green" );
}
$( "a" ).greenify();
```

| $.fn                 | .greenify       | this.css( "color", "green" ); | $( "a" ).greenify(); |
|----------------------|-----------------|-------------------------------|----------------------|
| instanciation plugin | nom de fonction | actions du plugin             | appel du plugin      |





