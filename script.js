let btn = document.getElementById("theme-toggle")
let theme = document.getElementById("theme-source")

btn.addEventListener("click", function () {
if (theme.getAttribute("href") == "style.css") {
        theme.href = "dark.css";
        btn.src = "./images/day.svg";
    }
    else {
        theme.href = "style.css";
        btn.src = "./images/night.svg";
    }
})