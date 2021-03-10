let cells = document.querySelectorAll('#field td');

let i = 0;
for (let k of cells) {
    k.addEventListener('click', function ro() {
        if (i % 2 == 0) {
            this.innerHTML = "X";
        } else {
            this.innerHTML = "O";
        }

        this.removeEventListener('click', ro)
        if (Victory(cells)) {
            alert("Выиграл " + this.innerHTML)
        } else if (i == 8) {
            alert('Ничья')
        }
        i++;
    });
}


function Victory(cells) {
    let combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let comb of combs) {
        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML && cells[comb[1]].innerHTML == cells[comb[2]].innerHTML && cells[comb[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


//start(cells);
