# Party Night — Android

Party Night v1.68.0 és una app de jocs per a grups, creada amb React, Vite i Capacitor 8 i empaquetada com a APK Android.

## Descarregar

Les versions publicades i les seves APK es troben a la pàgina [Releases](https://github.com/TheFerrini/party-night-android/releases). Descarrega l'artefacte APK de la versió que vulguis, descomprimeix el ZIP i instal·la `app-debug.apk` al dispositiu Android.

## Compilació automàtica i releases

El workflow **Build Android APK** s'executa a cada push a `main` o manualment des de **Actions**. Si la compilació acaba correctament:

1. Desa l'APK com a artefacte de GitHub Actions.
2. Llegeix la versió de `package.json`.
3. Crea o actualitza la Release `v<versió>` amb `RELEASE_NOTES.md` i adjunta l'APK.

Per cada nova actualització, cal incrementar `version` a `package.json`, afegir un apartat a `CHANGELOG.md` i substituir `RELEASE_NOTES.md` per les notes de la nova versió. La pàgina Releases queda així com a historial de versions descarregables.

## Desenvolupament web

Requereix Node.js 22 o superior.

```bash
npm install
npm run dev
```

## Compilar localment

Cal Node.js, Java 21 i Android SDK.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

L'APK es genera a `android/app/build/outputs/apk/debug/app-debug.apk`.

## Identitat Android

- Nom: Party Night
- Package ID: `com.theferrini.partynight`
- Web directory: `dist`
- Tipus de compilació: debug APK

L'APK debug serveix per instal·lar i provar. Per publicar a Google Play caldrà configurar una signatura de producció i generar un AAB signat.

## Historial de canvis

Consulta [`CHANGELOG.md`](CHANGELOG.md) per al resum general de totes les versions i [`RELEASE_NOTES.md`](RELEASE_NOTES.md) per a la versió que s'està preparant.