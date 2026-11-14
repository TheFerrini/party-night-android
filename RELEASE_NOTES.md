## Party Night v2.0.1b — Hotfix & Backup

### 🛠️ Estabilitat
- Càrrega de la vibració nativa sota demanda per reduir dependències durant l’arrencada.
- Validació de les dades locals abans d’inicialitzar jugadors, sessions i ajustos.
- Pantalla d’error amb informació tècnica copiable en cas que falli el renderitzat.

### 💾 Còpies de seguretat
- Exporta jugadors, sessions, historial i preferències en un fitxer JSON.
- A Android, s’obre el menú natiu per desar o compartir el fitxer.
- Importa una còpia des de l’emmagatzematge del dispositiu.
- Validació del fitxer abans de tocar les dades actuals.
- La restauració només substitueix les dades de Party Night i demana confirmació.
- Traduccions del panell corregides en els tres idiomes i `versionCode` preparat per a les versions futures.

### 📱 Android
- Es manté l’identificador `com.theferrini.partynight`.
- `versionCode` incrementat i signatura persistent conservada: instal·lació directa sobre la 2.0.1, sense desinstal·lar.
