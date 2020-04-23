let toggleNavStatus = false;

let toggleNav = () => {
    let getSidebar = document.querySelector(".nav-sidebar");

    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        getSidebar.style.transform = "translate(0,0)";
        getSidebar.style.width = "100vw";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.transform = "translate(100%,0)";
        toggleNavStatus = false;
    }


}