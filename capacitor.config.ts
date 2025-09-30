import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.winedge.app',
  appName: 'WinEdge',
  webDir: 'build',
  server: {
    url: 'https://app.winedge.io',
    cleartext: false,
    allowNavigation: ['app.winedge.io']
  },
  ios: {
    contentInset: 'always',
    scrollEnabled: true,
    backgroundColor: '#ffffff'
  }
};

export default config;