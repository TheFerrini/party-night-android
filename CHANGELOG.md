# Changelog — Party Night

Totes les versions publicades de Party Night, amb un resum dels canvis principals.

## [1.68.1] — 2026-11-14 · Safe Areas Update

### Novetats
- Comprovació automàtica de versions un segon després de la careta, amb accés a la darrera GitHub Release si hi ha una versió superior.
- Botó «Cercar actualitzacions» al panell de Novetats per tornar a consultar GitHub manualment.
- Reordenació tàctil real del gestor de jugadors: mantén premuda l'ansa i mou la fila; les files es reordenen mentre arrossegues.

### Correccions i millores
- Safe areas d'Android: el contingut i els diàlegs respecten la barra d'estat superior i la navegació inferior.
- Careta d'entrada més lleugera: menys partícules, cap filtre blur ni animacions infinites i retirada del text «Toca para saltar».
- Color de fons inicial coordinat amb la careta per reduir el flaix fosc en obrir l'app.

## [1.68.0] — 2026-11-13 · First Round Edition

### Novetats
- Careta d'entrada animada amb brindis, confeti, títol i opció de saltar-la tocant la pantalla.
- Reordenació de jugadors amb fletxes tàctils a la configuració inicial i al gestor de jugadors.
- Les Releases de GitHub inclouen l'APK debug descarregable i les notes de cada versió.

### Correccions
- Veritat o Repte: ara les categories Tranqui/Físic, Dar el Cante, Contacte Físic i Perill Digital filtren realment els reptes de cada entorn i respecten els pesos del selector.
- Veritat o Repte: si una modalitat té tots els filtres desactivats, ara es mostra el missatge corresponent en lloc d'entrar en una pantalla buida.
- Yo Nunca: les frases amb noms substituïts es registren amb la plantilla original per evitar que es repeteixin abans d'hora.
- Gestió de jugadors: en una partida no es pot baixar de dos jugadors des del gestor, evitant quedar atrapat dins del modal.
- Gestió de jugadors: en eliminar algú des del gestor, també s'esborren els seus comptadors, ratxes i registres FBI, i s'ajusta el torn actual.
- Modo FBI: afegir esdeveniments consecutius ja no depèn d'una còpia antiga de l'estat.
- La Bomba: els temps mínim i màxim es mantenen en un rang coherent.

## [1.67.1] — The Six Seven Edition
- Millores del Modo Dios d'Ian, activació periòdica de perks, poliment de les caixes i reorganització de la interfície.

## [1.61] — Sin IA / Optimizado
- Eliminació de funcions d'IA per millorar el rendiment mòbil.
