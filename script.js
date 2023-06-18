'use strict'

document.getElementById("forvard").addEventListener("click", forvard);
document.getElementById("back").addEventListener("click", back);

let a = 0;
document.getElementById("back").style.display = "none";
document.getElementById("page-1").style.background = "#a9afb3";

function pageForvard(page = a) {
    document.getElementById("contact").style.transform = `translate(${page - 33.33333333}%, 0)`;
    a -= 33.3333333;
    if (a === 0) {
        document.getElementById("back").style.display = "none";
        document.getElementById("page-1").style.background = "#a9afb3";
    }
    else {
        document.getElementById("back").style.display = "block";
        document.getElementById("page-1").style.background = "#ffffff";
    }
    if (a < -33 && a > -66) {
        document.getElementById("page-2").style.background = "#a9afb3";
    }
    else {
        document.getElementById("page-2").style.background = "#ffffff";
    }
    if (a <= -66) {
        document.getElementById("forvard").style.display = "none";
        document.getElementById("page-3").style.background = "#a9afb3";
    }
    else {
        document.getElementById("forvard").style.display = "block";
        document.getElementById("page-3").style.background = "#ffffff";
    }
}

function pageBack(page = a) {
    document.getElementById("contact").style.transform = `translate(${page + 33.33333333}%, 0)`;
    a += 33.3333333;
    if (a === 0) {
        document.getElementById("back").style.display = "none";
        document.getElementById("page-1").style.background = "#a9afb3";
    }
    else {
        document.getElementById("back").style.display = "block";
        document.getElementById("page-1").style.background = "#ffffff";
    }
    if (a < -33 && a > -66) {
        document.getElementById("page-2").style.background = "#a9afb3";
    }
    else {
        document.getElementById("page-2").style.background = "#ffffff";
    }
    if (a <= -66) {
        document.getElementById("forvard").style.display = "none";
        document.getElementById("page-3").style.background = "#a9afb3";
    }
    else {
        document.getElementById("forvard").style.display = "block";
        document.getElementById("page-3").style.background = "#ffffff";
    }
}

function forvard() {
    pageForvard();
}

function back() {
    pageBack();
}
