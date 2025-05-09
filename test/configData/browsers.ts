

export class browsers {
    
     firefox = {
        maxInstances : "1",
        browserName: "firefox",
        browserVersion: "latest",
    };
     chrome = {
        maxInstances : "1",
        browserName: "chrome",
        browserVersion: "latest",
    };
    edge = {
        maxInstances : "1",
        browserName: "edge",
        browserVersion: "latest",
        'ms:edgeOptions': {
            prefs: {
              "profile.default_content_setting_values.notifications": 2
            }
        }
    };
    safari = {
        maxInstances : "1",
        browserName: "safari",
        browserVersion: "latest",
    };
}
