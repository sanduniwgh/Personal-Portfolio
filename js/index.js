var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const menuElm = document.querySelector('#menu');
const navUlElm = document.querySelector('nav ul');
const iconcrossElm =document.querySelector('#cross');



function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Activate the clicked tab
  document.querySelector(`.tab-links[data-tab="${tabname}"]`).classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Add a click event listener to each tab link
for (let tablink of tablinks) {
  tablink.addEventListener("click", function () {
    let tabname = this.getAttribute("data-tab");
    opentab(tabname);
  });
}

menuElm.addEventListener('click', e => {
  navUlElm.classList.toggle("show-list");
  navUlElm.classList.toggle("show-cross");
  iconcrossElm.display

  
});


