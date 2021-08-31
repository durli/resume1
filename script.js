"use strict";

function fillBar(skillBar) {
    let skillLevel = skillBar.getAttribute("data-skill-level");
    let currWidth = 0;
    let skillInterval = setInterval(function () {
        if (currWidth >= skillLevel) {
            clearInterval(skillInterval);
            return;
        } else {
            currWidth += 1;
            skillBar.style.width = currWidth + "%";
        }
    }, 12); //Here 12ms is the time taken to fill 1% width of the skill-bar.
}

var skillContainers = document.getElementsByClassName('skill-container');
var len = skillContainers.length;
var isFilled = new Array(len);  /*For keeping record whether skill bar has been filled or not*/

for(let i = 0;i<skillContainers.length;i++){
    isFilled[i] = false;
    window.addEventListener('scroll', function(){
        skillVisible(skillContainers[i], i); 
    });
}

/*Below function will trigger the animation when any skill-container becomes visible*/
function skillVisible(skillsDiv, idx) {
    var coordinates = skillsDiv.getBoundingClientRect();
    var verticalDist = coordinates.top;

    if (isFilled[idx] == false && verticalDist <= window.innerHeight) {
        console.log(skillBar);
        var skillBar = skillsDiv.querySelector(".skill-bar");
        fillBar(skillBar);
        isFilled[idx] = true;   /*Marking the skill bar as filled*/
        return;
    }
}
