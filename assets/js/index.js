function navbarActive () {
    var header = document.getElementById('header')
    if(window.scrollY > 20) {
        header.classList.add('navbar_active')
    }else {
        header.classList.remove('navbar_active')
    }
}


function loader () {

    setTimeout(function () {
        
    }, 5000);
    
    document.getElementById('loader').style.display = 'none'
}



function openMenu() {
    document.getElementById('menu_smooth').classList.remove('menu_inactive');
    document.getElementById('menu_smooth').classList.add('menu_active');
    document.getElementById("myDIV").style.overflow = "hidden";
    document.getElementsByClassName('navbar_active')[0].style.height = '100%'
    document.getElementsByClassName('navbar_active')[0].style.alignItems = 'start'

}

function closeMenu() {
    document.getElementById('menu_smooth').classList.add('menu_inactive');
    document.getElementById('menu_smooth').classList.remove('menu_active');
    document.getElementById("myDIV").style.overflow = "scroll";
    document.getElementsByClassName('navbar_active')[0].style.height = 'auto'
    document.getElementsByClassName('navbar_active')[0].style.alignItems = 'center'
}