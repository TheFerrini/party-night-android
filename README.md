# Party Night — Android

**Party Night v2.0.1b · Hotfix & Backup**

App de jocs per a grups, feta amb React, Vite i Capacitor 8.

## Novetats de la 2.0.1b
- Arrencada més defensiva: les dades locals es validen abans d'inicialitzar l'app.
- La vibració nativa es carrega només quan s'utilitza.
- Error Boundary amb missatge tècnic visible per evitar pantalles negres sense informació.
- Exportació de jugadors, sessions, historial i configuració en JSON.
- Importació de còpies JSON amb validació i confirmació abans de substituir dades.
- A Android, l'exportació obre el menú natiu per desar o compartir el fitxer.

## Navegació
- **Jugar:** gestió de jugadors, sessions, idioma i configuració general.
- **Estadístiques:** resum, resultats dels jocs i perfils de jugador.
- **Historial:** sessions desades amb configuracions, esdeveniments i rànquings.

## Dades i privacitat
Les dades es desen localment al dispositiu. Les còpies poden contenir noms de jugadors, preguntes, vots, penalitzacions i resultats. No comparteixis el fitxer amb persones no autoritzades.

La importació substitueix totes les claus locals que comencen per `pn-` i conserva les dades d'altres aplicacions.

## Idiomes
Català, castellà i anglès.

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
