let menuBtn = document.querySelector("#menu-btn");

let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

if(menuBtn) {
    menuBtn.addEventListener("click", function(e) {
        if(menu) {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            } else {
                menu.classList.add('active');
            }
        }
    });
}

document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener("click", function(e) {
        menu.classList.remove('active');
    })
})

document.body.addEventListener("click", function(e) {
    if(!e.path.includes(nav)) {
        menu.classList.remove('active');
    }
});

