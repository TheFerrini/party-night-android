# Party Night — Android

**Party Night v2.0.3 · The Comeback Intro & Full UI Language**

## Novedades
- Careta animada recuperada al iniciar.
- Español predeterminado para instalaciones nuevas.
- Selector de idioma solo en la pantalla principal, sin el subtítulo «Catalunya».
- Guardar idioma reinicia la app y aplica la preferencia a toda la interfaz.
- Textos estáticos y etiquetas accesibles traducidos en español, catalán e inglés.
- Las frases y retos de los juegos permanecen en su idioma original por ahora.
- Se conserva la importación y exportación de copias JSON.
- Se conserva la clave de firma Android persistente.

## Actualizar
La 2.0.3 mantiene el mismo package ID y la misma clave de firma persistente que la 2.0.2. Se puede instalar directamente encima, sin desinstalar.

## Datos
Las copias pueden contener nombres, sesiones, historial, preguntas, votos, penalizaciones y resultados. Desinstalar la app elimina sus datos locales.

## Compilar
Requiere Node.js 22+, Java 21 y Android SDK.

```bash
npm install
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

Package ID: `com.theferrini.partynight`.
