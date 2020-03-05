let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// heart.forEach(function(item, i , arr) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был текст');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello World!</h1>';

div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);