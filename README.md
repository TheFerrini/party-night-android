# Party Night — Android

Party Night v2.0.0 és una app de jocs per a grups feta amb React, Vite i Capacitor 8.

## Navegació
- **Jugar:** jugadors, sessions, novetats, idioma i configuració general.
- **Estadístiques:** resum, jocs i perfils de jugador.
- **Historial:** sessions desades amb detalls i rànquings.

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
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

Package ID: `com.theferrini.partynight`.
