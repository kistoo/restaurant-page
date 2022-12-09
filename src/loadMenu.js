import {loadHeader} from './loadHeader.js';
//main dishes
import ramen from './images/menu/ramen.jpg';
import omurice from './images/menu/omurice.jpg';
import friedRice from './images/menu/fried-rice.jpg';
import hijikataSpecial from './images/menu/hijikata-special.jpg';
import steak from './images/menu/steak.jpeg';
import mapoTofu from './images/menu/mapo-tofu.png';
import sandwich from './images/menu/sandwich.jpeg';
//desserts
import chocolateParfait from './images/menu/chocolate-parfait.jpg';
import donuts from './images/menu/donuts.jpeg';
//drinks
import cinderella from './images/menu/cinderella.jpeg';
import tempestBlue from './images/menu/tempest-blue.jpeg';
import tea from './images/menu/tea.jpg';
import cola from './images/menu/cola.jpg';



function loadMenu() {
    const container = document.getElementById('container');
    loadHeader();

    //content
    const content = document.createElement('div');
    content.id = "content";
    //main dishes
    const mainDishes = document.createElement('h1');
    mainDishes.textContent = "Main dishes";
    content.appendChild(mainDishes);

    const op1 = document.createElement('div'); //op stands for option
    op1.className = "option";
    const opimg1 = new Image(); //opimg stands for option image
    opimg1.src = ramen;
    op1.appendChild(opimg1);
    const t1 = document.createElement('div'); //t stands for text
    const n1 = document.createElement('h2'); //n stands for name
    n1.textContent = 'Ramen';
    t1.appendChild(n1);
    const d1 = document.createElement('p'); //d stands for description
    d1.textContent = 'Have you ever wanted to eat the same ramen as Naruto? This ramen is made from Teuchi, the owner of Ichiraku Ramen.';
    t1.appendChild(d1);
    const a1 = document.createElement('p'); //a stands for anime
    a1.textContent = 'Anime: Naruto.';
    t1.appendChild(a1);
    op1.appendChild(t1);
    content.appendChild(op1);

    const op2 = document.createElement('div');
    op2.className = "option";
    const opimg2 = new Image(); //image
    opimg2.src = omurice;
    op2.appendChild(opimg2);
    const t2 = document.createElement('div');
    const n2 = document.createElement('h2'); //name
    n2.textContent = 'Omurice';
    t2.appendChild(n2);
    const d2 = document.createElement('p'); //description
    d2.textContent = 'The classic omurice from every anime, but Tohru will cast a cute spell on it to make it more delicious. "I call upon the Shadow King that rules over this world, make this the greatest it can be with these dark arts! I beseech thee for ... Stop!!! ';
    t2.appendChild(d2);
    const a2 = document.createElement('p'); //anime
    a2.textContent = 'Anime: Kobayashi-san Chi no Maid Dragon.';
    t2.appendChild(a2);
    op2.appendChild(t2);
    content.appendChild(op2);

    const op3 = document.createElement('div');
    op3.className = "option";
    const opimg3 = new Image(); //image
    opimg3.src = friedRice;
    op3.appendChild(opimg3);
    const t3 = document.createElement('div');
    const n3 = document.createElement('h2'); //name
    n3.textContent = 'Fried rice';
    t3.appendChild(n3);
    const d3 = document.createElement('p'); //description
    d3.textContent = 'Yukimura Souma special and first dish at Totsuki Culinary Academy. It has a unique flavor that you would never forget.';
    t3.appendChild(d3);
    const a3 = document.createElement('p'); //anime
    a3.textContent = 'Anime: Shokugeki no Sōma.';
    t3.appendChild(a3);
    op3.appendChild(t3);
    content.appendChild(op3);

    const op4 = document.createElement('div');
    op4.className = "option";
    const opimg4 = new Image(); //image
    opimg4.src = hijikataSpecial;
    op4.appendChild(opimg4);
    const t4 = document.createElement('div');
    const n4 = document.createElement('h2'); //name
    n4.textContent = "Hijikata's special";
    t4.appendChild(n4);
    const d4 = document.createElement('p'); //description
    d4.textContent = 'Just a bowl of 50% rice, 50% mayonnaise. Hijikata loves mayonnaise so much he dippes his food on mayonnaise. Maybe you are like him and enjoy it.';
    t4.appendChild(d4);
    const a4 = document.createElement('p'); //anime
    a4.textContent = 'Anime: Gintama';
    t4.appendChild(a4);
    op4.appendChild(t4);
    content.appendChild(op4);

    const op5 = document.createElement('div');
    op5.className = "option";
    const opimg5 = new Image(); //image
    opimg5.src = steak;
    op5.appendChild(opimg5);
    const t5 = document.createElement('div');
    const n5 = document.createElement('h2'); //name
    n5.textContent = 'Jashin-chan tail Steak';
    t5.appendChild(n5);
    const d5 = document.createElement('p'); //description
    d5.textContent = 'Yes, it is made of Jashin-chan tail. It is more delicious than other meats. About her? Oh, do not worry, she can regenerate it.';
    t5.appendChild(d5);
    const a5 = document.createElement('p'); //anime
    a5.textContent = 'Anime: Jashin-chan Dropkick';
    t5.appendChild(a5);
    op5.appendChild(t5);
    content.appendChild(op5);

    const op6 = document.createElement('div');
    op6.className = "option";
    const opimg6 = new Image(); //image
    opimg6.src = mapoTofu;
    op6.appendChild(opimg6);
    const t6 = document.createElement('div');
    const n6 = document.createElement('h2'); //name
    n6.textContent = 'Mapo tofu';
    t6.appendChild(n6);
    const d6 = document.createElement('p'); //description
    d6.textContent = 'The super spicy mapo tofu that no one dares to order at the high school canteen. It is the favourite for Kanade though. Will you risk and take it?';
    t6.appendChild(d6);
    const a6 = document.createElement('p'); //anime
    a6.textContent = 'Anime: Angel beats';
    t6.appendChild(a6);
    op6.appendChild(t6);
    content.appendChild(op6);
    
    const op7 = document.createElement('div');
    op7.className = "option";
    const opimg7 = new Image(); //image
    opimg7.src = sandwich;
    op7.appendChild(opimg7);
    const t7 = document.createElement('div');
    const n7 = document.createElement('h2'); //name
    n7.textContent = 'Sandwich';
    t7.appendChild(n7);
    const d7 = document.createElement('p'); //description
    d7.textContent = "Asuna's handmade sanwich. She maxed out her cooking skills so take for sure it will be delicious. It has teriyaki and soy sauce";
    t7.appendChild(d7);
    const a7 = document.createElement('p'); //anime
    a7.textContent = 'Anime: Sword art online';
    t7.appendChild(a7);
    op7.appendChild(t7);
    content.appendChild(op7);

    //desserts
    const desserts = document.createElement('h1');
    desserts.textContent = "Desserts";
    content.appendChild(desserts);

    const op8 = document.createElement('div');
    op8.className = "option";
    const opimg8 = new Image(); //image
    opimg8.src = chocolateParfait;
    op8.appendChild(opimg8);
    const t8 = document.createElement('div');
    const n8 = document.createElement('h2'); //name
    n8.textContent = "Takina's special hot chocolate parfait";
    t8.appendChild(n8);
    const d8 = document.createElement('p'); //description
    d8.textContent = "Perfect if you are cold. It's really delicious, despite how it looks. Please don't tell her";
    t8.appendChild(d8);
    const a8 = document.createElement('p'); //anime
    a8.textContent = 'Anime: Lycoris recoil';
    t8.appendChild(a8);
    op8.appendChild(t8);
    content.appendChild(op8);

    const op9 = document.createElement('div');
    op9.className = "option";
    const opimg9 = new Image(); //image
    opimg9.src = donuts;
    op9.appendChild(opimg9);
    const t9 = document.createElement('div');
    const n9 = document.createElement('h2'); //name
    n9.textContent = "Donuts";
    t9.appendChild(n9);
    const d9 = document.createElement('p'); //description
    d9.textContent = "Who doesn't love donuts. This super enchanting donuts were made by Stephanie Dola.";
    t9.appendChild(d9);
    const a9 = document.createElement('p'); //anime
    a9.textContent = 'Anime: No game No life';
    t9.appendChild(a9);
    op9.appendChild(t9);
    content.appendChild(op9);

    //drinks
    const drinks = document.createElement('h1');
    drinks.textContent = "Drinks";
    content.appendChild(drinks);

    const op10 = document.createElement('div');
    op10.className = "option";
    const opimg10 = new Image(); //image
    opimg10.src = cinderella;
    op10.appendChild(opimg10);
    const t10 = document.createElement('div');
    const n10 = document.createElement('h2'); //name
    n10.textContent = "Cinderella";
    t10.appendChild(n10);
    const d10 = document.createElement('p'); //description
    d10.textContent = "Orange, lemon and pineapple juice. Doesn't include alcohol.";
    t10.appendChild(d10);
    const a10 = document.createElement('p'); //anime
    a10.textContent = 'Anime: Osake wa fuufu ni natte kara';
    t10.appendChild(a10);
    op10.appendChild(t10);
    content.appendChild(op10);

    const op11 = document.createElement('div');
    op11.className = "option";
    const opimg11 = new Image(); //image
    opimg11.src = tempestBlue;
    op11.appendChild(opimg11);
    const t11 = document.createElement('div');
    const n11 = document.createElement('h2'); //name
    n11.textContent = "Tempest Blue";
    t11.appendChild(n11);
    const d11 = document.createElement('p'); //description
    d11.textContent = "A mocktail created by Treyni at her bar. It has mint what makes it cool.";
    t11.appendChild(d11);
    const a11 = document.createElement('p'); //anime
    a11.textContent = 'Anime: Tensei Shitara Slime Datta Ken';
    t11.appendChild(a11);
    op11.appendChild(t11);
    content.appendChild(op11);

    const op12 = document.createElement('div');
    op12.className = "option";
    const opimg12 = new Image(); //image
    opimg12.src = tea;
    op12.appendChild(opimg12);
    const t12 = document.createElement('div');
    const n12 = document.createElement('h2'); //name
    n12.textContent = "Tea";
    t12.appendChild(n12);
    const d12 = document.createElement('p'); //description
    d12.textContent = "Echidna's tea. She is the witch of greed and knows about almost everything, but maybe you wouldn't like to ask her what is her tea made of...";
    t12.appendChild(d12);
    const a12 = document.createElement('p'); //anime
    a12.textContent = 'Anime: Re:Zero kara Hajimeru Isekai Seikatsu';
    t12.appendChild(a12);
    op12.appendChild(t12);
    content.appendChild(op12);

    const op13 = document.createElement('div');
    op13.className = "option";
    const opimg13 = new Image(); //image
    opimg13.src = cola;
    op13.appendChild(opimg13);
    const t13 = document.createElement('div');
    const n13 = document.createElement('h2'); //name
    n13.textContent = "Cola";
    t13.appendChild(n13);
    const d13 = document.createElement('p'); //description
    d13.textContent = "Maybe you just want a cola, Fujiwara can give you one.";
    t13.appendChild(d13);
    const a13 = document.createElement('p'); //anime
    a13.textContent = "Anime: Kaguya-sama wa Kokurasetai: Tensai-tachi no Ren'ai Zunōsen";
    t13.appendChild(a13);
    op13.appendChild(t13);
    content.appendChild(op13);

    
    container.appendChild(content);

}

export {loadMenu}
