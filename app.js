const universes = [
    {
        title: 'Warhammer Fantasy',
        description: 'Grimdark fantasy setting with a planet roughly based on earth and 2 moons.',
        genre: ['Grimdark', 'Fantasy'],
        origin: 'Games Workhop',
        image: './images/warhammerf.jpg',
        site: 'https://warhammerfantasy.fandom.com/wiki/Warhammer_Wiki'
    },
    {
        title: 'Warhammer 40k',
        description: 'Dystopian militaristic scifi setting with fantasy races.',
        genre: ['Scifi', 'Fantasy', 'Dystopia'],
        origin: 'Games Workshop',
        image: './images/warhammer40k.jpeg',
        site: 'https://warhammer40k.fandom.com/wiki/Warhammer_40k_Wiki'
    },
    {
        title: 'Forgotten Realms',
        description: 'Classic fantasy setting created for Dungeons & Dragons',
        genre: ['Fantasy'],
        origin: 'Dungeons & Dragons',
        image: './images/forgotten.jpg',
        site: 'https://forgottenrealms.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Ravenloft',
        description: 'Gothic horror fantasy setting created for Dungeons & Dragons',
        genre: ['Grimdark', 'Fantasy', 'Horror'],
        origin: 'Dungeons & Dragons',
        image: './images/ravenloft.jpg',
        site: 'https://ravenloft.fandom.com/wiki/Ravenloft_Wiki'
    },
    {
        title: 'Discworld',
        description: 'Humoristic fantasy setting taking place on a disc-like planet.',
        genre: ['Fantasy'],
        origin: 'Novels by Terry Pratchett',
        image: './images/disc.jpg',
        site: 'https://discworld.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Star Wars',
        description: 'Scifi setting set in a galaxy far, far away.',
        genre: ['Scifi'],
        origin: 'George Lucas',
        image: './images/war.jpg',
        site: 'https://starwars.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Dune',
        description: 'Scifi universe set in a distant future of humanity.',
        genre: ['Scifi'],
        origin: 'Novels by Frank Herbert',
        image: './images/dune.jpg',
        site: 'https://dune.fandom.com/wiki/Dune_Wiki'
    },
    {
        title: 'Multiverse (MTG)',
        description: 'Scifi fantasy setting taking place in a near-infinite number of different planes.',
        genre: ['Scifi', 'Fantasy'],
        origin: 'Magic the Gathering',
        image: './images/mtg.jpeg',
        site: 'https://mtg.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Middle-earth',
        description: 'Classical fantassy setting. The origin of a lot of fantasy tropes.',
        genre: ['Fantasy'],
        origin: 'Novels by J.R.R Tolkien',
        image: './images/tolkien.jpg',
        site: 'https://lotr.fandom.com/wiki/Middle-earth'
    },
    {
        title: 'World of A Song of Ice and Fire',
        description: 'Fantasy setting taking place on the fictional continents Westeros and Essos.',
        genre: ['Fantasy'],
        origin: 'Novels by George R.R. Martin',
        image: './images/thrones.jpg',
        site: 'https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki'
    },
    {
        title: 'Harry Potter',
        description: 'Parallel fictional reality where magic exists.',
        genre: ['Fantasy'],
        origin: 'Novels by J.K. Rowling',
        image: './images/harry.jpg',
        site: 'https://harrypotter.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Witcher',
        description: 'Unnamed planet with low-magic and monsters.',
        genre: ['Fantasy', 'Medieval'],
        origin: 'Novels by Andrzej Sapkowski',
        image: './images/witcher.jpg',
        site: 'https://witcher.fandom.com/wiki/Witcher_Wiki'
    },
    {
        title: 'Fallout',
        description: 'Alternate timeline on earth during and after a nuclear disaster',
        genre: ['Scifi'],
        origin: 'Interplay Entertainment, Obsidian, Bethesda',
        image: './images/fallout.jpg',
        site: 'https://fallout.fandom.com/wiki/Fallout_Wiki'
    },
    {
        title: 'The Elder Scrolls',
        description: 'Fantasy setting mainly taking place on the continent of Tamriel on the fictional world Nirn.',
        genre: ['Fantasy'],
        origin: 'Bethesda',
        image: './images/scroll.jpg',
        site: 'https://fallout.fandom.com/wiki/Fallout_Wiki'
    },
    {
        title: 'World of Darkness',
        description: 'Fantasy, horror setting taking place on an alternate earth.',
        genre: ['Fantasy', 'Grimdark', 'Mordern', 'Horror'],
        origin: 'Vampire: The Masquerade',
        image: './images/vampire.jpg',
        site: 'https://whitewolf.fandom.com/wiki/World_of_Darkness'
    },
]

