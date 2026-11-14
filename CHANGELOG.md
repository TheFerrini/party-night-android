# Changelog — Party Night

## [2.0.2b] — 2026-11-14 · Localization hotfix
- Corregida una referencia a un mapa de traduccions inexistent (`EXTRA_UI_TRANSLATIONS`) que impedia inicialitzar el mòdul de localització i deixava l'app a la pantalla d'error.
- Tots els textos addicionals ara s'incorporen al mapa `UI_TRANSLATIONS` existent.
- Es manté la resta de canvis de la 2.0.2: sense vibracions, català per defecte, selector d'idioma a la pantalla principal i signatura Android persistent.

## [2.0.2] — 2026-11-14 · Boot & Update Fix
- Vite genera rutes relatives perquè els recursos s'obrin dins del WebView de Capacitor.
- Watchdog HTML independent de React per mostrar errors de càrrega de JavaScript i timeouts.
- Eliminada completament la vibració i el plugin natiu Haptics.
- El català és l'idioma per defecte; selector només des de la pantalla principal.
- Canvi d'idioma sense reiniciar l'aplicació.
- Clau debug persistent i verificació del certificat de l'APK.

## [2.0.1b] — 2026-11-14 · Hotfix & Backup
- Afegides les opcions d'importació i exportació de dades locals.
- Afegida una pantalla d'error React per facilitar el diagnòstic.
