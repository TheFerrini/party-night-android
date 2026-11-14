import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.theferrini.partynight',
  appName: 'Party Night',
  webDir: 'dist',
  backgroundColor: '#090a12',
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
    },
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
