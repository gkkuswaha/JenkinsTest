import { config } from './wdio.conf'
config.specs = [
];

config.maxInstances = 1;

config.suites = {

  Sanity: [
    "../test/specs/Sanity/CookiesUserflow.ts",
    "../test/specs/Sanity/FavouriteUserflow.ts",
    "../test/specs/Sanity/HomePageUserflow.ts",
    "../test/specs/Sanity/LoginUserflow.ts",
    "../test/specs/Sanity/MediathekUserflow.ts",
    "../test/specs/Sanity/OnkanalePageUserflow.ts",
    "../test/specs/Sanity/ProfilePageUserflow.ts",
    "../test/specs/Sanity/SportAndTvProgramUserflow.ts",
    "../test/specs/Sanity/SportPageUserflow.ts",
    "../test/specs/Sanity/TvLiveUserflow.ts",
    "../test/specs/Sanity/GuestVodContentPlayerScreen.ts",
    "../test/specs/Sanity/GuestLiveContentPlayerScreen.ts",
    "../test/specs/Sanity/GuestReplayFunctionalityPlayer.ts",
    "../test/specs/Sanity/NonPremiumVodContentPlayerScreen.ts",
    "../test/specs/Sanity/NonPremiumLiveContentPlayerScreen.ts",
    "../test/specs/Sanity/NonPremiumReplayFuntionalityPlayer.ts",
    "../test/specs/Sanity/PremiumVodContentPlayerScreen.ts",
    "../test/specs/Sanity/PremiumLiveContentPlayerScreen.ts",
    "../test/specs/Sanity/PremiumReplayFunctionlaityPlayer.ts",
    "../test/specs/Sanity/PremiumUpnextFunctionlaityPlayer.ts"
  ],

  Regression: []
}
  const Platform= process.env.PLATFORM.toLowerCase();

  if (Platform !== 'android' && Platform !== 'ios') {
    throw new Error("Invalid platform specified. Please use 'Android' or 'iOS'.");
  }
  
  config.capabilities = [
    {
      port: 4723,
      platformName: Platform,
      'appium:deviceName': Platform === 'android' ? process.env.UDID : process.env.UDID,
      'appium:platformVersion': Platform === 'android' ? process.env.VERSION : process.env.VERSION,
      'appium:automationName': Platform === 'android' ? 'UiAutomator2' : 'XCUITest',
      'appium:newCommandTimeout': 15000,
      'browserName':Platform === 'android' ? 'chrome' : 'safari',
      'appium:noReset': false,
    }
  ];
  config.services = [
    ['appium', {
        command: 'appium',
        args: {
            allowInsecure: 'chromedriver_autodownload' 
        }
    }]
];
  exports.config = config;


