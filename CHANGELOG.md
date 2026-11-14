# Changelog — Party Night

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
