// let name = 'Ivan',
//     age = 30,
//     mail = 'ex@mail.ru';

// document.write(`Пользователю: ${name} ${age} лет. Его почтовый адрес ${mail}`);

// let fun = () => {
//     console.log(this);
// };

// // fun();

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// function calcOrDouble (number, basis = 2) {
//     // basis = basis || 2; ES5
//     console.log(number*basis);
// };

// calcOrDouble(3,5);
// calcOrDouble(6);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());

// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a+b+c);
// }

// let numbers = [2, 5, 7];

// log(...numbers);

// 'use strict'
// class Options {
//     constructor(height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;
//     }
//     createDiv() {
//         let newDiv = document.createElement("div");
//         document.body.appendChild(newDiv);
//         newDiv.textContent = "Случайный текст";
//         let param = `height: ${this.height}px; width: ${this.width}px; back-ground: ${this.bg}px; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
//         newDiv.style.cssText = param;
//     }
// }
// const block = new Options(100, 100, "blue", "absolute", "center");
// block.createDiv();
var counting = '';

function fourLetters(names) {
    this.names = names;
    let count = this.names.split(' ');

    count.forEach(function(item){
        if (item.length == 4) {
            counting++;
            }
        });

};

fourLetters("Tror Gvigris Deriana Nori");
console.log(counting);

// function WordCount(str) { 
//     return str.split(" ").length;
//   }
  
//   console.log(WordCount("hello world"));

