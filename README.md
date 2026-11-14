# Party Night — Android

**Party Night v2.0.2 · Boot & Update Fix**

App de jocs per a grups, feta amb React, Vite i Capacitor 8.

## Novetats de la 2.0.2
- Recursos Vite amb rutes relatives per al WebView Android.
- Watchdog HTML per mostrar errors abans del muntatge de React.
- Català per defecte; selector d'idioma només a la pantalla principal.
- Canvi d'idioma immediat, sense reiniciar.
- Eliminada tota la funcionalitat de vibració i el plugin Haptics.
- Comprovador que obre directament l'APK de la darrera release.
- Clau de signatura Android persistent i explícita, amb verificació del certificat després del build.
- Cache de signatura refrescada setmanalment per evitar-ne l'expiració.
- Importació i exportació de còpies JSON conservades.

## Actualitzar
Cal desinstal·lar la 2.0.1b i instal·lar la 2.0.2 una vegada: les APK antigues no van conservar la mateixa clau de signatura. A partir de la 2.0.2, GitHub Actions reutilitza una clau persistent per a totes les versions següents.

## Dades
Les còpies poden contenir noms, sessions, historial, preguntes, vots, penalitzacions i resultats. La desinstal·lació elimina les dades locals de l'aplicació; exporta una còpia abans de fer-ho si l'app encara permet obrir-se.

## Compilar
Cal Node.js 22+, Java 21 i Android SDK.

```bash
npm install
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

Package ID: `com.theferrini.partynight`.