// create card container
var display = document.createElement("div");
display.className = "display";
document.body.append(display);

// sort alphabetically
function SortArray(x, y) {
    if (x.title < y.title) { return -1; }
    if (x.title > y.title) { return 1; }
    return 0;
}
const universesS = universes.sort(SortArray);

// create card + append content
for (let i = 0; i < universesS.length; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.id = i;
    //card.style.display = 'none';
    display.appendChild(card);

    var image = document.createElement("div");
    image.className = "image";
    card.appendChild(image);
    var imageImg = document.createElement("img");
    imageImg.setAttribute("src", universesS[i].image);
    image.appendChild(imageImg);

    var title = document.createElement("div");
    title.className = "title";
    card.appendChild(title);
    var titleText = document.createTextNode(universesS[i].title);
    title.appendChild(titleText);

    var genre = document.createElement("div");
    genre.className = "genre";
    card.appendChild(genre);
    for (let x = 0; x < universesS[i].genre.length; x++) {
        var genreType = document.createElement("div");
        genreType.className = "genreType";
        genre.append(genreType);
        var genreTypeText = document.createTextNode(universesS[i].genre[x])
        genreType.append(genreTypeText);
    }

    var description = document.createElement("div");
    description.className = "description";
    card.appendChild(description);
    var descriptionText = document.createTextNode(universesS[i].description);
    description.appendChild(descriptionText);

    var origins = document.createElement("div");
    origins.className = "origin";
    card.append(origins);
    var originText = document.createTextNode("Origin: " + universesS[i].origin);
    origins.appendChild(originText);

    var site = document.createElement("div");
    site.className = "site";
    card.appendChild(site);

    var siteAnker = document.createElement("a");
    siteAnker.href = universesS[i].site;
    var search = document.createElement("img");
    search.className = "search";
    search.setAttribute("src", "./images/search.jpg");
    site.append(siteAnker);
    siteAnker.append(search);

    var siteTitle = document.createElement("p");
    siteTitle.className = "siteTitle";
    var siteTitleText = document.createTextNode(universesS[i].title);
    siteTitle.append(siteTitleText);
    site.append(siteTitle);
}
//create filter for genre: fantasy
//still needs an off-state. maybe look for display = none?

// let clickFan = document.getElementById("fanBtn");
// clickFan.addEventListener('click', filterOnOff);

// function filterOnOff() {
//     for (let i = 0; i < universesS.length; i++) {
//         var checkCard = document.getElementById(i);
//         if (checkCard.style.display === 'none') {
//             for (let i = 0; i < universesS.length; i++)
//                 checkCard.style.display = 'flex';
//             //break;
//         }
//         else {
//             noCard;
//             filterFan;
//         }
//     }
// }





let thisBetterFuckingWorks = document.getElementById("fanBtn");
thisBetterFuckingWorks.addEventListener('click', noCard);
thisBetterFuckingWorks.addEventListener('click', filterFan);

function noCard() {
    for (let i = 0; i < universesS.length; i++) {
        var noCard = document.getElementById(i);
        noCard.style.display = 'none';
    }
}

function filterFan() {
    for (let i = 0; i < universesS.length; i++) {
        for (let x = 0; x < universesS[i].genre.length; x++) {
            if (universesS[i].genre[x] === 'Fantasy') {
                var fanId = document.getElementById(i);
                fanId.style.display = 'flex';
            }
        }
    }
}

// create filter show/hide function
function filterShow() {
    var x = document.getElementById("filterBtns");
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
    else {
        x.style.display = "none";
    }
}
document.getElementById("filterImg").addEventListener("click", filterShow);


