# Party Night — Android

**Party Night v2.0.1 · The Party Re-Rebuild**

App de jocs per a grups, feta amb React, Vite i Capacitor 8.

## Novetats de la 2.0.1
- Selector d'idioma amb banderes de Catalunya, Espanya i el Regne Unit; confirma i reinicia per aplicar el canvi.
- Interfície i 246 textos de joc traduïts al català, castellà i anglès.
- Criteri global de victòria configurable: qui rep més o menys penalitzacions.
- Estadístiques per joc i jugador, amb rànquings i registres agrupats per partida.
- Historial de sessions amb configuracions i esdeveniments llegibles.
- Vibració tàctil nativa, reducció d'animacions real i interruptors corregits.
- Penalitzacions acumulatives centralitzades a Configuració general.

## Navegació
- **Jugar:** jugadors, sessions, novetats, idioma i configuració general.
- **Estadístiques:** resum, resultats dels jocs i perfils de jugador.
- **Historial:** sessions desades amb configuracions, esdeveniments i rànquings.

## Dades i privacitat
Les sessions i estadístiques es desen localment al dispositiu. No s'envien a cap servidor. L'historial pot contenir noms, preguntes, vots i penalitzacions.

## Idiomes
Català, castellà i anglès. El selector apareix la primera vegada abans de la careta i es pot tornar a obrir des de Jugar.

## Actualitzacions
L'app consulta GitHub Releases públiques i mostra el changelog quan detecta una versió nova.

## Compilar localment
Cal Node.js 22+, Java 21 i Android SDK.

```bash
npm install
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

Package ID: `com.theferrini.partynight`.
