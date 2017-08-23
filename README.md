# Ahad Wasim - (Installing the Application) August 22nd, 2017

---

### Setup

 1) Simply clone this repo
 2) Navigate to the root of the project (i.e /tout_fe_interview)
 3) Enter the command **make**

 ```javascript
 tout_fe_interview $  make
 ```

4) The application should now be running on * [localhost:8080](http://127.0.0.1:8080)

 ```javascript
Project is running at http://localhost:8080/
...
 ```

*OPTIONAL*:  Another way to run this application is by typing in **webpack-dev-server**.
 ```javascript
 tout_fe_interview $  webpack-dev-server
 ```
___

### Starting the Timer


There are two ways to start any timer. You can physically click the **edit button** in the UI or you can utilize the **startTimer** function found on the window object.

The startTimer function takes in one argument which is the configuration **object**.

**timerId** --> the order of the timers from [1-6]. topTimer --> 1 & bottomTimer --> 6

**hours**  --> a numbered string. Max Length is set to 2 characters

**minutes**  --> a numbered string. Max Length is set to 2 characters

**seconds**  --> a numbered string. Max Length is set to 2 characters

```javascript
const configurations = {
  timerId: 1,     // number primitive
  hours: '12',    // string primitive
  minutes: '22',  // string primitive
  seconds: '05'   // string primitive
}

// Pass in the argument
startTimer(configurations)  
 ```

___

### Resetting the Timer

There are two ways to reset the timer. You can physically click on the **reset button** in the UI (when the timer is running) or you can utilize the **resetTimer** function found on the window object.

The resetTimer function takes in one argument which is the timerId.

**timerId**   --> The id number of the timer you want to reset.


```javascript
resetTimer(1) // This will reset Timer#1
 ```


---
# Tout Frontend Interview Project

This is an open book take home test. There are no *right* or *wrong* answers. The goal is to get an understanding of how you solve the problem. Creativity is encouraged. We recommend focusing on your strengths and showing off your skills.

Use any libraries or tools you want. Modify and change any file in this project to fit your needs. To help you get started, the project is a blank page built with Webpack and Babel. Mocha and ESLint are available for testing.


## Task
> I need a page with six timers on it. The user should be able to see all six timers and the remaining time for each. Once a timer reaches zero, the user can click to restart the timer.

> We need a function on `window` that can be called to set/reset the timers and their durations. This will be tested via the Console in Chrome, Safari, and Firefox.

## Usage

### Part 1: Create a brand new repository

![New Repo](https://user-images.githubusercontent.com/348581/27461558-5065ead2-576f-11e7-83d7-6044c05f2440.png)

1. Open the new repository page: https://github.com/new
2. Name it "tout_fe_interview"
3. Select "Private"
4. Click "Create repository" button.

### Part 2: Import the sample project into your repo





1. On the homepage for your new repository, click the "Import Code" button

![Import Code](https://user-images.githubusercontent.com/348581/27461557-5065ea6e-576f-11e7-858e-6b44daa74d5d.png)

2. Enter the following URL in the "Your old repository's clone URL" field then click "Begin Import"

```
https://github.com/Tout/tout_fe_interview.git
```

![Clone URL](https://user-images.githubusercontent.com/348581/27461560-507b4256-576f-11e7-921c-da9af30f4014.png)

3. Wait 30 seconds
4. Go to your new repository

### Part 3: Clone your repo and start working

1. Clone your repo (Substitute your account name below)

```
git clone git@github.com:[YOUR_GITHUB_NAME_HERE]/tout_fe_interview.git
```

2. Build the code and start the server

```
cd tout_fe_interview
make
```

3. Commit your code and push

### Part 4: Share your repo with Tout

![Share Access](https://user-images.githubusercontent.com/348581/27461559-50687798-576f-11e7-891f-561e758d9cd6.png)

1. Click the "Settings" tab

2. Click on the "Collaborators" tab.

3. Add `ripter` as a collaborator


## Building
Build will run webpack, compiling the javascript and css files into the bundle.js loaded in index.html.
```
make build
```
