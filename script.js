let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".burger-menu");
    let getSidebarUl = document.querySelector(".burger-menu ul");
    let getSidebarLinks = document.querySelectorAll(".burger-menu a");
    let getBurgerBars = document.querySelector(".burger-bars");

    if (toggleNavStatus === false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "280px";
        getBurgerBars.style.backgroundImage ="url('close.png')";

        let arrayLenght = getSidebarLinks.length;

        for (let i = 0; i < arrayLenght; i++){
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    }
    else if(toggleNavStatus === true){
        
        getSidebar.style.width = "0px";
        getBurgerBars.style.backgroundImage ="url('burger.png')";

        let arrayLenght = getSidebarLinks.length;

        for (let i = 0; i < arrayLenght; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;

    }



}