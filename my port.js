var tablinks = document.getElementsByClassName(".tab-links");
var tabcontents = document.getElementsByClassName(".tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classlist.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classlist.remove("active-tab");
    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
let menu = document.querySelector("#menu");
let navbar = document.querySelector('#navbar')
navbar.classList.toggle('active');

