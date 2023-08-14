import data from "./data.json" assert { type: "json" };

const reactionCategory = data[0].category;
const reactionIcon = data[0].icon;
const reactionScore = data[0].score;

document.querySelector(".h4-summary").innerHTML = reactionCategory;
document.querySelector(".reaction-img").setAttribute("src", reactionIcon);
document.querySelector(".reaction-score").innerHTML = reactionScore;

const memoryCategory = data[1].category;
const memoryIcon = data[1].icon;
const memoryScore = data[1].score;

document.querySelector(".h4-memory").innerHTML = memoryCategory;
document.querySelector(".memory-img").setAttribute("src", memoryIcon);
document.querySelector(".memory-score").innerHTML = memoryScore;

const verbalCategory = data[2].category;
const verbalIcon = data[2].icon;
const verbalScore = data[2].score;

document.querySelector(".h4-verbal").innerHTML = verbalCategory;
document.querySelector(".verbal-img").setAttribute("src", verbalIcon);
document.querySelector(".verbal-score").innerHTML = verbalScore;

const visualCategory = data[3].category;
const visualIcon = data[3].icon;
const visualScore = data[3].score;

document.querySelector(".h4-visual").innerHTML = visualCategory;
document.querySelector(".visual-img").setAttribute("src", visualIcon);
document.querySelector(".visual-score").innerHTML = visualScore;
