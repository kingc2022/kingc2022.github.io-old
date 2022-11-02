let progress = 5;
let progress_bar = document.getElementById("progress-bar");
let min = getURLVar("min") || 1;
let max = getURLVar("max") || 6;

function random(min_rd, max_rd) {
    return Math.floor(Math.random() * (max_rd - min_rd)) + min_rd;
}

function getURLVar(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0; i<vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable){
            return pair[1];
        }
    }
    return false;
}

function init() {
    progress_bar.innerText = "5%";
}

function add() {
    let timer = setInterval(function(){
        progress = progress + random(min, max);
        progress_bar.innerText = progress + "%";
        progress_bar.style.width = progress + "%";
        if (progress >= 100) {
            progress_bar.innerText = "100%";
            progress_bar.style.width = "100%";
            clearInterval();
            if (getURLVar("url") !== false) {
                window.location.href = decodeURI(getURLVar("url"));
            } else {
                clearInterval();
            }
        }
    }, 600);
}

init();
add();