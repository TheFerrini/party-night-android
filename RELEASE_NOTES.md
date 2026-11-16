## Party Night v2.1.0 — History, Motion & Android Icon

### History
- Sessions with no games played are no longer saved; older empty history rows are cleaned up.
- History entries can be deleted from the page with a confirmation step. The change is included in cloud sync.

### Interface
- Statistics panels use a simpler entrance transition and stay mounted while navigating between the bottom tabs.
- The Play page and player card are more compact.

### Android
- New launcher icon with two beer mugs over Party Night's dark plum gradient.

## Party Night v2.0.8 — Cloud Sync & Reliability

### ☁️ Cloud management
- Independent cloud-management page with account registration, sign-in and sign-out.
- Local/cloud content comparison, estimated data size and last cloud update.
- Automatic cloud sync after each completed game and session.
- Conflict detection protects changes made on another device. No copy is overwritten until you choose which one to keep.
- Party Night uses its own Supabase table with per-user Row Level Security. The same FollowGym account can be used.

### 💾 Data safety
- Reviewed the delete-data action: it clears all Party Night local keys and boots the app cleanly.
- Local deletion and cloud-copy deletion are separate actions, so one does not silently erase the other.

### ✨ Interface
- History always displays the installed app version dynamically.
- Statistics entrance animations now use a smooth rise with no bounce in all three subpages.
- Language changes apply live. Confirming the language already selected simply closes the selector without restarting the app.

### 📦 Android
- APK is always named **Party Night-vX.Y.Z.apk**.
- The current stable signing key is preserved, allowing direct updates without uninstalling.
