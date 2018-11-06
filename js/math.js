//Global Variables
var num1 = [],
    num2 = [],
    sum = 0,
    i, x, y, stage = 0,
    z = 0,
    level = 14;
var points = 0;
var correct = 0,
    incorrect = 0;
var scorebreakdown = [];
var selectedOperator, operation, operators = ["+", "-", "*", "/"];
var levelSelect = [1, 2, 3, 4, 5];
var levelNum = 9,
    levelOffset = 9,
    offset = 1;
var $levelOffset = [9, 9, 90, 99, 999];
var $offset = [1, 1, 10, 10, 100];
var $levelNum = [9, 99, 90, 999, 999];
var firstName, lastName, gender, dob, age;
var isPlaying;


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);

}

function calculateAge() {
    dob = document.getElementById('dob').value;

    var birthdate = new Date(dob);
    var currentdate = new Date();
    age = (currentdate.getFullYear() - birthdate.getFullYear());
    alert("You're " +age+ " years old!");
}


if (window.location.href.match('math.html') != null) {
    window.onload = function () {
        firstName = getQueryVariable('FirstName');
        lastName = getQueryVariable('LastName');
        gender = getQueryVariable('Gender');
        dob = getQueryVariable('DateOfBirth');
        document.getElementById('title').innerHTML = 'What would you like to practice today, ' + firstName + '?';
        randomNum(levelOffset, levelNum, offset);

        var birthdate = new Date(dob);
        var currentdate = new Date();
        age = (currentdate.getFullYear() - birthdate.getFullYear());
        console.log(age);
    }
}

function mathHTML() {
    var newHTML = '<div class="width margin shadow-box center">' +
        '          <h1 style="margin-top: 0; margin-bottom: 0px;" id="level_name">{level_name}</h1>' +
        '          <h2 style="margin-top: 0px; text-align: left;color:#000;" id="level">{level}<h2>' +
        '         <h2 style="margin-top: -80px; margin-bottom: 50px; text-align: right;color:#000;" id="score">0/15<h2>' +
        '' +
        '            <div>' +
        '              <h1 id="response"></h1>' +
        /* Response html */
        '              <div id="box" class="center"><div id="question" class="text">7 x 7</div></div>' +

        '              <form id="answer" style="margin-top: 20px;">' +
        '                <label style="font-size: 20px" for="answer">Your answer:</label><br>' +
        '                <input  class="number-input" type="number" id="answerInput" name="answerNum" autofocus><br>' +
        '                <input class="submit smallbutton" name="BTN" id="myBtn" type="button" onclick="init()" value="Submit">' +
        '              </form>' +
        '            </div>' +
        '          </div>';

    document.getElementById('content').innerHTML = newHTML;
}


function reportHTML() {
    var $reportHTML = '<div class="width margin shadow-box center">' +
        '              <h1>Report</h1>' +
        '              <div id="report">' +
        '                <div class="grid">' +
        '                  <h2 class="color">Information</h2>' +
        '                  <h3 id="name">Name: {name}</h3>' +
        '                  <h3 id="gender">Gender: {gender}</h3>' +
        '                  <h3 id="age">Age: {age}</h3>' +
        '                  </div>' +
        '                  <div class="grid">' +
        '                    <h2 class="color">Score Breakdown</h2>' +
        '                    <h3 id="level1">Level 1: {level1}</h3>' +
        '                    <h3 id="level2">Level 2: {level2}</h3>' +
        '                    <h3 id="level3">Level 3: {level3}</h3>' +
        '                    <h3 id="level4">Level 4: {level4}</h3>' +
        '                    <h3 id="level5">Level 5: {level5}</h3>' +
        '                    <h3 id="total">Total Score: {totalscore}</h3>' +
        '                    </div>' +
        '                    <br>' +
        '                    <div class="buttons">' +
        '                    <a href="math.html"><div><button class="submit" type="submit" value="Submit">Play Again</button></div></a>' +
        '                    <a href="about.html"><div><button class="submit" type="submit" value="Submit">About</button></div></a>' +
        '                    <div><button class="submit" type="submit" value="Submit">Exit</button></div>' +
        '                    </div>' +
        '              </div>';

    document.getElementById('content').innerHTML = $reportHTML;
}

function Addition() {
    Game('Addition');
}

function Subtraction() {
    Game('Subtraction');
}

function Multiplication() {
    Game('Multiplication');
}

function Division() {
    Game('Division');
}


function Game(operator) {
    mathHTML();
    operation = operator;
    document.getElementById('level_name').innerHTML = operation;
    generate();
}

function generate() {
    document.getElementById('level').innerHTML = "Level " + levelSelect[stage];
    mode();
    {
        document.getElementById('question').innerHTML = num1[i] + '  ' + selectedOperator + '  ' + num2[i];
        i++;
    }
    score();
}

function init() {
    var UserAns = document.getElementById('answerInput').value;
    var userAns = Number(UserAns);
    console.log("User's Input: " + userAns, "Answer: " + sum);
    checkAns(userAns);
    inputReset();
    generate();

}

