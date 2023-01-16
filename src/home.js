function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const beachImg = document.createElement('img');
    beachImg.src = 'images/restImg';
    beachImg.alt = 'Beach Restaurant Image';

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    para1.textContent = 'The best beach restaurant you will ever see';
    para2.textContent = 'Good food, good life';

    home.appendChild(para1);
    home.appendChild(para2);
    home.appendChild(beachImg);

    return home;
};

function loadHome() {
    const mainContent = document.getElementById('content');
    mainContent.appendChild(createHome());
}

export default loadHome;