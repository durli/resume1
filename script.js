"use strict";
var skillsDiv = document.querySelector("#skills");
var skillBars = document.querySelectorAll(".skill-bar")

function skillAnimation() {
    for (let i = 0; i < skillBars.length; i++) {
        let skillLevel = skillBars[i].getAttribute("data-skill-level");
        let currWidth = 0;
        let skillInterval = setInterval(function () {
            if (currWidth >= skillLevel) {
                clearInterval(skillInterval);
                return;
            } else {
                currWidth += 1;
                skillBars[i].style.width = currWidth + "%";
            }
        }, 10);
    }
}

function sectionVisible() {
    var coordinates = skillsDiv.getBoundingClientRect();
    var verticalDist = coordinates.top;
    // console.log("verticalDist =", verticalDist);
    if (verticalDist <= 200) {
        skillAnimation();
        clearInterval(id);
        return;
    }
}

var id = setInterval(sectionVisible, 50);