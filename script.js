// Navbar scroll effect

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "black";
    }
    else{
        nav.style.background = "transparent";
    }

});


// Play Button

const playBtn = document.querySelector("button");

playBtn.addEventListener("click", () => {

    alert("Playing Stranger Things...");

});


// More Info Button

const infoBtn = document.querySelectorAll("button")[1];

infoBtn.addEventListener("click", () => {

    alert("Stranger Things - A mystery sci-fi series on Netflix");

});