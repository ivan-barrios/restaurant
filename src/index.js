import createHeader from "./header";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";


function createMain() {
    const main = document.createElement('main');
    main.setAttribute("id","main");
    return main;
};


//Tabbed browsing
function changeActualBtn(actBtn) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => {
        if (btn !== actBtn) {
            btn.classList.remove('.active');
        }
    });
    actBtn.classList.add('.active');
};

function loadEventListeners() {
    const homeBtn = document.querySelector('.home-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const contactBtn = document.querySelector('.contact-btn');

    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        changeActualBtn(homeBtn);
        loadHome();
    });
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        changeActualBtn(menuBtn);
        loadMenu();
    });
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        changeActualBtn(contactBtn);
        loadContact();
    });
};



//Initializes the webPage
(function() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadEventListeners();    
    loadHome();
})();