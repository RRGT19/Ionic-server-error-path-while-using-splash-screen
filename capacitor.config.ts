import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-error-path',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
    errorPath: 'assets/error.html'
  },
  /*
    Test 1.
    Run the Android App with the configuration below and you will see black screen.
    Test 2.
    Run the Android App without the configuration below and you will see the custom html file with error message.
   */
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#000000',
      androidScaleType: 'CENTER_CROP'
    },
  },
};

export default config;
