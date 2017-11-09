console.log("Hello");
var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var generateButton = document.getElementById("generateBoxes");
var inputField = document.getElementById("myCredits");
var resultBox = document.getElementById("result");
var numberOfBoxes = 0;
var sumeOfCredits = 0;



function init(){
    generateButton.addEventListener("click",generate);
    calculateButton.addEventListener("click",calculateCredits);
}

init();

function createInputBox(elementID) {
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementID;

    var labelElem = document.createElement("label");
    var text = document.createTextNode("Credit");
    labelElem.appendChild(text);
    labelElem.appendChild(inputElem);

    inputContainerElement.appendChild(labelElem);
}

function createBoxes(numberOfBoxes) {
    for (var i = 0; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {

    var numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes(numberOfBoxes);
}


function calculateCredits() {
    for (var i=1; i<=numberOfBoxes; i++)
        var inputElemValue  = document.getElementById("input" + i).value;
    console.log(inputElemValue);
    sumeOfCredits +- parseInt(inputElemValue);
}

console.log(sumeOfCredits);

generateButton.addEventListener("click",createBoxes(numberOfBoxes));

calculateButton.addEventListener("click", calculateCredits);

