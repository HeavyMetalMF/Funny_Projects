<?php
include ('header.php');
$name = '123456';
$arr = [];
echo strlen($name);
for ($i = 0; $i <= strlen($name)-1; $i++){
    $arr[] = $name[$i];
}
print_r($arr);?>
<link rel="stylesheet" type="text/css" href="style.css">
<div id="parent">
    <div id="form">
        <input id="name" placeholder="название">
        <input id="price" placeholder="цена">
        <input id="amount" placeholder="количество">
        <input id="add" type="button" value="добавить">
    </div>

    <h2>Таблица продуктов:</h2>
    <table id="table">
        <tr>
            <th>название</th>
            <th>цена</th>
            <th>кол-во</th>
            <th>сумма</th>
            <th>удалить</th>
        </tr>
    </table>
    <div id="result">
        общий итог: <span id="total">0</span>
    </div>
</div>
<script src="store.js"></script>

