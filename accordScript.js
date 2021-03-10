"use strict"
let parent = document.querySelector('#parent');
let links = parent.querySelectorAll('.tab .link a');
let divs = parent.querySelectorAll('.tab');
console.log(links);
console.log(divs);


// другое поведение таблички (много активных ссылок)
// for (let i = 0; i < links.length; i++){
//     links[i].addEventListener('click', function (event) {
//         divs[i].classList.toggle('active');
//         event.preventDefault();
//     });
// }


for (let k of links) {
    k.addEventListener('click', function (event) {
        let activeDiv = parent.querySelector('.tab.active');

        if (activeDiv) {
            activeDiv.classList.remove('active');
        }

        this.parentElement.parentElement.classList.add('active');
    });
}