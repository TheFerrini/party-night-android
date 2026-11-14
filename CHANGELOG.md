# Changelog — Party Night

## [2.0.5] — 2026-11-14 · Smooth Canvas & Count-up

### Animacions
- La careta d'inici dura una mica més, amb una sortida més pausada.
- Les subseccions d'Estadístiques es desplacen com un únic llenç horitzontal amb desacceleració suau.
- Els valors numèrics de les estadístiques compten fins al resultat final.
- Les animacions respecten la preferència de reduir moviment.

### Actualitzacions
- L'avís automàtic d'una nova versió es mostra només una vegada per cada release detectada.
- La comprovació manual continua mostrant el resultat de la consulta.

### Projecte
- Versió actualitzada a 2.0.5 als metadades del projecte i a la interfície.

## [2.0.3] — 2026-11-14 · The Comeback Intro & Full UI Language

### Careta
- Recuperada la careta animada de Party Night al iniciar la aplicación.
- Se muestra también después de cambiar el idioma y reiniciar la app.

### Idiomas
- Español como idioma predeterminado cuando no hay una preferencia guardada.
- El selector mantiene el nombre nativo de cada idioma y elimina el subtítulo «Catalunya».
- Guardar el idioma vuelve a iniciar la app para aplicar el cambio de forma consistente en toda la interfaz.
- Añadida una capa común de traducción para textos estáticos JSX y atributos de interfaz.
- Completadas las traducciones de interfaz en castellano, catalán e inglés.
- Las frases, preguntas y retos de los juegos se mantienen en su idioma original por ahora.

### Compatibilidad
- Se conserva el package ID y la clave de firma persistente de la 2.0.2.
- La 2.0.3 se instala como actualización directa; no hace falta desinstalar.

## [2.0.2b] — 2026-11-14 · Localization hotfix
- Corregida la referencia a UI_TRANSLATIONS que impedía iniciar la aplicación.

## [2.0.2] — 2026-11-14 · Boot & Update Fix
- Rutas relativas de Vite para el WebView Android.
- Diagnóstico HTML independiente de React.
- Clave de firma Android persistente y verificada.
