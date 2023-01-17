//Creates the Home content of the page
function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const beachImg = document.createElement('img');
    beachImg.src = 'images/restImg.jpg';
    beachImg.alt = 'Beach Restaurant Image';

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    para1.textContent = 'The best argentinian beach food you will ever taste';
    para2.textContent = 'Good food, good life';

    home.appendChild(para1);
    home.appendChild(para2);
    home.appendChild(beachImg);

    return home;
};

function loadHome() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createHome());
}

export default loadHome;