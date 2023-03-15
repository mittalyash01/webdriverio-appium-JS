![Hackathon-Introduction](./docs/assets/Hackathon bg.jpg)

# Mobile Hackathon: Introduction
This repository is setup as a part of Mobile Test automation hackathon to demonstrate the capabilities of [WebDriverIO](https://webdriver.io/) test automation framework. The team has setup WebDriverIO for mobile native app test automation with libraries/tools such as- [mocha](https://mochajs.org/) framework, [Appium](https://appium.io) for mobile automation, [Allure Reporter](https://webdriver.io/docs/allure-reporter/) for robust reporting. We also demonstrated and compared the capabilities of integrating this framework with cloud execution environments such as- [BrowserStack](https://www.browserstack.com/), [Saucelabs](https://saucelabs.com/), [Perfecto](https://www.perfecto.io/) and [AWS Device Farm](https://aws.amazon.com/device-farm/).

## Table of contents
1. [Getting Started](#Getting-started)
    1. [Pre-requisites](#Pre-requisites)
    1. [Supported testing types and platforms](#Supported-testing-types-and-platforms)
    1. [Installation](#Installation)
        1. [Use with Android](#use-with-android)
        1. [Use with iOS](#use-with-ios)
    1. [How to use](#how-to-use)
    1. [Integrations](#Integrations)
        1. [Saucelabs](#Saucelabs)
            1. [Positive Outlook](#Positive-outlook)
            1. [Shortcomings](#Shortcomings)
        1. [BrowserStack](#BrowserStack)
            1. [Positive Outlook](#Positive-outlook)
            1. [Shortcomings](#Shortcomings)
        1. [Perfecto](#Perfecto)
            1. [Positive Outlook](#Positive-outlook)
            1. [Shortcomings](#Shortcomings)
        1. [AWS Device Farm](#aws-device-farm)
            1. [Positive Outlook](#Positive-outlook)
            1. [Shortcomings](#Shortcomings)
1. [Running your first test](#running-your-test)
1. [Overall Summary](#overall-summary)
1. [Metrics](#Metrics)
 

## Getting Started
...........................................

### Pre-requisites
The user must need

* 
* 

Your machine should

* 
* 
,
## Supported testing types and platforms
- [x] Mobile app on Android
- [x] Mobile app on iOS
- [ ] Web app on Android
- [ ] Web app on iOS



## Installation and Local setup
Clone the repository and npm install.....
............................
- **Install packages**: `npm install`
..................

### Use with Android
......................

### Use with iOS
.................

## How to Use
......................

## Integrations
In this section we will elaborate the integration of the automation framework with various cloud execution environment/ device farm. We will showcase the capability of each combination: in depth analysis of what went good and bad, how we navigate through challenges and share some key metrics around each combination.

### Sauce labs
......
![Hackathon-Introduction](./docs/assets/saucelabs_ios_conf.jpg)

![Hackathon-Introduction](./docs/assets/saucelabs_android_conf.jpg)


#### Shortcoming

#### Positive outlook
................

### BrowserStack
...........

![Hackathon-Introduction](./docs/assets/browserstack_android_conf.jpg)

![Hackathon-Introduction](./docs/assets/browserstack_ios_conf.jpg)

#### Shortcoming
...................

#### Positive outlook
.......................

### Perfecto
----------
Android
![Hackathon-Introduction](./docs/assets/Perfecto_android_conf.jpg)

iOS
![Hackathon-Introduction](./docs/assets/Perfecto_ios_conf.jpg)


#### Shortcoming
1. Tests executed ok over iOS but same test failed over Android. Have to segregate validation steps as it was not synchronizing both together.
2. Timeout issue- fixed global timeouts
3. Need to check device availability every time before executing tests- since these were shared/public devices over the cloud. The device management is not present, could be better from usability POV.
4. Time to open a tunnel connection is somewhat longer which is approx~ 15 seconds

#### Positive outlook
.................

### AWS Device Farm
-------------

#### Shortcoming
................

#### Positive outlook
.....................



## Running your first test
...............................
`npx wdio {config} --spec {filename}`

## Overall Summary
...............................

## Metrics
-----------------------

| Test Automation tool stack | Device Farm | Abrupt Connection Loss/ Latencies (Device connection aren't reliable, abruptly the connections are lost during execution (Score out of 10)) | Execution Cycles (Test Case execution time) | Execution Cycles (Test Suite execution time)  | Tool Integrations (Complexity with tool integrations (Low/ Medioum/ High/ Very High) | Framework Stability (% of test cases passed as compared to total number of executions) | Android/iOS version (Tool support for android/iOS versions) | Technical Support (Insufficient support received from vendor) | Technical Support (Native app or list the features not supported by the tool) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |--- |
| Appium + WebDriverIO | BrowserStack |  |  |  |  |  |  | |  |
| Appium + WebDriverIO | Perfecto |  |  |  |  |  |  |  |  |
| Appium + WebDriverIO | Saucelabs |  |  |  |  |  |  |  |  |
| Appium + WebDriverIO | AWS Device Farm |  |  |  |  |  |  |  |  |
