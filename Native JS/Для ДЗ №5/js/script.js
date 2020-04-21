let column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    text_apple = document.getElementById('title'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    menu_items_5 = document.createElement('li'),
    menu_items = document.querySelectorAll('.menu-item');

menu.replaceChild(menu_items[1], menu_items[3]);
menu.appendChild(menu_items[3]);
menu.appendChild(menu_items_5);
menu_items_5.classList.add('menu-item');
menu_items_5.textContent = ('Пятый пункт');

body.style.background = 'URL(img/apple_true.jpg)';

text_apple.textContent = ('Мы продаем только подлинную технику Apple');

column[1].removeChild(adv);

let questions = prompt('Какое у Вас отношение к технике Apple?'),
    prompt1 = document.querySelector('.prompt');

prompt1.textContent = (questions);