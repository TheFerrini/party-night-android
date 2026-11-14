# Party Night — Android
Party Night és una app d'Android que consisteix en minijocs pensats per jugar amb amics i poder ampliar/enfortir amistats (o destruïr-les).
Pensat per jugar amb alcohol de per mig.

PENSAT PER A MAJORS D'EDAT - BEU RESPONSABLEMENT

# ÚLTIMA ACTUALITZACIÓ
**Party Night v2.0.1b · Hotfix & Backup**
Intent d'arreglar l'app, que no s'executa.

## Navegació
- **Jugar:** gestió de jugadors, sessions, idioma i configuració general.
- **Estadístiques:** resum, resultats dels jocs i perfils de jugador.
- **Historial:** sessions desades amb configuracions, esdeveniments i rànquings.

## Dades i privacitat
Les dades es desen localment al dispositiu. **No s'envia cap dada a cap servidor.** 
Les còpies poden contenir noms de jugadors, preguntes, vots, penalitzacions i resultats. No comparteixis el fitxer amb persones no autoritzades.

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
