# Changelog — Party Night

## [2.0.2] — 2026-11-14 · Boot & Update Fix

### Inici i estabilitat
- Vite genera rutes relatives perquè els recursos s'obrin dins del WebView de Capacitor.
- Un watchdog HTML independent de React mostra errors de càrrega de JavaScript i timeouts en lloc d'una pantalla negra indefinida.
- Validació del contenidor principal abans de muntar l'aplicació.

### Interfície i idioma
- Eliminada completament la vibració i el plugin natiu Haptics.
- El català és l'idioma per defecte.
- El selector d'idioma només apareix quan s'obre des de la pantalla principal.
- Canviar d'idioma ja no reinicia l'aplicació.

### Actualitzacions Android
- El comprovador obre directament l'APK de la darrera release.
- Clau debug persistent recuperada o generada explícitament.
- Signatura Android fixada a aquesta clau i certificat de l'APK verificat després de compilar.
- Cache de signatura mantinguda activa setmanalment per evitar-ne l'expiració per inactivitat.
- Cal reinstal·lar aquesta versió una vegada; les APK anteriors es van signar amb claus efímeres que no es van guardar.

### Còpies de seguretat
- Es mantenen la importació i exportació de jugadors, sessions, historial i configuració en JSON.

## [2.0.1b] — 2026-11-14 · Hotfix & Backup
- Afegides les opcions d'importació i exportació de dades locals.
- Afegida una pantalla d'error React per facilitar el diagnòstic.
- Primera correcció de la càrrega de plugins i validació de dades.
