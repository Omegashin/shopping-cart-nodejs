var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://content.pulse.ea.com/content/legacy/battlefield-portal/en_US/news/battlefield-1/free-trial-battlefield-1-this-weekend/_jcr_content/featuredImage/renditions/rendition1.img.jpg',
        title: 'Battlefield 1',
        description: 'Battlefield 1 brings you into the dawn of all-out warfare: WW1. Single-player War Stories put you in the front line of combat across the entire theater of war. Intense and dynamic multiplayer action focuses on team play and unique combat roles on land, in the sky, and at sea. No battle is ever the same. Join the ranks of Battlefield 1 and experience war on an epic scale.',
        price: 60
    }),
    new Product({
        imagePath: 'http://cdn.edgecast.steamstatic.com/steam/apps/403640/header.jpg?t=1491499288',
        title: 'Dishonored 2',
        description: 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ "Game of the Year" awards, Dishonored',
        price: 80
    }),
    new Product({
        imagePath: 'https://resource.supercheats.com/library/2016/1478244285codinfinitewarfare.png',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Infinite Warfare delivers three unique game modes: Campaign, Multiplayer, and Zombies.',
        price: 45
    }),
    new Product({
        imagePath: 'http://cdn3.dualshockers.com/wp-content/uploads/2017/06/H2x1_NSwitch_SuperMarioOdyssey.jpg',
        title: 'Super Mario Odyssey',
        description: 'Embark on a cap-tivating, globe-trotting adventure!',
        price: 60
    }),
    new Product({
        imagePath: 'https://data3.origin.com/content/dam/originx/web/app/games/mass-effect/mass-effect-3/mass-effect-3-standard-edition_pdp_3840x2160_en_WW.jpg',
        title: 'Mass Effect 3',
        description: 'Earth is burning. The Reapers have taken over and other civilizations are falling like dominoes.',
        price: 34
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}