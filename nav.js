

function openMenu(){
    var nav = document.getElementById("frank");
    nav.style.display = "block";
}

function closeMenu(){
    var nav = document.getElementById("frank");
    nav.style.display= "none";
}

document.getElementById("menubar").addEventListener("click", openMenu);
document.getElementById("close-menu").addEventListener("click", closeMenu);