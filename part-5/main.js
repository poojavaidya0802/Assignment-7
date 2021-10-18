//STEP 1
function clickMe() {
    'use strict';
    window.alert("I have been Clicked");
}

function afterload() {
//STEP 2
    'use strict';
    var b = document.getElementById('button1');
    b.onclick = clickMe;
//STEP 3
    var a = document.getElementById('button2');
    a.addEventListener('click', clickMe);
//STEP 4

    var c = document.getElementById('button3');
    c.addEventListener('click', function () {
        window.alert("I have been clicked");
    });

    var d = document.getElementById('button4');
    d.addEventListener('click', function () {
        window.alert("I have been clicked");
    });
}
//STEP 5
window.addEventListener('load', function () {
    'use strict';
    afterload();
 });