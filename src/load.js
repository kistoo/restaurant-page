import restaurant from './images/restaurant.jpg';

function loadHome() {
    const container = document.getElementById('container');
    
    //header
    const header = document.createElement('div');
    header.id = "header";
    const logo = document.createElement('h1');
    logo.textContent = "AniCafe";
    header.appendChild(logo);
    const nav = document.createElement('nav');
    const home = document.createElement('div');
    home.textContent = "Home";
    nav.appendChild(home);
    const menu = document.createElement('div');
    menu.textContent = "Menu";
    nav.appendChild(menu);
    const contact = document.createElement('div');
    contact.textContent = "Contact";
    nav.appendChild(contact);
    header.appendChild(nav);
    container.appendChild(header);

    //content
    const content = document.createElement('div');
    content.id = "content";
    const title = document.createElement('h1');
    title.textContent = "About us";
    content.appendChild(title);
    const restaurantImage = new Image();
    restaurantImage.src = restaurant;
    content.appendChild(restaurantImage);
    const description = document.createElement('p');
    description.textContent = "We are a restaurant made for anime fans. In our menu you will find dishes from your favourite animes, all of them with the best quality. This page and its contents are all fictional. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    content.appendChild(description);
    container.appendChild(content);

}

export {loadHome}