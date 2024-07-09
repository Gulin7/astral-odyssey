var COLORS = [
    'black',
    'gray',
    'white',
    'red',
    'purple',
    'green',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
    'aquamarine',
    'beige',
    'brown',
    'cyan',
    'orange',
    'gold',
    'pink',
    'khaki',
];

let ANIMALS = [
    'lion',
    'cow',
    'shark',
    'rabbit',
    'duck',
    'monkey',
    'goat',
    'koala',
    'tiger',
    'penguin',
    'panda',
    'bear',
    'horse',
    'girafee',
    'lizard',
    'zebra',
];

let COUNTRIES = [
    'france',
    'china',
    'spain',
    'italy',
    'canada',
    'peru',
    'brasil',
    'argentina',
    'colombia',
    'mexico',
    'japan',
    'thailand',
    'england',
    'israel',
    'egypt',
    'russia',
];

let FRUITS = [
    'apple',
    'banana',
    'orange',
    'grape',
    'kiwi',
    'mango',
    'strawberry',
    'watermelon',
    'pineapple',
    'peach',
    'pear',
    'lemon',
    'blueberry',
    'raspberry',
    'blackberry',
    'avocado',
    'coconut',
    'cherry',
    'fig',
    'plum',
    'pomegranate',
    'apricot',
    'lychee',
    'passion fruit',
    'guava',
    'papaya',
    'dragon fruit',
];

let VEGETABLES = [
    'carrot',
    'potato',
    'tomato',
    'cucumber',
    'lettuce',
    'spinach',
    'broccoli',
    'cauliflower',
    'zucchini',
    'eggplant',
    'bell pepper',
    'onion',
    'garlic',
    'ginger',
    'celery',
    'asparagus',
    'mushroom',
    'sweet potato',
    'corn',
    'peas',
    'green beans',
    'brussels sprout',
    'cabbage',
    'radish',
    'beetroot',
    'pumpkin',
];

let RANDOM = ['spider'];

function randomWord(type?: string) {
    switch (type) {
        case 'animals':
            return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        case 'countries':
            return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        case 'colors':
            return COLORS[Math.floor(Math.random() * COLORS.length)];
        case 'fruits':
            return FRUITS[Math.floor(Math.random() * FRUITS.length)];
        case 'vegetables':
            return VEGETABLES[Math.floor(Math.random() * VEGETABLES.length)];
        case 'random':
            return RANDOM[Math.floor(Math.random() * RANDOM.length)];

        default:
            return RANDOM[Math.floor(Math.random() * RANDOM.length)];
    }
}

export {randomWord};
