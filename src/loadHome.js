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
    description.textContent = "We are a restaurant made for anime fans. In our menu you will find dishes from your favourite animes, all of them with the best quality. We offer an unique experience with a vibrant atmosphere and servicial staff. This page and its contents are all fictional.";
    content.appendChild(description);
    const openingHours = document.createElement('h1');
    openingHours.textContent = "Opening hours";
    content.appendChild(openingHours);
    const mondayToFriday = document.createElement('p');
    mondayToFriday.textContent = "Monday-Friday : 12:00 ~ 20:00";
    content.appendChild(mondayToFriday);
    const saturday = document.createElement('p');
    saturday.textContent = "Saturday : 11:00 ~ 22:00";
    content.appendChild(saturday);
    const sunday = document.createElement('p');
    sunday.textContent = "Sunday : 13:00 ~ 19:00";
    content.appendChild(sunday);
    container.appendChild(content);

}

export {loadHome}
