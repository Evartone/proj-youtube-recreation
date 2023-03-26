var menu_icon = document.getElementById("menu-icon")
var container = document.querySelector(".container")
var sidebar = document.getElementById("sidebar")


menu_icon.onclick = function(){

    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("bigger_container")
    
}