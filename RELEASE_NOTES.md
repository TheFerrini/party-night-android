## Party Night v2.0.2 — Boot & Update Fix

### 🛠️ Arrencada i WebView
- Recursos de Vite amb rutes relatives per a Android/Capacitor.
- Watchdog HTML independent de React: mostra errors de càrrega de JavaScript o timeout en lloc de pantalla negra.
- Comprovació del contenidor principal abans de renderitzar.

### 🌐 Idioma
- Català per defecte.
- Sense selector d'idioma durant el primer inici.
- Selector només des de la pantalla principal i aplicació immediata, sense reiniciar.

### 📦 Actualitzacions Android
- El comprovador descarrega directament l'APK de la release.
- Clau de signatura debug persistent, restaurada o generada explícitament.
- Signatura configurada a Gradle i certificat de l'APK verificat contra la clau.
- Cache de signatura refrescada setmanalment.
- **Cal desinstal·lar la 2.0.1b i instal·lar la 2.0.2 una vegada.** Les versions posteriors es podran instal·lar directament sobre l'actual.

### 💾 Dades
- Es mantenen la importació i exportació de jugadors, sessions, historial i configuració en JSON.
