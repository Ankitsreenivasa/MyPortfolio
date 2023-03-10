let mobMenu = document.querySelector("#mob-nav");
let cancel = document.querySelector(".cross");
let hamB = document.querySelector("#hamburger");
let navLinks = document.querySelectorAll(".nav-links");
let topB = document.querySelector("#topBtn");
const nlinks=document.querySelectorAll(".nav-links")


console.log(navLinks);
console.log(mobMenu);
console.log(cancel);
console.log(hamB);
console.log(topB);
console.log(nlinks);

nlinks.forEach((item) => {
    item.addEventListener('click', () => {
        let el = document.querySelector(item.getAttribute("href")) 
        el.scrollIntoView(document.querySelector(item.getAttribute("href")));
    })
})

function showMobileMenu(e) {
  mobMenu.style.right = "0";
}
function hideMobileMenu(e) {
  mobMenu.style.right = "-50%";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topB.style.display = "block";
  } else {
    topB.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
}

topB.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


hamB.addEventListener("click", showMobileMenu);
cancel.addEventListener("click", hideMobileMenu);
