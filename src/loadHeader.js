import menhera from './images/menhera-chan.png';
import {loadHome} from './loadHome.js';
import {loadMenu} from './loadMenu.js';
import {loadStaff} from './loadStaff.js';

function loadHeader() {
    const container = document.getElementById('container');

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

    //content
    const content = document.createElement('div');
    content.id = "content";
    container.appendChild(content);

    //event listeners
    home.onclick = () => loadHome();
    menu.onclick = () => loadMenu();
    staff.onclick = () => loadStaff();
}

export {loadHeader}
