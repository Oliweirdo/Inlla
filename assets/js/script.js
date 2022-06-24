const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

    var quadimages = document.querySelectorAll("#quad figure");
    for (i = 0; i < quadimages.length; i++) {
      quadimages[i].addEventListener('click', function () { this.classList.toggle("expanded"); quad.classList.toggle("full") });
    }