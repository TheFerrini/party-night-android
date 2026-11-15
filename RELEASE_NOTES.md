## Party Night v2.0.7 — Stats Motion & Data Hub

### 📊 Estadísticas con animaciones recuperadas
- Los bloques de Resumen, Juegos y Jugadores vuelven a entrar desde abajo con una desaceleración suave.
- Los contadores numéricos vuelven a animarse al entrar en cada subapartado.

### 💾 Nuevo centro de gestión de datos
- Nuevo apartado independiente accesible desde Configuración general.
- Muestra el espacio local estimado, elementos guardados, jugadores y sesiones.
- Importar y exportar copias de seguridad pasan a este nuevo apartado.
- Añadida una sección de gestión en la nube marcada como **En desarrollo / Próximamente**. La sincronización todavía no está activa.

### 🔔 Comprobación automática de actualizaciones
- Comprueba GitHub una vez en cada arranque, después de la careta inicial, sin depender de la pestaña seleccionada.
- Evita el estado persistente de sessionStorage que podía impedir nuevas comprobaciones.
- Consulta GitHub evitando respuestas en caché.
- Si hay una versión superior, el aviso aparece siempre, aunque se hubiera cerrado en una apertura anterior.
