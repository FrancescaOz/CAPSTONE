# CHOOSE - Scegli la tua strada 

Ovvero cosa fare quando le idee sono tante e le passioni altrettante.

C'erano molte cose da poter fare, tante idee tra cui scegliere ma una tra tutte è stata quella che mi ha fatto venire la voglia immediata di buttare giù qualche schizzo per il mockup e pianificare la struttura del sito.
Un "sito-game" basato sulle meccaniche dei vecchi "libri a bivi" (o libri-game per l'appunto) in cui fosse l'utente a definire il "sito" in base alle sue scelte.
Ecco quindi che dall'idea, era necessario rendere concreto quanto fosse necessario per renderlo reale.

## Obiettivi :dart:	

1) Creare un'interfaccia pulita che non distragga dal contenuto principale e che non rischi di non essere funzionale
2) Creare uno schema di diramazioni per avere un'idea chiara di quali componenti siano accessibili e quando.
3) Progettare dei mini-giochi o enigmi per dare la possibilità al giocatore di intrattenersi e poter scegliere strade alternative.
4) Riprendere da dove si è lasciato se si è fatta l'autenticazione o semplicemente fare una nuova partita.

## Mockup e previsioni di rilascio	:black_nib:
https://www.canva.com/design/DAFVCjtah4Y/JvnC0ShnjLKMWQ7NXvjFNA/view?utm_content=DAFVCjtah4Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Impostazione componenti storia (da non leggere se non volete spoiler) :open_book:

https://www.figma.com/file/UxcHDi1j3JwJ50GRHUe5p6/STORIA-BIVI?node-id=0%3A1&t=rbqprgxRnAifwiSY-1

## Installazione :desktop_computer:	

Pochi semplici passi per non sbagliare:

1) Reintegrare i node_modules

```bash
  npm install
```
2) Goditi il progetto

```bash
  ng serve -o
```
## Screenshoot :camera:	 

Componente schermata Home, il tasto continua è abilitato solo ai giocatori loggati che abbiano già iniziato la loro avventura.

![image](src/assets/img/screenshotHome.png)

Componente Quiz.
Le domande sono generate da un API esterna che fornisce anche risposte multiple. Il counter si aggiorna con le domande totali e quelle giuste per sbloccare due diversi componenti.

![image](src/assets/img/screenshotQuiz.png)



## Appendice :warning:	

Le immagini **non** sono in alcun modo di mia proprietà ma hanno il solo scopo di accompagnare la trama senza alcuna azione di lucro. La proprietà intellettuale delle stesse rimane degli autori.
Con il progredire dei rilasci queste verranno sostituite da componenti originali.



