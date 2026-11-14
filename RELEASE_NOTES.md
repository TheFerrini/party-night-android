## Party Night v1.68.1 — Safe Areas Update

Aquesta versió se centra en el comportament real de Party Night en telèfons Android i en la descoberta de noves versions.

### Novetats
- **Actualitzacions automàtiques:** aproximadament un segon després de la careta, l'app consulta l'endpoint públic de GitHub Releases. Si hi ha una versió superior a la instal·lada, apareix un pop-up amb accés a la pàgina oficial de la release.
- **Cerca manual:** el panell **Novetats** incorpora el botó «Cercar actualitzacions» per tornar a consultar GitHub quan vulguis.
- **Gestió de jugadors tàctil:** mantén premuda l'ansa de cada fila i arrossega-la. La llista canvia d'ordre mentre mous el jugador; les fletxes continuen disponibles com a alternativa.

### Correccions i millores
- **Safe areas Android:** les pantalles, els diàlegs i els controls respecten la barra d'estat i la navegació inferior mitjançant els insets de Capacitor SystemBars.
- **Careta d'entrada:** menys elements animats, sense desenfocament ni bucles de confeti continus; retirada la indicació «Toca para saltar». L'entrada es tanca automàticament.
- **Inici més net:** el fons del document i el de la careta coincideixen per reduir el flaix fosc durant l'arrencada.

### Instal·lació Android
1. Descarrega `app-debug.apk` directament dels recursos d'aquesta Release.
2. Obre l'APK al dispositiu Android.
3. Autoritza la instal·lació des d'aquesta font quan Android ho demani.

Aquesta és una APK **debug**, pensada per instal·lar i provar. No és encara una publicació signada per Google Play.
