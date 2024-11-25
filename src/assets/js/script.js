// Add active class to the current button (highlight it)
    //   var header = document.getElementById("myDIV");
    //   var btns = header.getElementsByClassName("head-hov");
    //   for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //     });
    //   }
      
      
// const navLinkEl = document.querySelectorAll('.head-hov');
// const windowPathname = window.location.pathname;

// navLinkEl.forEach(navLinkEl => {
//     if (navLinkEl.href.includes(windowPathname)){
//         navLinkEl.classList.add('active');
//     }
// });

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.head-hov').forEach(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
//     else {
//         link.classList.remove('active');
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".head-hov");
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

