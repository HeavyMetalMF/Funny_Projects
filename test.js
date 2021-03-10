"use strict";
let a = '12345';
let cnt = 0;
for (let i = 0; i <= a.length-1; i++){
    cnt+= Number(a[i])
}
console.log(cnt);
// let arr = ['roma', 'nastya'];
// console.log(arr);
// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj);
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []; // обратите внимание на эту строчку
    for (let j = 0; j < 3; j++) {
        arr[i][j] = j + 1;
    }
}
console.log(arr);

let obj = {
    a: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    b: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    c: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}

// let str = 'london';
function upp(str) {
    let len = str.length;
    let res = str.slice(0,len-1)+str.slice(len-1,len).toUpperCase();
    return res;
}
console.log(upp("london"));

function chisla(num) {
    let rit = []
    for (let i = 1; i < num; i++){
        if (num%i == 0){
            rit.push(i)
        }
    }
    return rit
}


function peresec(arr1,arr2) {
    let res= [];
    for (let k of arr1){
        if (inArr(k, arr2)){
            res.push(k)
        }
    }
    return res;
}


function inArr(elem, arr) {
    if (arr.indexOf(elem) == -1){
        return false;
    }
    else {
        return true;
    }
}


function delitel(num1, num2) {
    let mass1 = chisla(num1)
    let mass2 = chisla(num2)
    let mass3 = peresec(mass1, mass2).pop()
    return mass3
}

console.log(delitel(12,18))



