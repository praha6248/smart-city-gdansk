function add_event() {
    const panel =document.getElementById("dodaj_zdarzenie");
    panel.style.display="block";
}

const add =
document.getElementById("add");
add.addEventListener("click", add_event);

function add_event_hide() {
    const panel_hide =document.getElementById("dodaj_zdarzenie");
    panel_hide.style.display="none";
}

const add_hide =
document.getElementById("zamkniecie_add_event");
add_hide.addEventListener("click", add_event_hide);

function change_nav2(){
    const nav2_wydarzenie=document.getElementById("wydarzenie_nav2");
    const nav2_zdarzenie=document.getElementById("zdarzenie_nav2");
    const kloc=document.getElementById("blok");
    if (nav2_wydarzenie.className=="nav2") {
        nav2_wydarzenie.classList.add("nav2_active");
        nav2_wydarzenie.classList.remove("nav2");
        nav2_zdarzenie.classList.add("nav2");
        nav2_zdarzenie.classList.remove("nav2_active");
        kloc.style.display="none";
    }
    else{
        nav2_zdarzenie.classList.add("nav2_active");
        nav2_zdarzenie.classList.remove("nav2");
        nav2_wydarzenie.classList.add("nav2");
        nav2_wydarzenie.classList.remove("nav2_active");
        kloc.style.display="block";
    }
    
}

function filtr_rozwin(){
    const schowaj= document.getElementById("to_hide");
    const pokaz= document.getElementById("to_show_filtr");
    schowaj.style.display="none";
    pokaz.style.display="block";

}

const change_nav2_click_wydarzenie =
document.getElementById("wydarzenie_nav2");
change_nav2_click_wydarzenie.addEventListener("click", change_nav2);

const change_nav2_click_zdarzenie =
document.getElementById("zdarzenie_nav2");
change_nav2_click_zdarzenie.addEventListener("click", change_nav2);

const filtry =
document.getElementById("filtry");
filtry.addEventListener("click", filtr_rozwin);
