// Theme changing part

let btn = document.querySelector(".theme-toggle");
let theme = document.getElementById("theme-source");
let btn_icon = document.getElementById("theme-toggle")

btn.addEventListener("click", function () {
if (theme.getAttribute("href") == "./css/style.css") {
        theme.href = "./css/dark.css";
        btn_icon.src = "./images/day.svg";
    }
    else {
        theme.href = "./css/style.css";
        btn_icon.src = "./images/night.svg";
    }
});

// Dropdown menu for small screens part
let dropdown = document.querySelector(".dropdown");
let links_nav = document.querySelector("nav ul");
let links_1 = true;
dropdown.addEventListener("click", function() {
    if (!links_1)
    {
        links_1 = true;
        links_nav.style.display = "none";
    }
    else {
        links_1 = false;
        links_nav.style.display = "flex";
    }
});

links_nav.addEventListener("click", function () {
    if (window.innerWidth <= 855 && !links_1) {
        links_1 = true;
        links_nav.style.display = "none";
    }
});
// Social Media Menu for smaller screens part
let link_btn = document.querySelector(".links-list");
let links = document.querySelector(".dropdown-links");
let links_open = false;

link_btn.addEventListener("click", function() {
    if (!links_open)
    {
        links_open = true;
        links.style.display = "flex";
    }
    else {
        links_open = false;
        links.style.display = "none";
    }
});

let close_btn = document.getElementById("close");
close_btn.addEventListener("click", function closemenu() {
    links.style.display = "none";
    links_open = false;
});

document.querySelector("main").addEventListener("click", function closemenu() {
    links.style.display = "none";
    links_open = false;
    if (window.innerWidth <= 855 && !links_1) {
        links_nav.style.display = "none";
        links_1 = true;
    }
});
// Onscroll nav-bar link color changes

let sections = document.querySelectorAll(".sections");
let navli = document.querySelectorAll("nav ul a li");
let main = document.querySelector("main");

document.querySelector("main").onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        if(main.scrollTop + 100 >= section.offsetTop) {
            current = section.id;
        }
    });

    navli.forEach((li) => {
        li.classList.remove("active");
        if (li.textContent.trim() == current) {
            li.classList.add("active");
            }

    });
};

// Onscroll nav-bar link color changes for smaller screens. 

main.ontouchmove = () => {
    if(window.innerWidth <= 855) {
        let current = "";
        sections.forEach((section) => {
            if(window.pageYOffset + 100 >= section.offsetTop) {
                current = section.id;
            }
        });
        navli.forEach((li) => {
            li.classList.remove("mobile-active");
            if (li.textContent.trim() == current) {
                li.classList.add("mobile-active");
                }
        });
    }
};

navli.forEach(function(li) {
    console.log("check");
    li.addEventListener("click", function () {
            if(window.innerWidth <= 855) {
            navli.forEach((l) => {
                if(li != l)
                    l.classList.remove("mobile-active");
                    li.classList.add("mobile-active");
                });
            }
        });
});