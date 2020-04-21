let drink = 1;

function shoot(arrow) {
    console.log('Вы выстрелили...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
    return promise;
};

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBear() : giveMoney();
};

function buyBear() {
    console.log('Вам купили пиво');
};

function giveMoney() {
    console.log('Вам дали деньги');
};

function lose() {
    console.log('Вы проиграли');
};

shoot({})
    .then(mark => console.log('Вы попали в цель!!'))
    .then(win)
    .catch(lose)
;