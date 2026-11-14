# Changelog — Party Night

## [2.0.1b] — 2026-11-14 · Hotfix & Backup

### Arrencada i estabilitat
- La vibració nativa es carrega sota demanda, sense intervenir en l’arrencada de l’app.
- Validació defensiva de les dades locals abans de construir l’estat inicial.
- Pantalla d’error visible amb detalls copiables en lloc d’una pantalla negra si falla el renderitzat.

### Còpies de seguretat
- Exportació de totes les dades persistents de Party Night en un fitxer JSON.
- A Android, el fitxer es crea temporalment i s’obre el menú natiu per desar-lo o compartir-lo.
- Importació de còpies amb validació del format, contingut i estructura.
- La restauració substitueix només les claus locals de Party Night; no toca les dades d’altres apps.
- Traduccions del panell de còpies corregides en català, castellà i anglès.
- Càlcul del `versionCode` ampliat perquè la futura 2.0.2 continuï sent una actualització compatible.
- Confirmació abans de substituir dades i restauració de les dades actuals si falla l’escriptura.

### Android
- Package ID conservat: `com.theferrini.partynight`.
- Nom de versió Android: `2.0.1b`; `versionCode` incrementat respecte de la 2.0.1.
- Signatura debug persistent conservada per permetre instal·lar l’actualització sense desinstal·lar.

## [2.0.1] — 2026-11-14 · The Party Re-Rebuild

### Idiomes i interfície
- Selector d'idioma redissenyat amb banderes de Catalunya, Espanya i el Regne Unit.
- Escollir una bandera només selecciona l'idioma; el botó de confirmació desa la preferència i reinicia l'app.
- Traduccions completes dels textos visibles dels jocs: 246 preguntes, reptes, temes, duels i enquestes en català i anglès, a més de la interfície.
- Les traduccions conserven els noms dels jugadors inserits dinàmicament.

### Resultats i estadístiques
- Nou criteri global de victòria: guanya qui rep més penalitzacions o qui en rep menys.
- El mateix criteri s'aplica al rànquing de sessió i als resultats de cada partida.
- Noms llegibles dels jocs a les estadístiques (mai més claus internes com `yonunca`).
- Les targetes de cada joc obren un pop-up amb el rànquing de la partida.
- Perfils de jugador ordenables per més/menys penalitzacions, amb registre desplegable agrupat per joc.

### Historial i configuració
- Configuracions de partida convertides en etiquetes llegibles en lloc d'objectes JSON.
- Esdeveniments traduïts a accions comprensibles: targetes, penalitzacions, vots i resultats.
- «Penalitzacions acumulatives» queda només a Configuració general.
- Interruptors redissenyats amb posició i estat consistents.
- Vibració tàctil amb el plugin natiu de Capacitor Haptics.
- Reduir animacions aplica una regla global a les animacions i transicions.
- Eliminat el botó «Volver al Inicio» del menú de jocs.
- El canvi d'idioma ja no apareix a Configuració general.

### Android
- Package ID conservat: `com.theferrini.partynight`.
- Versió Android incrementada a 2.0.1; el workflow continua calculant el `versionCode` a partir de SemVer.
- La signatura persistent de la 2.0.0 es manté per a aquesta actualització.
