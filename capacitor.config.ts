import { CapacitorConfig } from '@capacitor/cli';
import { Server } from 'http';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mathapp',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{
    "url":"http://192.168.88.73:8100"
  }
};

export default config;
