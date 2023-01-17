function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'Churros', 'Churros filled with dulce de leche and covered with chocolate'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Corn', 'Corn covered with butter with a pinch of salt'
        )
    );

    return menu;
}

function createMenuItem(name, desc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const image = document.createElement('img');

    image.src = `images/${name.toLowerCase()}.jpg`;
    image.alt = "Churros";

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const description = document.createElement('p');
    description.textContent = desc;

    menuItem.appendChild(image);
    menuItem.appendChild(itemName);
    menuItem.appendChild(description);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;