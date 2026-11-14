export type AppLanguage = 'ca' | 'es' | 'en';
const UI_TRANSLATIONS: Record<'ca' | 'en', Record<string,string>> = {
  ca: {
  "Diccionario de Fiesta:": "Diccionari de festa:",
  "Editar Jugadores": "Editar jugadors",
  "Añadir los de siempre": "Afegir els de sempre",
  "Añade mínimo a 2 personas.": "Afegeix com a mínim 2 persones.",
  "Guardar y Volver": "Desar i tornar",
  "Configurar Mesa": "Configurar la taula",
  "Verdad o Reto": "Veritat o repte",
  "Yo Nunca": "Jo mai",
  "La Bomba": "La bomba",
  "Duelo 1v1": "Duel 1 contra 1",
  "Encuesta Brutal": "Enquesta brutal",
  "Siguiente": "Següent",
  "Revertir": "Desfer",
  "Anotar": "Anotar",
  "Ranking": "Rànquing",
  "Modificar": "Modificar",
  "Volver": "Tornar",
  "Historial de Cambios": "Historial de canvis",
  "Estadísticas": "Estadístiques",
  "Historial": "Historial",
  "Resumen": "Resum",
  "Juegos": "Jocs",
  "Jugadores": "Jugadors",
  "Penalizaciones": "Penalitzacions",
  "Victorias": "Victòries",
  "Configuración General": "Configuració general"
},
  en: {
  "Diccionario de Fiesta:": "Party dictionary:",
  "Editar Jugadores": "Edit players",
  "Añadir los de siempre": "Add the usual crew",
  "Añade mínimo a 2 personas.": "Add at least 2 people.",
  "Guardar y Volver": "Save and return",
  "Configurar Mesa": "Set up table",
  "Verdad o Reto": "Truth or Dare",
  "Yo Nunca": "Never Have I Ever",
  "La Bomba": "The Bomb",
  "Duelo 1v1": "1v1 Duel",
  "Encuesta Brutal": "Brutal Poll",
  "Siguiente": "Next",
  "Revertir": "Undo",
  "Anotar": "Log",
  "Ranking": "Leaderboard",
  "Modificar": "Edit",
  "Volver": "Back",
  "Historial de Cambios": "Change history",
  "Estadísticas": "Statistics",
  "Historial": "History",
  "Resumen": "Overview",
  "Juegos": "Games",
  "Jugadores": "Players",
  "Penalizaciones": "Penalties",
  "Victorias": "Wins",
  "Configuración General": "General settings"
}
};
export function translateText(language: AppLanguage, value: string): string {
  if (language === 'es') return value;
  return UI_TRANSLATIONS[language]?.[value] ?? value;
}
