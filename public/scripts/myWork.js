
const projects = [
    //portfoilio
  {
    imgSrc: "img/web01.png",
    title: "Portfolio website",
    descriptionSK: "Moje osobné portfólio je dynamická webová stránka, vytvorená pomocou Tailwind CSS a oživená JS / jQuery pre interaktivitu. Na spracovanie formulárov som využil PHP. Stránka bola vyvinutá s dôrazom na prácu s gridom a flexboxom, pre plynulé usporiadanie obsahu a zabezpečenie responzívneho dizajnu.",
    descriptionEN: "My personal portfolio is a dynamic website, built with Tailwind CSS and animated with JS / jQuery for interactivity. I used PHP to process the forms. The site was developed with an emphasis on working with grid and flexbox, for a smooth arrangement of content and ensuring a responsive design.",
    linkURL: "#",
    codeURL: "https://github.com/Peter-Trebaticky/Portfolio",
    borderClass: "border-b-2",
  },
  //vals studio
  {
    imgSrc: "img/web02.png",
    title: "VALS studio",
    descriptionSK: "Fungujúca web stránka, ktorá slúži, ako prezentácia kozmetického štúdia. Jeden z prvých projektov, ktorý som robil podla predstav klienta.",
    descriptionEN: "A working website that serves as a presentation of a cosmetic studio. One of the first projects I did according to the client's ideas.",
    linkURL: "https://www.permanentny-makeup-piestany.sk/",
    codeURL: "https://github.com/Peter-Trebaticky/Vals-studio",
    borderClass: "border-b-2",
  },
  //notes app
  {
    imgSrc: "img/web05.png",
    title: "Notes app",
    descriptionSK: "Responzívna aplikácia na poznámky inšpirovaná Google keep vytvorená vo Vue 3, TypeScript, Vite, Pinia a štylovaná pomocou Tailwind CSS.",
    descriptionEN: "Responsive notes app inspired by Google keep built in Vue 3, TypeScript, Vite, Pinia and styled with Tailwind CSS.",
    linkURL: "https://peter-trebaticky.github.io/Note-app/",
    codeURL: "https://github.com/Peter-Trebaticky/Note-app",
    borderClass: "border-b-2",
  },
  //weather app
  {
    imgSrc: "img/web03.png",
    title: "Weather App",
    descriptionSK: "Responzívna aplikácia na počasie vytvorená pomocou VUE.js s API volaním.",
    descriptionEN: "Responsive weather app built using VUE.js with API calls.",
    linkURL: "https://pt-weatherapp.000webhostapp.com/",
    codeURL: "https://github.com/Peter-Trebaticky/Weather-app",
    borderClass: "border-b-2",
  },
  //Wheel of Fortune
  {
    imgSrc: "img/web07.png",
    title: "Wheel of Fortune",
    descriptionSK: "Prispôsobiteľné koleso šťastia v HTML, CSS a Vanilla JS s pridávaním a odstraňovaním cien.",
    descriptionEN: "Customizable wheel of fortune in HTML, CSS and Vanilla JS, with adding and removing prices.",
    linkURL: "https://peter-trebaticky.github.io/Wheel-of-Fortune/",
    codeURL: "https://github.com/Peter-Trebaticky/Wheel-of-Fortune",
    borderClass: "border-b-2",
  },
  //Shop template
  {
    imgSrc: "img/web08.png",
    title: "Shop template",
    descriptionSK: "Načítanie produktov z koncového bodu JSON v HTML, CSS a Vanilla JS, podľa stanovených pravidiel.",
    descriptionEN: "Fetching products from a JSON endpoint in HTML, CSS and Vanilla JS, according to established rules.",
    linkURL: "https://peter-trebaticky.github.io/Shop-template/",
    codeURL: "https://github.com/Peter-Trebaticky/Shop-template",
    borderClass: "border-b-2",
  },
  //Snake
  {
    imgSrc: "img/web06.png",
    title: "Snake",
    descriptionSK: "Retro Snake hra v HTML, CSS a Vanilla JS.",
    descriptionEN: "Retro Snake game in HTML, CSS a Vanilla JS.",
    linkURL: "https://peter-trebaticky.github.io/Snake/",
    codeURL: "https://github.com/Peter-Trebaticky/Snake",
    borderClass: "border-b-2 min-[1152px]:border-b-0",
  },
  //Trubka s.r.o.
  {
    imgSrc: "img/web04.png",
    title: "Trubka s.r.o.",
    descriptionSK: "Rozpracovaná web stránka, na prezentáciu inštalatérskej firmy. Vytváraná pomocou Tailwind CSS a JS / jQuery.",
    descriptionEN: "Developed website for the presentation of the plumbing company. Built with Tailwind CSS and JS / jQuery.",
    linkURL: "https://peter-trebaticky.github.io/Trubka/",
    codeURL: "https://github.com/Peter-Trebaticky/Trubka",
    borderClass: "border-b-0",
  },
];


const articleElement = document.querySelector("#myWork > article");

projects.forEach(project => {
    const projectElement = `
    <div class="mx-auto grid max-w-lg w-11/12 sm:min-w-1/2 ${project.borderClass} grid-rows-[auto_1fr_auto] gap-4">
        <img src="${project.imgSrc}" loading="lazy" alt="" class="row-span-1">
        <div class="row-span-1 w-10/12 mt-3 mx-auto text-primaryColor z-20">
            <h2 class="font-bold text-xl">${project.title}</h2>
            <p class="language-text mt-2" data-sk="${project.descriptionSK}" data-en="${project.descriptionEN}"></p>
        </div>
        <div class="row-span-1 mx-auto py-4 gap-20 text-primaryColor text-xl inline-flex">
            <a href="${project.linkURL}" class="inline-block">
                <i class="fa-solid fa-link"></i>
                <p class="language-text inline" data-sk='Odkaz' data-en='Link'></p>
            </a>
            <a href="${project.codeURL}" class="inline-block">
                <i class="fa-brands fa-github"></i>
                <p class="language-text inline" data-sk='Kód' data-en='Code'></p>
            </a>
        </div>
    </div>
`;


    articleElement.innerHTML += projectElement;
});


