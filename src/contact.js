function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const tel = document.createElement('p');
    const ubi = document.createElement('p');
    const moreInfo = document.createElement('div');

    tel.textContent = 'Phone Number: +54 011-999-9999';
    ubi.textContent = 'We are in BLA BLA BLA';
    moreInfo.textContent = '>More info goes here<';

    contact.appendChild(tel);
    contact.appendChild(ubi);
    contact.appendChild(moreInfo);

    return contact;
};

function loadContact() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createContact());
};

export default loadContact;