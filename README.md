ServusTV Web Automation framework with WebdriverIO

Description:

The ServusTV Automated Testing Suite is a comprehensive test automation project aimed at ensuring the quality and reliability of the ServusTV web platform. Leveraging WebDriverIO with Mocha and TypeScript, this
project automates end-to-end testing scenarios across various functionalities of the ServusTV web application.

Key Features:

User Authentication Testing: Verify the seamless login and logout functionalities, including validation of different authentication methods such as email/password and OTP.

Content Discovery Testing: Automate the process of searching for movies, TV shows, and original content, ensuring accurate search results and filter options.

Playback Testing: Validate the playback functionalities for streaming videos, including playback controls, quality settings, and subtitle options across different devices.

Playlist Management Testing: Automate tests for creating, editing, and deleting playlists, ensuring smooth playlist management for users.

User Profile Testing: Verify the functionalities related to user profiles, such as profile creation, settings customization, subscription management, and viewing history.

Cross-platform Compatibility Testing: Ensure compatibility and consistent user experience across multiple platforms and devices, including desktop browsers and mobile browsers (iOS/Android).

Objective:

The primary objective of the ServusTV Automated Testing Suite is to increase testing efficiency, accelerate release cycles, and enhance the overall quality of the ServusTV platform. By automating repetitive
testing tasks, identifying and addressing defects early in the development lifecycle, and providing reliable test results, this project aims to deliver a seamless and enjoyable viewing experience for ServusTV
users.

Installation:

Note: whether a specific IDE, such as Visual Studio, is installed on your system.

1.Clone the repository

     git clone "repository URL"

2.Install dependencies

     npm install

Getting Started:

To get started with using the framework, follow these steps:

Ensure you have set up your environment as per the installation instructions.

Run your tests using the provided test runner configuration. For example:

-> If you want to run the script in specific Environment, hit these command as per prefrences in the terminal:

    npx cross-env ENV="EnvironmentName" npm run web //Just need to pass EnvironmentName as - prod or stage.
    
    // it will exceute all the classes present in the sanity class in all browsers example below.
    
       npx cross-env ENV=prod npm run sanityweb  

-> If you want to run the script in specific Browser,  hit these command as per prefrences in the terminal:

    //Just need to pass BROWSERNAME as - Chrome,firefox,edge,safari.
    
     npx cross-env ENV="EnvironmentName" BROWSER="BROWSERNAME" npm run web   
    
    //it will exceute all the classes present in the sanity class in specific browser example below.
    
     npx cross-env ENV=prod BROWSER=chrome npm run sanityweb   

-> If you want to run the script in BROWSERSTACK, hit these command in the terminal:

//According to the preferences pass the environment and browser name.

//ADD your browser stack user name and user key in the command 

npx cross-env ENV=prod BROWSER=chrome BSTACKUSERNAME=BrowserStackUserName BSTACKUSERKEY=BrowserStackKey npm run BStacksanity  

Report Generation :

We use ALLURE REPORT in this project to generate the Report.

To generate the Report hit this below command in the terminal :

npm run report  //it will automatically generate the report and open in the default browser.



