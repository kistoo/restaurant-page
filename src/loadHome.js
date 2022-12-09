function loadHome() {
    //content
    const content = document.getElementById('content');
    content.innerHTML = "";

    //about us section
    const section1 = document.createElement('div');
    section1.classList = "section";

    const sectionheader1 = document.createElement('div');
    sectionheader1.className = "section-header";
    const title = document.createElement('h1');
    title.textContent = "About us";
    sectionheader1.appendChild(title);
    section1.appendChild(sectionheader1);
    
    const restaurantImage = document.createElement('div');
    restaurantImage.id = "about-us";
    section1.appendChild(restaurantImage);
    const description = document.createElement('p');
    description.textContent = "We are a restaurant made for anime fans. In our menu you will find dishes from your favourite animes, all of them with the best quality. We offer an unique experience with a vibrant atmosphere and servicial staff. This page and its contents are all fictional.";
    section1.appendChild(description);
    content.appendChild(section1);

    //opening hours section
    const section2 = document.createElement('div');
    section2.classList = "section";

    const sectionheader2 = document.createElement('div');
    sectionheader2.className = "section-header";
    const openingHours = document.createElement('h1');
    openingHours.textContent = "Opening hours";
    sectionheader2.appendChild(openingHours);
    section2.appendChild(sectionheader2);


    const hours = document.createElement('div');
    hours.className = 'hours';
    const mondayToFriday = document.createElement('p');
    mondayToFriday.textContent = "Monday-Friday : 12:00 ~ 20:00";
    hours.appendChild(mondayToFriday);
    const saturday = document.createElement('p');
    saturday.textContent = "Saturday : 11:00 ~ 22:00";
    hours.appendChild(saturday);
    const sunday = document.createElement('p');
    sunday.textContent = "Sunday : 13:00 ~ 19:00";
    hours.appendChild(sunday);
    section2.appendChild(hours);
    content.appendChild(section2);
}

export {loadHome}
