var _ = require('lodash');

var gems = [
    { name: 'Sunstone', price: 4 }, { name: 'Amethyst', price: 15 },
    { name: 'Prehnite', price: 20 }, { name: 'Sugilite', price: 7 },
    { name: 'Diopside', price: 3 }, { name: 'Feldspar', price: 13 },
    { name: 'Dioptase', price: 2 }, { name: 'Sapphire', price: 20 }
];

function getLodashGems() {
    function priceLt(x) {
        return function (item) {
            return item.price < x;
        };
    }
    var chosen = _(gems).filter(priceLt(10)).take(3).value();
    console.dir(chosen);
}

function getGems() {
    var results = [];
    for (var i = 0; i < gems.length; ++i) {
        var value = gems[i].price;
        if (value < 10) {
            results.push(gems[i]);
            if (results.length === 3) {
                break;
            }
        }
    }
    console.log(results);
}

getLodashGems();
getGems();