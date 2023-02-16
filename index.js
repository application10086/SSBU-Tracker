let dannypoints = 0
let addElBtn = document.getElementById("dannyscorebtn")
let addEl = document.getElementById("dannyscore")

function addDannyScore() {
    dannypoints += 1
    addEl.textContent = dannypoints
    
}

let alexpoints = 0
let addElBtnAlex = document.getElementById("alexscorebtn")
let addElAlex = document.getElementById("alexscore")

function addAlexScore() {
    alexpoints += 1
    addElAlex.textContent = alexpoints   
}

function reset() {
    addEl.textContent = 0
    addElAlex.textContent = 0
    dannypoints = 0
    alexpoints = 0
}