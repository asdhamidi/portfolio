let btn = document.querySelector(".theme-toggle");
let theme = document.getElementById("theme-source");
let btn_text = document.querySelector(".theme-toggle p");
let btn_icon = document.getElementById("theme-toggle")

btn.addEventListener("click", function () {
if (theme.getAttribute("href") == "style.css") {
        theme.href = "dark.css";
        btn_icon.src = "./images/day.svg";
        btn_text.textContent = "Light"
    }
    else {
        theme.href = "style.css";
        btn_icon.src = "./images/night.svg";
        btn_text.textContent = "Dark"
    }
})

let dropdown = document.querySelector(".dropdown");
let links = document.getElementById("link-menu");
let links_open = false;

dropdown.addEventListener("click", function() {
    console.log("Check");
    if (!links_open)
    {
        links_open = true;
        links.classList.add("links-reveal");
        links.classList.remove("links");
    }
    else {
        links_open = false;
        links.classList.add("links");
        links.classList.remove("links-reveal");
    }
})