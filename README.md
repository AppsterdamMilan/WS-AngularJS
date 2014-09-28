WS-AngularJS
============
Il materiale del workshop su AngularJS del 27/09/2014
## Software necessario
Per inizializzare l'ambiente di lavoro ed eseguire i file è necessario aver installati i seguenti software:

- [NodeJS](http://nodejs.org/)
- [Git](http://git-scm.com/)
- [Bower](http://bower.io/)

## Avviare l'ambiente di lavoro
Scaricare la branch "inizio" di questo repository utilizzando il comando da terminale

	git clone -b inizio https://github.com/AppsterdamMilan/WS-AngularJS/

*(alternativamente potete scaricare un file zip direttamente dalla pagina del repository)*

Sempre da terminale spostatevi nella cartella appena clonata sul vostro computer e lanciate il comando

	bower install

Bower scaricherà le librerie necessarie per utilizzare i file del progetto (AngularJS, Bootstrap, ecc).

Avviate il server locale node con il comando

	node server.js

A questo punto aprite il browser all'url http://localhost:9000/ verrà visualizzato un messaggio di avviso perché non è presente un file index.html ma il server è stato avviato correttamente.