function randomNum(levelOffset, levelNum, offset) {
    for (i = 0; i <= level; i++) {
        num1[i] = Math.floor(Math.random() * levelOffset + offset);
        num2[i] = Math.floor(Math.random() * levelNum + offset);
        console.log("index: " + i + ": " + num1[i], num2[i]);
    }
}

function mode() {
    i = points;
    switch (operation) {
        case "Addition":
            selectedOperator = operators[0];
            sum = num1[i] + num2[i];
            break;
        case "Subtraction":
            selectedOperator = operators[1];
            sum = num1[i] - num2[i];
            break;
        case "Multiplication":
            selectedOperator = operators[2];
            sum = num1[i] * num2[i];
            break;
        case "Division":
            selectedOperator = operators[3];
            sum = num1[i] / num2[i];
            sum = Math.round(sum * 100) / 100;
            break;
    }
    console.log("Answer: " + sum);
}

function $mode(x) {
    var x = x;
    switch (operation) {
        case "Addition":
            selectedOperator = operators[0];
            sum = num1[x] + num2[x];
            break;
        case "Subtraction":
            selectedOperator = operators[1];
            sum = num1[x] - num2[x];
            break;
        case "Multiplication":
            selectedOperator = operators[2];
            sum = num1[x] * num2[x];
            break;
        case "Division":
            selectedOperator = operators[3];
            sum = num1[x] / num2[x];
            sum = Math.round(sum * 100) / 100;
            break;
    }
    console.log("Answer: " + sum);
}


function checkAns(userAns) {
    if (sum == userAns) {
        document.getElementById('response').innerHTML = "Correct!";
        correct++;
    } else if (sum != userAns) {
        document.getElementById('response').innerHTML = "Wrong!";
        incorrect++;
    }
}



function inputReset() {
    document.getElementById("answerInput").focus();
    document.getElementById("answerInput").value = "";
}


function levelChange() {
    document.getElementById('level').innerHTML = "Level 1";
}

function score() {
    points++;
    var $score = document.getElementById('score');
    $score.innerHTML = points + '/15';

    if (points == 16) {
        endRound();
    }
}


function endRound() {
    scorebreakdown[stage] = correct;
    stage++;
    var pass;
    pass = correct / 15 * 100;
    console.log("correct: " + correct)
    console.log("percentage: " + pass);
    pass = Math.round(pass * 100) / 100;
    console.log("stage: " + stage);


    if (pass >= 80) {
        if (stage == 5) {
            isPlaying = false;
        }
        confirm("Great job, you passed! Percentage: " + pass + "%" + "\nWould you like to continue to the next level?");
        points = 0;

        Game(operation);
        randomNum($levelOffset[stage], $levelNum[stage], $offset[stage]);

        document.getElementById('level').innerHTML = "Level " + (levelSelect[stage]);
        document.getElementById('question').innerHTML = num1[0] + '  ' + selectedOperator + '  ' + num2[0];
        $mode(0);
    } else {
        alert("Better luck next time! Percentage: " + pass + "%");
        isPlaying = false;
    }
    correct = 0;

    if (isPlaying == false) {
        report();
    }
}

function report() {
    reportHTML();
    var lvl1, lvl2, lvl3, lvl4, lvl5;
    lvl1 = Math.round((scorebreakdown[0] / 15) * 100);
    lvl2 = Math.round((scorebreakdown[1] / 15) * 100);
    lvl3 = Math.round((scorebreakdown[2] / 15) * 100);
    lvl4 = Math.round((scorebreakdown[3] / 15) * 100);
    lvl5 = Math.round((scorebreakdown[4] / 15) * 100);

    document.getElementById('name').innerHTML = "Name: " + firstName + " " + lastName;
    document.getElementById('gender').innerHTML = "Gender: " + gender;
    document.getElementById('age').innerHTML = "Age: " + age;
    document.getElementById('level1').innerHTML = "Level 1: " + lvl1 + "%";
    document.getElementById('level2').innerHTML = "Level 2: " + lvl2 + "%";
    document.getElementById('level3').innerHTML = "Level 3: " + lvl3 + "%";
    document.getElementById('level4').innerHTML = "Level 4: " + lvl4 + "%";
    document.getElementById('level5').innerHTML = "Level 5: " + lvl5 + "%";
    document.getElementById('total').innerHTML = "Total Score: " + (((lvl1 + lvl2 + lvl3 + lvl4 + lvl5) / 5)) + "%";
}

function validateForm() {
    var fname, lname;
    fname = document.getElementsByName('FirstName')[0].value;
    lname = document.getElementsByName('LastName')[0].value

    if (!(age >= 9 && age <= 12)) {
        alert("You must between the ages of 9-12 to continue.");
        return false;
    }

    if (fname.length < 3) {
        alert("Your first name must have more than 3 characters.");
        document.getElementById("FirstName").focus();
        return false;
    }

    if (lname.length < 3) {
        alert("Your last name must have more than 3 characters.");
        document.getElementById("LastName").focus();
        return false;
    }

    if (age >= 9 && age <= 12 && fname.length >= 3 && lname.length >= 3) {
        return true;
    }
}
