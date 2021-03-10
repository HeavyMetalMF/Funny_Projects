<?php
include('header.php');
?>

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<div id="calc">
    <input type="text" id="display" disabled="">
    <div class="button button_C" title="Очистить" data-type="C">C</div>
    <div class="button" data-type="7">7</div>
    <div class="button" data-type="8">8</div>
    <div class="button" data-type="9">9</div>
    <div class="button" data-type="/">÷</div>
    <div class="button" data-type="4">4</div>
    <div class="button" data-type="5">5</div>
    <div class="button" data-type="6">6</div>
    <div class="button" data-type="*">×</div>
    <div class="button" data-type="1">1</div>
    <div class="button" data-type="2">2</div>
    <div class="button" data-type="3">3</div>
    <div class="button" data-type="-">-</div>
    <div class="button" data-type="0">0</div>
    <div class="button" data-type=".">.</div>
    <div class="button" data-type="=">=</div>
    <div class="button" data-type="+">+</div>
</div>
<script>
    let calc = document.getElementById('calc');
    let buttons = document.getElementsByClassName('button');
    let display = document.getElementById('display');
    let str1 = '';
    for (let i = 0; i < buttons.length; i++) {
        addEvent(buttons[i]);
    }
    function addEvent(button) {
        button.addEventListener('click', function () {
            let type = button.getAttribute('data-type');
            if (type === '='){
                str1 = eval(str1);
                display.value = str1;
                // return;
            }else if (type === 'C'){
                str1 = '';
            }else {
                str1 += type;
            }
            display.value = str1;
        })
    }
</script>