# Party Night — Android

Projecte de **Party Night v1.67.1** convertit a una app Android amb React, Vite i Capacitor 8.

## Què inclou

- Codi original de Party Night a `src/App.tsx`.
- Interfície adaptada al WebView Android.
- Dependències de React, Tailwind CSS, Lucide i Capacitor.
- Compilació automàtica de l'APK amb GitHub Actions.

## Compilació automàtica

El workflow **Build Android APK** s'executa automàticament quan hi ha un push a `main`. També es pot iniciar manualment des de la pestanya **Actions** amb **Run workflow**.

Quan la compilació acaba correctament:

1. Obre el workflow completat a **Actions**.
2. Baixa l'artefacte **party-night-debug-apk**.
3. Descomprimeix el ZIP i instal·la `app-debug.apk` al dispositiu Android.

Els artefactes es conserven durant 30 dies.

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

L'APK debug serveix per instal·lar i provar l'app. Per publicar-la a Google Play caldrà configurar una signatura de producció i generar un AAB signat.


## Historial de compilació

- 2026-11-13: actualitzat el pas de configuració de l'Android SDK a `android-actions/setup-android@v4` per evitar el paquet obsolet `tools`.
