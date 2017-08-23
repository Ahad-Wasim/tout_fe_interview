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
