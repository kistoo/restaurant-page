import sanji from './images/staff/sanji.png';
import tonio from './images/staff/tonio-trussardi.jpeg';
import kobayashi from './images/staff/kobayashi-rindou.jpeg';
import maou from './images/staff/maou.jpg';
import misaki from './images/staff/misaki-ayusawa.jpeg';
import maika from './images/staff/maika-sakuranomiya.jpeg';


function loadStaff() {
    //content
    const content = document.getElementById('content');
    content.innerHTML = "";

    //cheffs
    const section1 = document.createElement('div');
    section1.classList = "section";

    const sectionheader1 = document.createElement('div');
    sectionheader1.className = "section-header";
    const cheffs = document.createElement('h1');
    cheffs.textContent = "Cheffs";
    sectionheader1.appendChild(cheffs);
    section1.appendChild(sectionheader1);

    const s1 = document.createElement('div'); //s stands for staff
    s1.className = "option";
    const simg1 = new Image(); //spimg stands for staff image
    simg1.src = sanji;
    s1.appendChild(simg1);
    const t1 = document.createElement('div'); //t stands for text
    const n1 = document.createElement('h2'); //n stands for name
    n1.textContent = 'Sanji';
    t1.appendChild(n1);
    const b1 = document.createElement('p'); //b stands for biography
    b1.textContent = 'The best pirate chef you will ever meet. He has been cooking since he was a kid and his dream is to go to All Blue, the ocean where the fishes from all oceans are.';
    t1.appendChild(b1);
    const a1 = document.createElement('p'); //a stands for anime
    a1.textContent = 'Anime: One piece.';
    t1.appendChild(a1);
    s1.appendChild(t1);
    section1.appendChild(s1);

    const s2 = document.createElement('div'); 
    s2.className = "option";
    const simg2 = new Image(); //image
    simg2.src = tonio;
    s2.appendChild(simg2);
    const t2 = document.createElement('div');
    const n2 = document.createElement('h2'); //name
    n2.textContent = 'Tonio Trussardi';
    t2.appendChild(n2);
    const b2 = document.createElement('p'); //biography
    b2.textContent = 'Italian chef that loves to make his clients satisfied. He uses his stand power Pearl Jam to cure customers illneses and malaises through his food.';
    t2.appendChild(b2);
    const a2 = document.createElement('p'); //anime
    a2.textContent = "Anime: JoJo's Bizarre Adventure";
    t2.appendChild(a2);
    s2.appendChild(t2);
    section1.appendChild(s2);

    const s3 = document.createElement('div'); 
    s3.className = "option";
    const simg3 = new Image(); //image
    simg3.src = kobayashi;
    s3.appendChild(simg3);
    const t3 = document.createElement('div');
    const n3 = document.createElement('h2'); //name
    n3.textContent = 'Kobayashi Rindou';
    t3.appendChild(n3);
    const b3 = document.createElement('p'); //biography
    b3.textContent = 'Graduated from Totsuki Academy, she has travel over the world to cook even the weirdest ingredients. She has a lot of cooking knoledge so she can prepare you whatever comes to your mind.';
    t3.appendChild(b3);
    const a3 = document.createElement('p'); //anime
    a3.textContent = "Anime: Shokugeki no Sōma";
    t3.appendChild(a3);
    s3.appendChild(t3);
    section1.appendChild(s3);
    content.appendChild(section1);

    //personal service
    const section2 = document.createElement('div');
    section2.classList = "section";

    const sectionheader2 = document.createElement('div');
    sectionheader2.className = "section-header";
    const staff = document.createElement('h1');
    staff.textContent = "Staff";
    sectionheader2.appendChild(staff);
    section2.appendChild(sectionheader2);

    const s4 = document.createElement('div'); 
    s4.className = "option";
    const simg4 = new Image(); //image
    simg4.src = maou;
    s4.appendChild(simg4);
    const t4 = document.createElement('div');
    const n4 = document.createElement('h2'); //name
    n4.textContent = 'Maou';
    t4.appendChild(n4);
    const b4 = document.createElement('p'); //biography
    b4.textContent = "The best employee from MgRonald's. In the past he was the Devil King but don't worry, he is a very diligent and proactive employee.";
    t4.appendChild(b4);
    const a4 = document.createElement('p'); //anime
    a4.textContent = "Anime: Hataraku Maō-sama!";
    t4.appendChild(a4);
    s4.appendChild(t4);
    section2.appendChild(s4);

    const s5 = document.createElement('div'); 
    s5.className = "option";
    const simg5 = new Image(); //image
    simg5.src = misaki;
    s5.appendChild(simg5);
    const t5 = document.createElement('div');
    const n5 = document.createElement('h2'); //name
    n5.textContent = 'Misaki Ayuzawa';
    t5.appendChild(n5);
    const b5 = document.createElement('p'); //biography
    b5.textContent = "She has expericence working in a maid cafe. She is dainty, sweet and cute at work. Yes, only at work.";
    t5.appendChild(b5);
    const a5 = document.createElement('p'); //anime
    a5.textContent = "Anime: Kaichou wa Maid-Sama!";
    t5.appendChild(a5);
    s5.appendChild(t5);
    section2.appendChild(s5);

    const s6 = document.createElement('div'); 
    s6.className = "option";
    const simg6 = new Image(); //image
    simg6.src = maika;
    s6.appendChild(simg6);
    const t6 = document.createElement('div');
    const n6 = document.createElement('h2'); //name
    n6.textContent = 'Maika Sakuranomiya';
    t6.appendChild(n6);
    const b6 = document.createElement('p'); //biography
    b6.textContent = "She will receive you with a smile. Even if she looks sadistic and acts like that, she is just trying her best.";
    t6.appendChild(b6);
    const a6 = document.createElement('p'); //anime
    a6.textContent = "Anime: Blend S";
    t6.appendChild(a6);
    s6.appendChild(t6);
    section2.appendChild(s6);

    content.appendChild(section2);
}

export {loadStaff}