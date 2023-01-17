//Header creation
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    //Nav creation
    function createNav() {
        const nav = document.createElement('nav');

        const homeBtn = document.createElement('button');
        const menuBtn = document.createElement('button');
        const contactBtn = document.createElement('button');

        homeBtn.classList.add('nav-btn', 'home-btn');
        menuBtn.classList.add('nav-btn', 'menu-btn');
        contactBtn.classList.add('nav-btn', 'contact-btn');

        homeBtn.textContent = 'Home';
        menuBtn.textContent = 'Menu';
        contactBtn.textContent = 'Contact';

        nav.appendChild(homeBtn);
        nav.appendChild(menuBtn);
        nav.appendChild(contactBtn);

        return nav;
    };

    const restName = document.createElement('h1');
    restName.textContent = 'Beachood';

    header.appendChild(restName);
    header.appendChild(createNav());

    return header;
}

export default createHeader;