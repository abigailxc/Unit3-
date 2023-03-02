/* Declare variables below to save the different sections (divs) of your story*/

let storyOpening = document.querySelector(".story-opening");
let buttonOpening = document.querySelector(".button-opening");
let buttonOptionOne = document.querySelector(".option-one");
let buttonOptionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let buttonOptionThree = document.querySelector(".option-three");
let buttonOptionFour = document.querySelector(".option-four");
let optionThreeScreen = document.querySelector(".option-three-screen");
let optionFourScreen = document.querySelector(".option-four-screen");


buttonOptionOne.onclick = function() {
  optionOneScreen.style.display = "block";
  storyOpening.style.display = "none";
};

buttonOptionTwo.onclick = function() {
  optionTwoScreen.style.display = "block";
  storyOpening.style.display = "none";
};


buttonOptionThree.onclick = function() {
  optionThreeScreen.style.display = "block";
  optionOneScreen.style.display = "none";
};

buttonOptionFour.onclick = function() {
  optionFourScreen.style.display = "block";
  optionOneScreen.style.display = "none";
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
