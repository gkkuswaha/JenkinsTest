import { config } from './wdio.conf';

config.specs = [];

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
};

config.user = process.env.BSTACKUSERNAME,
config.key = process.env.BSTACKUSERKEY,
config.hostname = 'hub.browserstack.com';

config.services = [
  ['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
      projectName: 'STV_Web',
      buildName: 'Sanity',
    },
    browserstackLocal: true
  }]
];
const platformName = process.env.PLATFORM ? process.env.PLATFORM.toLowerCase() : '';
 
config.capabilities = [
  ...(platformName === "android" ? [{
    'bstack:options': {
      os: platformName,
      osVersion: process.env.VERSION,
      deviceName: process.env.DEVICENAME,
      projectName: 'STV_Web',
      buildName: 'Sanity',
      sessionName: 'Android Test Session',
    },
    'appium:automationName': 'UiAutomator2',
    'appium:noReset': false,
    'appium:newCommandTimeout': 15000,
    'browserName': 'chrome',
  }] : []),
 
  ...(platformName === "ios" ? [{
    'bstack:options': {
      os: 'iOS',
      osVersion: process.env.VERSION,
      deviceName: process.env.DEVICENAME,
      buildName: 'Sanity',
      sessionName: 'iOS Test Session',
    },
    'appium:automationName': 'XCUITest',
    'appium:noReset': false,
    'appium:newCommandTimeout': 15000,
    'browserName': 'safari',
  }] : []),
];
exports.config = config;
