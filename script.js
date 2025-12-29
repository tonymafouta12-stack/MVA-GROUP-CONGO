const OpenNav = document.querySelector(".icon1")
const FermeNav = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left;


OpenNav.addEventListener("click", () =>{
    if(PositionMenu <0){
        Menu.classList.add("monter")
    }
})

fermerNav.addEventListener("click", () =>{
    if(PositionMenu <0){
        Menu.classList.remove("monter")
    }

})
