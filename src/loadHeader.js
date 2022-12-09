import menhera from './images/menhera-chan.png';

function loadHeader() {
    const container = document.getElementById('container');
    //empties the container
    container.innerHTML = "";

    //loads header
    const header = document.createElement('div');
    header.id = "header";
    const logo = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = "AniCafe";
    logo.appendChild(name);
    const logoImage = new Image();
    logo.appendChild(logoImage);
    header.appendChild(logo);
    logoImage.src = menhera;
    const nav = document.createElement('nav');
    const home = document.createElement('label');
    home.textContent = "Home";
    nav.appendChild(home);
    const menu = document.createElement('label');
    menu.textContent = "Menu";
    nav.appendChild(menu);
    const staff = document.createElement('label');
    staff.textContent = "Staff";
    nav.appendChild(staff);
    header.appendChild(nav);
    container.appendChild(header);
}

export {loadHeader}
