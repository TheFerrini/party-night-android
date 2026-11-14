# Party Night — Android

[App que antes era en versión Gemini, ahora disponible en versión APK para Android.]

**La fiesta empieza aquí.**

Party Night es una aplicación de entretenimiento diseñada para animar reuniones, fiestas y noches con amigos. Una colección de juegos, preguntas, frases y retos pensados para romper el hielo, poner a prueba al grupo y convertir cualquier quedada en una noche memorable *(o conocer bien a la gente que te rodea antes de decidir si queréis mantener amistades)*.

Olvídate de las típicas conversaciones incómodas. Reúne a tus amigos, preparaos y dejad que Party Night haga el resto.

---

## Características principales

Party Night no es simplemente una colección de preguntas. Es una experiencia interactiva con diferentes herramientas para gestionar y disfrutar de cada partida.

- *Juegos y retos:* diferentes dinámicas para mantener la diversión y la participación de todo el grupo.
- *Ámplia colección de contenido:* preguntas, frases y desafíos organizados en sus respectivas categorías.
- *Gestión de jugadores:* añade participantes y organiza las sesiones de juego.
- *Estadísticas y clasificaciones:* consulta resultados, puntuaciones y el rendimiento de los participantes.
- *Historial de partidas:* recupera sesiones anteriores y revisa cómo han ido las últimas noches.
- *Penalizaciones acumulativas:* un sistema para añadir consecuencias a las dinámicas del juego.
- *Interfaz animada:* transiciones, animaciones y una navegación diseñada para ofrecer una experiencia fluida.
- *Multidioma:* interfaz disponible en español, catalán e inglés. (frases in-game SOLO en español).

## Una experiencia cuidada

La aplicación cuenta con una interfaz propia, animaciones y transiciones entre secciones para que la experiencia sea tan divertida como los propios juegos.

Cada actualización busca mejorar tanto la funcionalidad como los pequeños detalles visuales: navegación, interacciones, historial, estadísticas y accesibilidad.

## Idiomas

Party Night permite utilizar la interfaz en tres idiomas:

- 🇪🇸 Español (predeterminado).
- 🏴 Catalán.
- 🇬🇧 Inglés.

El idioma seleccionado se aplica a toda la interfaz de la aplicación. El contenido de los juegos se mantiene actualmente en español (próximamente tal vez lo traduzca).

## Tus partidas, bajo control

La aplicación permite gestionar los datos de las sesiones y conservar el historial de juego.

También incorpora funciones de:

- Importación de copias de seguridad en formato JSON.
- Exportación de copias de seguridad en formato JSON.
- Eliminación completa de los datos locales desde los ajustes.

*Importante: las copias de seguridad pueden contener nombres de jugadores, sesiones, historial, preguntas, votos, penalizaciones y resultados. Al desinstalar la aplicación se eliminan sus datos locales.*

## Instalación

1. Accede a la sección "Releases" (https://github.com/TheFerrini/party-night-android/releases).
2. Descarga la última versión disponible del archivo APK.
3. Abre el archivo descargado en tu dispositivo Android.
4. Autoriza la instalación si Android lo solicita.
5. ¡Abre Party Night y empieza a jugar!

Las nuevas versiones pueden instalarse directamente sobre las anteriores, sin necesidad de desinstalar la aplicación, siempre que se mantenga la misma firma de publicación.

## Desarrollo y actualizaciones

Party Night evoluciona constantemente *(bueno, en verdad cuando me sale de los cojones)* . Cada versión incorpora mejoras, correcciones de errores y nuevas funcionalidades basadas en la experiencia de uso.

El proyecto sigue una filosofía de mejora continua: cuidar tanto el funcionamiento interno como la experiencia de usuario.

Consulta el historial de cambios en "Releases" (https://github.com/TheFerrini/party-night-android/releases).

🛠️ Información del proyecto

Información| Detalles
Nombre| Party Night
Plataforma| Android
Versión actual| 2.0.6
Idiomas de interfaz| Español, catalán e inglés
Formato de instalación| APK
Copias de seguridad| JSON
Desarrollador| TheFerrini

---

❤️ ¿Preparado para la próxima noche?

Reúne a tus amigos, abre Party Night y deja que empiece el juego.

Una aplicación. Un grupo de amigos. Infinitas posibilidades.

---

Desarrollado con ❤️ por "TheFerrini" con el soporte (absoluto) de ChatGPT. (https://github.com/TheFerrini).


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
