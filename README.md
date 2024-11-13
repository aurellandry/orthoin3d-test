# Installation et lancement du projet

Pour installer le projet, procédez comme suit :

- Clônez le dépôt Git sur votre ordinateur

- Placez vous à la racine du projet et lancez la commande `make init` (cf. Makefile)
  Le projet s'initialisera complètement (dépendances, base de données, etc)

- Dans un nouvel onglet du terminal, lancez le serveur Django avec la commande `make backend-start`

- Dans un nouvel onglet du terminal, lancez le frontend ReactJ avec la commande `make frontend-start`.

Une page web s'ouvrira et vous pourrez tester le projet (création, édition, listing et suppression d'un record).
