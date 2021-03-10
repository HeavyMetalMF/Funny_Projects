"use strict"
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');
add.addEventListener('click', function () {
    if (!(name.value === '' && price.value === '' && amount.value === '')) {
        let tr = document.createElement('tr');
        create(tr, name.value, 'name');
        create(tr, price.value, 'price');
        create(tr, amount.value, 'amount');
        create(tr, price.value * amount.value, 'cost');
        let remove = create(tr, 'удалить', 'remove');
        remove.addEventListener('click', function () {
            this.parentElement.parentElement.removeChild(this.parentElement);
            count();
            // console.log(this.parentElement.parentElement)
        })
        table.appendChild(tr);
        // console.log(remove)

    } else {
        alert("Заполните поля");
    }
    count();
});


function create(tr, value, name) {
    let td = document.createElement('td');
    td.innerHTML = value;
    td.classList.add(name);
    tr.appendChild(td);
    return td;
}
function count() {
    let costs = document.querySelectorAll('.cost');
    let cnt = 0;
    if (costs){
        for (let k of costs){
            cnt += Number(k.innerHTML);
        }
        total.innerHTML = cnt;
    }
}









