import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.theferrini.partynight',
  appName: 'Party Night',
  webDir: 'dist',
  backgroundColor: '#111827',
  android: {
    allowMixedContent: false,
  },
};

export default config;
