import { config } from "./wdio.conf";

config.specs = [
];

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
    // "../test/specs/Sanity/GuestVodContentPlayerScreen.ts",
    // "../test/specs/Sanity/GuestLiveContentPlayerScreen.ts",
    // "../test/specs/Sanity/GuestReplayFunctionalityPlayer.ts",
    // "../test/specs/Sanity/NonPremiumVodContentPlayerScreen.ts",
    // "../test/specs/Sanity/NonPremiumLiveContentPlayerScreen.ts",
    // "../test/specs/Sanity/NonPremiumReplayFuntionalityPlayer.ts",
    // "../test/specs/Sanity/PremiumVodContentPlayerScreen.ts",
    // "../test/specs/Sanity/PremiumLiveContentPlayerScreen.ts",
    // "../test/specs/Sanity/PremiumReplayFunctionlaityPlayer.ts",
    // "../test/specs/Sanity/PremiumUpnextFunctionlaityPlayer.ts"
  ],

  Regression: []
}
const browserEnv = process.env.BROWSER && process.env.BROWSER.toLowerCase();

config.maxInstances = 1;

config.capabilities = [

  ...(browserEnv === "edge" ? [
    {
      browserName: "edge",
      browserVersion: "latest",
    }
  ] : []),

  ...(browserEnv == "chrome" ? [
    {
      browserName: "chrome",
      browserVersion: "latest",
    }
  ] : []),

  ...(browserEnv == "firefox" ? [
    {
      browserName: "firefox",
      browserVersion: "latest",
    }
  ] : []),

  ...(browserEnv == "safari" ? [
    {
      browserName: "safari",
      browserVersion: "latest",
    }
  ] : [])
];

if (browserEnv === undefined) {

  config.maxInstances = 3;

  config.capabilities = [
    {
      browserName: "edge",
      browserVersion: "latest",
    },
    {
      browserName: "chrome",
      browserVersion: "latest",
    },
    {
      browserName: "firefox",
      browserVersion: "latest",
    }
  ]
}

exports.config = config;
