"use strict"
let ul = document.getElementById('list');
let inp = document.getElementById('input');
inp.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && inp.value !== '') {
        let li = document.createElement('li');
        let task = document.createElement('span');
        task.classList.add('task');
        li.appendChild(task);
        // console.log(this.value);
        task.innerHTML = this.value;


        let remove = document.createElement('span');
        remove.innerHTML = 'delete';
        remove.classList.add('remove');
        remove.addEventListener('click', function () {
            console.log(this.parentElement);
            console.log(this.parentElement.parentElement)
            this.parentElement.parentElement.removeChild(this.parentElement);
        });
        li.appendChild(remove);


        let change = document.createElement('span');
        change.innerHTML = 'done';
        change.classList.add('change');
        change.addEventListener('click', function () {
            this.parentElement.classList.add('done');
        });
        li.appendChild(change);

        this.value = '';
        ul.appendChild(li);
    }
});

let fields = document.querySelectorAll('#age_inp');
let help = document.querySelector('#help');


for (let k of fields) {
    k.addEventListener('focus', event => {
        let text = event.target.getAttribute('data-help');
        // help.innerHTML = text;
        help.textContent = text;
    })
    k.addEventListener('blur', () => {
        help.textContent = '';
    })
}






















