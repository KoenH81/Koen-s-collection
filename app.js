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
        image: './image/star.jpg',
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
        genre: ['Scifi', 'Fanatsy'],
        origin: 'Magic the Gathering',
        image: './images/mtg.jpeg',
        site: 'https://mtg.fandom.com/wiki/Main_Page'
    },
    {
        title: 'Middle-earth',
        description: 'Classical fantassy setting. The origin of a lot of fantasy tropes.',
        genre: ['Fanatsy'],
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
]
var display = document.createElement("div");
display.className = "display";
document.body.append(display);


for (let i = 0; i < universes.length; i++) {
    var card = document.createElement("div");
    card.className = "card";
    display.appendChild(card);

    var image = document.createElement("div");
    image.className = "image";
    card.appendChild(image);
    var imageImg = document.createElement("img");
    imageImg.setAttribute("src", universes[i].image);
    image.appendChild(imageImg);

    var title = document.createElement("div");
    title.className = "title";
    card.appendChild(title);
    var titleText = document.createTextNode(universes[i].title);
    title.appendChild(titleText);

    var genre = document.createElement("div");
    genre.className = "genre";
    card.appendChild(genre);
    // var genreText = document.createTextNode(universes[i].genre);
    // genre.appendChild(genreText);
    for (let x = 0; x < universes[i].genre.length; x++) {
        var genreType = document.createElement("div");
        genreType.className = "genreType";
        genre.append(genreType);
        var genreTypeText = document.createTextNode(universes[i].genre[x])
        genreType.append(genreTypeText);
    }

    var description = document.createElement("div");
    description.className = "description";
    card.appendChild(description);
    var descriptionText = document.createTextNode(universes[i].description);
    description.appendChild(descriptionText);
    var originText = document.createTextNode(universes[i].origin);
    description.appendChild(originText);

    var site = document.createElement("div");
    site.className = "site";
    card.appendChild(site);
    var siteAnker = document.createElement("a");
    siteAnker.setAttribute("href", universes[i].site);
    siteAnker.innerText = "Wiki";
    site.appendChild(siteAnker);

}
console.log(document.body.children) 