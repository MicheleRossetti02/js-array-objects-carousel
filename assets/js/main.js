// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

img_active = 0;


const slides = document.querySelector('.slider')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const description = document.querySelector('.info')


// images.forEach((image, i) => {
//     const slide= `
//     <div class="slide ${i === img_active ? 'active' : ''}">
//       <img class="image" src="./assets/${images.image}" alt="${images.title}">
//       <div class="slide-text">
//         <h3>${images.title}</h3>
//         <p>${images.text}</p>
//       </div>
//     </div>
//     `;
    
// slides.insertAdjacentElement('beforeend', image)
// });

const url_img = images.map((element) => {
    return element.image
})

const title_img = images.map((element) => {
    return element.title
})

const text_img = images.map((element) => {
    return element.text
})
console.log(url_img);


for (let i = 0; i < url_img.length; i++) {
    const element = url_img[i];
    //console.log(element);

    const img_markup =  `<img class=" ${i === img_active ? "active" : ""}" src="./assets/${element}" alt="">`;

    slides.insertAdjacentHTML("beforeend",img_markup) 
    
    // let imgActive = 0;
    // url_img.forEach((element,i=0) => {
    //     element = url_img[i];
    //     imgMarkup = `<img class="${i === imgActive ? "active" : ""}" src="./assets/img/${element}" alt="">`;
    //     slideEl.insertAdjacentHTML("afterbegin",imgMarkup); 
    // })
    
    
    console.log(url_img);
}

for (let i = 0; i < title_img.length; i++) {
    const element = title_img[i];
    console.log(element);
    const titleMarkup = `<h3 class="text text-center  ${i === img_active ? "active" : ""}">${element}</h3>`;
    description.insertAdjacentHTML("beforeend",titleMarkup);
}

for (let i = 0; i < text_img.length; i++) {
    const element = text_img[i];
    console.log(element);
    const textMarkup = `<span class="text text-center  ${i === img_active ? "active" : ""}">${element}</span>`;
    description.insertAdjacentHTML("beforeend",textMarkup);
}

next.addEventListener("click", function () {
    //img
    const slide = document.querySelectorAll(".slider > img");

    const currentImg = slide[img_active];

    //text
    const paragrafi = document.querySelectorAll(".info > span");
    const currentPar = paragrafi[img_active];
    
    //title
    const titles = document.querySelectorAll(".info > h3");
    const currentTitle = titles[img_active];

    
    if (img_active < 4) {
        currentTitle.classList.remove("active")
        currentPar.classList.remove("active");
        currentImg.classList.remove("active");
        img_active++
        
    }else{
        currentTitle.classList.remove("active")
        currentPar.classList.remove("active");
        currentImg.classList.remove("active");
        img_active = 0
    }

    
    const nextImg = slide[img_active];
    nextImg.classList.add("active");
    
    
    const nextPar = paragrafi[img_active];
    nextPar.classList.add("active");

    const nextTitle = titles[img_active];
    nextTitle.classList.add("active");
   
})
prev.addEventListener("click", function () {

    const slide = document.querySelectorAll(".slider > img");

    const currentImg = slide[img_active];

    const paragrafi = document.querySelectorAll(".info > span");
    const currentPar = paragrafi[img_active];

    const titles = document.querySelectorAll(".info > h3");
    const currentTitle = titles[img_active];

    
    if (img_active > 0) {
        currentTitle.classList.remove("active")
        currentPar.classList.remove("active");
        currentImg.classList.remove("active");
        img_active--
        
    }else{
        currentTitle.classList.remove("active")
        currentPar.classList.remove("active");
        currentImg.classList.remove("active");
        img_active = slide.length -1
        
    }

    //img
    const nextImg = slide[img_active];
    nextImg.classList.add("active");
    
    //text
    const nextPar = paragrafi[img_active];
    nextPar.classList.add("active");

    //title
    const nextTitle = titles[img_active];
    nextTitle.classList.add("active");
   
})